import { en } from "./en";
export type Lang = "pt" | "en";
export const LANGS: Lang[] = ["pt", "en"];
/** Translate a Portuguese source string. Titles like "Page | Brand" are translated per part. */
export function translate(text: string, lang: Lang): string {
  if (lang === "pt") return text;
  const trimmed = text.trim();
  if (!trimmed) return text;
  const direct = en[trimmed];
  if (direct !== undefined) return text.replace(trimmed, direct);
  if (trimmed.includes(" | ")) {
    return trimmed.split(" | ").map((p) => en[p] ?? p).join(" | ");
  }
  return text;
}
let reverse: Map<string, string> | null = null;
/** Recover the Portuguese source of a string that may already be translated. */
export function toSource(text: string): string {
  if (!reverse) reverse = new Map(Object.entries(en).map(([k, v]) => [v, k]));
  const t = text.trim();
  if (reverse.has(t)) return reverse.get(t)!;
  if (t.includes(" | ")) return t.split(" | ").map((p) => reverse!.get(p) ?? p).join(" | ");
  return text;
}
