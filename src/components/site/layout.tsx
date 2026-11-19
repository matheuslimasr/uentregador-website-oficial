import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./i18n";
import logo from "@/assets/u-entregador-logo.png";
const navigation = [
  ["Início", "/"],
  ["Como funciona", "/como-funciona"],
  ["Veículos", "/veiculos"],
  ["Para empresas", "/para-empresas"],
  ["Para entregadores", "/para-entregadores"],
  ["Cobertura", "/cobertura"],
  ["Ajuda", "/ajuda"],
] as const;
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="U Entregador — início">
      <img src={logo} alt="" width={47} height={38} />
      <span>
        <span className="brand-name">U Entregador</span>
        <span className="brand-caption">Logística sob demanda</span>
      </span>
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container-site header-inner">
        <Brand />
        <nav aria-label="Navegação principal" className="desktop-nav">
          {navigation.map(([label, to]) => (
            <Link key={to} to={to} activeOptions={{ exact: true }}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <Button variant="ghost" asChild>
            <Link to="/entrar">
              Entrar <ArrowUpRight size={14} />
            </Link>
          </Button>
          <Button variant="brand" asChild>
            <Link to="/baixar-app">
              Solicitar entrega <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-trigger"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" aria-label="Navegação mobile" className="mobile-nav">
          {navigation.map(([label, to]) => (
            <Link key={to} to={to} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link to="/entrar" onClick={() => setOpen(false)}>
            Entrar na minha conta
          </Link>
          <LanguageSwitcher />
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-site">
        <div className="footer-grid">
          <div>
            <Brand />
            <p>
              Conectamos pessoas e negócios a entregadores parceiros. Sua entrega, um novo caminho.
            </p>
          </div>
          <div>
            <h3>PLATAFORMA</h3>
            <Link to="/como-funciona">Como funciona</Link>
            <Link to="/veiculos">Veículos</Link>
            <Link to="/cobertura">Cobertura</Link>
            <Link to="/precos">Preços</Link>
            <Link to="/baixar-app">Aplicativo</Link>
          </div>
          <div>
            <h3>PARA VOCÊ</h3>
            <Link to="/cliente">Clientes</Link>
            <Link to="/para-entregadores">Entregadores</Link>
            <Link to="/para-empresas">Empresas</Link>
            <Link to="/sobre">Sobre o U Entregador</Link>
            <Link to="/entrar">Entrar</Link>
          </div>
          <div>
            <h3>SUPORTE</h3>
            <Link to="/contato">Contato</Link>
            <Link to="/ajuda">Central de ajuda</Link>
            <Link to="/termos">Termos de uso</Link>
            <Link to="/privacidade">Privacidade</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 U Entregador. Todos os direitos reservados.</span>
          <span>Plataforma brasileira · Atuação no estado de São Paulo</span>
        </div>
      </div>
    </footer>
  );
}
