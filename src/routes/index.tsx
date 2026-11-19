import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, ShieldCheck, Route as RouteIcon, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Audience,
  HowSection,
  VehicleOverview,
  Benefits,
  BusinessSection,
  CourierSection,
  CoverageSection,
  FAQSection,
  FinalCTA,
} from "@/components/site/sections";
import hero from "@/assets/logistica-sao-paulo.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "U Entregador | Entregas sob demanda em São Paulo" },
      {
        name: "description",
        content:
          "Conectamos você a entregadores parceiros no estado de São Paulo. Conheça o U Entregador, as opções para clientes, empresas e entregadores.",
      },
      { property: "og:title", content: "U Entregador | Sua entrega começa aqui" },
      {
        property: "og:description",
        content:
          "Logística sob demanda que conecta clientes, empresas e entregadores parceiros em São Paulo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://uentregador.com.br/" },
      { property: "og:image", content: "https://uentregador.com.br/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Van de entregas U Entregador com caixas e aplicativo" },
      { name: "twitter:image", content: "https://uentregador.com.br/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://uentregador.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "U Entregador",
          url: "https://uentregador.com.br/",
          description: "Plataforma de logística e entregas sob demanda no estado de São Paulo.",
          areaServed: "São Paulo, Brasil",
        }),
      },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <>
      <section className="home-hero">
        <img
          src={hero}
          alt="Composição ilustrativa de logística com van, encomendas e representação conceitual do aplicativo"
          width={1920}
          height={1024}
          fetchPriority="high"
          className="hero-photo"
        />
        <div className="container-site hero-content">
          <div className="hero-copy">
            <div className="coverage-pill">
              <MapPin size={13} />
              Atuação no estado de São Paulo
            </div>
            <div className="brand-title">U Entregador</div>
            <h1>
              Sua entrega<span>começa aqui.</span>
            </h1>
            <p>
              Conectamos você a entregadores parceiros para transportar encomendas, produtos e
              mercadorias. Escolha o veículo ideal e solicite pelo aplicativo.
            </p>
            <div className="hero-actions">
              <Button variant="brand" size="lg" asChild>
                <Link to="/baixar-app">
                  Solicitar entrega
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/para-entregadores">
                  Quero ser entregador
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
            <div className="hero-note">
              <Smartphone size={14} />
              Seu próximo destino, a poucos passos.
            </div>
          </div>
        </div>
        <span className="hero-caption">
          Composição ilustrativa · Disponibilidade de veículos conforme o aplicativo
        </span>
      </section>
      <div className="trust-strip">
        <div className="container-site trust-inner">
          <div className="trust-item">
            <RouteIcon />
            Entregas conforme a sua necessidade
          </div>
          <div className="trust-item">
            <ShieldCheck />
            Condições antes de confirmar
          </div>
          <div className="trust-item">
            <Smartphone />
            Conectados pelo aplicativo
          </div>
        </div>
      </div>
      <Audience />
      <HowSection />
      <VehicleOverview />
      <section className="section section-tint">
        <div className="container-site">
          <span className="eyebrow">Menos complicação. Mais conexão.</span>
          <h2>A praticidade que acompanha você.</h2>
          <Benefits />
        </div>
      </section>
      <BusinessSection />
      <CourierSection />
      <CoverageSection />
      <section className="section app-section">
        <div className="container-site app-layout">
          <div>
            <span className="eyebrow">Leve a praticidade com você</span>
            <h2>
              U Entregador.
              <br />O próximo caminho está no seu celular.
            </h2>
            <p>Conheça as orientações de acesso ao aplicativo.</p>
          </div>
          <Button size="lg" asChild>
            <Link to="/baixar-app">
              Conhecer o aplicativo
              <Smartphone />
            </Link>
          </Button>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container-site">
          <span className="eyebrow">Confiança em cada conexão</span>
          <h2>Informação para decidir com tranquilidade.</h2>
          <div className="feature-grid">
            <article className="feature">
              <ShieldCheck />
              <h3>Cadastro e análise</h3>
              <p>O cadastro de parceiros é sujeito à análise da plataforma.</p>
            </article>
            <article className="feature">
              <Smartphone />
              <h3>Orientações e suporte</h3>
              <p>Consulte no aplicativo os canais de atendimento da operação.</p>
            </article>
            <article className="feature">
              <RouteIcon />
              <h3>Regras transparentes</h3>
              <p>Confira as condições oficiais antes de utilizar a plataforma.</p>
              <Link to="/termos" className="text-link">
                Consultar documentos
                <ArrowUpRight size={15} />
              </Link>
            </article>
          </div>
        </div>
      </section>
      <FAQSection />
      <FinalCTA />
    </>
  );
}
