import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { toSource, translate, type Lang } from "@/lib/i18n/translate";

const STORAGE_KEY = "u-entregador-lang";
const ATTRS = ["placeholder", "aria-label", "alt", "title"] as const;
const META_SELECTOR =
  'meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[name="twitter:title"],meta[name="twitter:description"]';

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "pt", setLang: () => {} });
export const useLang = () => useContext(LangContext);

// Originals are remembered so switching back to Portuguese restores the exact source text.
const textOriginals = new WeakMap<Text, string>();
const attrOriginals = new WeakMap<Element, Map<string, string>>();

function applyText(node: Text, lang: Lang) {
  const current = node.nodeValue ?? "";
  const known = textOriginals.get(node);
  // React may have rewritten the node with a new source string.
  const source = known !== undefined && (current === known || current === translate(known, "en")) ? known : current;
  textOriginals.set(node, source);
  const next = translate(source, lang);
  if (next !== current) node.nodeValue = next;
}
function applyAttrs(el: Element, lang: Lang) {
  for (const a of ATTRS) {
    const current = el.getAttribute(a);
    if (current == null) continue;
    let map = attrOriginals.get(el);
    if (!map) attrOriginals.set(el, (map = new Map()));
    const known = map.get(a);
    const source = known !== undefined && (current === known || current === translate(known, "en")) ? known : current;
    map.set(a, source);
    const next = translate(source, lang);
    if (next !== current) el.setAttribute(a, next);
  }
}
function walk(root: Node, lang: Lang) {
  if (root.nodeType === Node.TEXT_NODE) return applyText(root as Text, lang);
  if (!(root instanceof Element)) return;
  if (root.closest("script,style,[data-no-translate]")) return;
  applyAttrs(root, lang);
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let n: Node | null;
  while ((n = w.nextNode())) {
    if (n.nodeType === Node.TEXT_NODE) {
      const p = n.parentElement;
      if (p && !p.closest("script,style,[data-no-translate]")) applyText(n as Text, lang);
    } else applyAttrs(n as Element, lang);
  }
}
function applyHead(lang: Lang) {
  const t = document.title;
  const nt = translate(toSource(t), lang);
  if (nt !== t) document.title = nt;
  document.querySelectorAll<HTMLMetaElement>(META_SELECTOR).forEach((m) => {
    const src = toSource(m.content);
    const next = translate(src, lang);
    if (next !== m.content) m.content = next;
  });
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "pt") setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  useEffect(() => {
    walk(document.body, lang);
    applyHead(lang);
    const obs = new MutationObserver((muts) => {
      obs.disconnect();
      for (const m of muts) {
        if (m.type === "characterData") applyText(m.target as Text, lang);
        else if (m.type === "attributes") applyAttrs(m.target as Element, lang);
        else m.addedNodes.forEach((n) => walk(n, lang));
      }
      applyHead(lang);
      observe();
    });
    const observe = () => {
      obs.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...ATTRS] });
      obs.observe(document.head, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ["content"] });
    };
    observe();
    return () => obs.disconnect();
  }, [lang, pathname]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-switch" role="group" aria-label="Idioma" data-no-translate>
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={lang === l}
          aria-label={l === "pt" ? "Português (Brasil)" : "English"}
          onClick={() => setLang(l)}
        >
          {l === "pt" ? "PT" : "EN"}
        </button>
      ))}
    </div>
  );
}
