import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  UserRound,
  Bike,
  Building2,
  MapPin,
  Package,
  ShieldCheck,
  Route,
  Smartphone,
  Store,
  ShoppingBag,
  Boxes,
  Hammer,
  Truck,
  Check,
  Car,
  CircleHelp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-config";
import courier from "@/assets/entregador-parceiro.jpg";
export function Audience() {
  const audiences = [
    {
      icon: UserRound,
      title: "Para você",
      text: "Uma encomenda, um presente ou algo maior. Encontre um caminho para o que precisa entregar.",
      label: "Conheça a plataforma",
      to: "/cliente" as const,
    },
    {
      icon: Bike,
      title: "Para entregadores",
      text: "Seu veículo pode abrir novos caminhos. Conheça a plataforma e seja um entregador parceiro.",
      label: "Quero ser entregador",
      to: "/para-entregadores" as const,
    },
    {
      icon: Building2,
      title: "Para empresas",
      text: "Da sua loja até o cliente. Uma solução de entrega para acompanhar a rotina do seu negócio.",
      label: "Soluções para empresas",
      to: "/para-empresas" as const,
    },
  ];
  return (
    <section className="section">
      <div className="container-site">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Uma plataforma, muitas possibilidades</span>
            <h2>Uma conexão para cada necessidade.</h2>
            <p>Para quem envia. Para quem entrega. Para quem empreende.</p>
          </div>
        </div>
        <div className="audience-grid">
          {audiences.map(({ icon: Icon, ...a }) => (
            <article className="audience-card" key={a.title}>
              <div className="icon-box">
                <Icon size={23} />
              </div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <Link to={a.to} className="text-link">
                {a.label}
                <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Steps() {
  return (
    <div className="steps">
      {[
        ["Informe o trajeto", "Adicione os endereços de coleta e destino."],
        ["Escolha o veículo", "Consulte a categoria adequada à sua carga."],
        ["Confira e solicite", "Veja o valor e as condições antes de confirmar."],
        ["Acompanhe o pedido", "Consulte as atualizações disponíveis no aplicativo."],
      ].map(([title, text], i) => (
        <div key={title}>
          <div className="step-number">0{i + 1}</div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
export function HowSection() {
  return (
    <section className="section section-tint">
      <div className="container-site">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Simples do início ao destino</span>
            <h2>Sua entrega em quatro passos.</h2>
            <p>Você escolhe o caminho. A gente conecta as pontas.</p>
          </div>
          <Link to="/como-funciona" className="text-link">
            Veja como funciona
            <ArrowRight size={16} />
          </Link>
        </div>
        <Steps />
      </div>
    </section>
  );
}
export function Benefits() {
  return (
    <div className="feature-grid">
      {[
        {
          icon: Route,
          title: "Entregas sob demanda",
          text: "Solicite conforme a sua necessidade, nas regiões atendidas.",
        },
        {
          icon: Package,
          title: "A escolha para sua carga",
          text: "Consulte as categorias habilitadas para o que precisa transportar.",
        },
        {
          icon: Smartphone,
          title: "Tudo começa no aplicativo",
          text: "Veja condições, valores e etapas do pedido em um só lugar.",
        },
      ].map(({ icon: Icon, title, text }) => (
        <article className="feature" key={title}>
          <Icon size={26} />
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
export function BusinessSection() {
  return (
    <section className="section business-band">
      <div className="container-site business-layout">
        <div>
          <span className="eyebrow">U Entregador para empresas</span>
          <h2>
            Seu negócio em movimento.
            <br />
            Sua logística mais prática.
          </h2>
          <p>
            Uma conexão entre o que sua empresa precisa enviar e quem pode levar. Para entregas
            pontuais ou necessidades frequentes.
          </p>
          <Button variant="brand" size="lg" asChild>
            <Link to="/contato">
              Falar com o comercial
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="segments">
          {[
            [ShoppingBag, "E-commerce"],
            [Store, "Lojas físicas"],
            [Boxes, "Distribuidoras"],
            [Hammer, "Materiais de construção"],
            [Building2, "Pequenos negócios"],
            [Truck, "Entregas recorrentes"],
          ].map(([Icon, label]) => {
            const I = Icon as typeof Truck;
            return (
              <div key={String(label)}>
                <I />
                {String(label)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export function CourierSection() {
  return (
    <section className="section">
      <div className="container-site courier-layout">
        <img
          src={courier}
          alt="Representação ilustrativa de entregador ao lado de uma moto, com encomenda e celular"
          width={1280}
          height={1024}
          loading="lazy"
          className="courier-photo"
        />
        <div>
          <span className="eyebrow">Entregadores parceiros</span>
          <h2>
            Novos caminhos.
            <br />
            Novas possibilidades.
          </h2>
          <p className="text-muted-foreground">
            Faça parte de uma plataforma que conecta você a quem precisa de uma entrega.
          </p>
          <ul className="check-list">
            <li>
              <Check />
              Cadastro sujeito à análise da plataforma
            </li>
            <li>
              <Check />
              Consulte as categorias aceitas para seu veículo
            </li>
            <li>
              <Check />
              Bicicleta sem taxa de ativação
            </li>
          </ul>
          <div className="hero-actions">
            <Button variant="brand" size="lg" asChild>
              <Link to="/para-entregadores">
                Quero me cadastrar
                <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/entrar/entregador">
                Já sou entregador
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-5">
            Não há garantia de solicitações ou de ganhos. Imagem ilustrativa.
          </p>
        </div>
      </div>
    </section>
  );
}
export function StateVisual() {
  return (
    <div
      className="state-visual"
      role="img"
      aria-label="Atuação no estado de São Paulo, disponibilidade por região a confirmar"
    >
      <div className="state-marker">
        <MapPin />
        <strong>São Paulo</strong>
        <span>Nosso estado. Muitos caminhos.</span>
      </div>
    </div>
  );
}
export function CoverageSection() {
  return (
    <section className="section section-tint">
      <div className="container-site coverage-section">
        <div>
          <span className="eyebrow">Perto de você</span>
          <h2>
            Conectando caminhos
            <br />
            em São Paulo.
          </h2>
          <p className="text-muted-foreground">
            Nossa atuação é exclusivamente no estado de São Paulo. Consulte a disponibilidade para
            os endereços de coleta e destino no aplicativo.
          </p>
          <Link to="/cobertura" className="text-link">
            Consultar regiões atendidas
            <ArrowUpRight size={17} />
          </Link>
        </div>
        <StateVisual />
      </div>
    </section>
  );
}
export function FAQ({ items = faqs }: { items?: string[][] }) {
  return (
    <Accordion type="single" collapsible>
      {items.map(([question, answer], i) => (
        <AccordionItem value={String(i)} key={question}>
          <AccordionTrigger className="text-base py-5 font-semibold">{question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
export function FAQSection() {
  return (
    <section className="section">
      <div className="container-site faq-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Respostas para seguir em frente</span>
            <h2>Ficou com alguma dúvida?</h2>
          </div>
          <Link to="/ajuda" className="text-link">
            Central de ajuda
            <CircleHelp size={17} />
          </Link>
        </div>
        <FAQ items={faqs.filter((_, i) => [0, 2, 3, 6, 7].includes(i))} />
      </div>
    </section>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <h2>Pronto para fazer sua próxima entrega?</h2>
      <p>Seu próximo caminho começa com uma conexão.</p>
      <div className="hero-actions">
        <Button variant="brand" size="lg" asChild>
          <Link to="/baixar-app">
            Solicitar entrega
            <ArrowUpRight />
          </Link>
        </Button>
        <Button variant="secondary" size="lg" asChild>
          <Link to="/veiculos">
            Conhecer os veículos
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
export const vehicleReferences = [
  { name: "Bicicleta", icon: Bike, text: "Pequenos objetos e encomendas leves." },
  { name: "Moto", icon: Bike, text: "Documentos e encomendas compactas." },
  { name: "Carro Hatch", icon: Car, text: "Objetos e volumes de pequeno porte." },
  { name: "Carro Sedan", icon: Car, text: "Encomendas compatíveis com o porta-malas." },
  { name: "Utilitário", icon: Truck, text: "Produtos e volumes que precisam de mais espaço." },
  { name: "Caminhonete", icon: Truck, text: "Cargas compatíveis com uma caçamba." },
  { name: "Van", icon: Truck, text: "Volumes maiores em compartimento fechado." },
  { name: "HR / VUC", icon: Truck, text: "Mercadorias e múltiplos volumes." },
  { name: "Caminhão", icon: Truck, text: "Cargas de maior porte e volume." },
];
export function VehicleOverview() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Do pequeno ao que pede mais espaço</span>
            <h2>O veículo certo faz a diferença.</h2>
            <p>Consulte no aplicativo as categorias disponíveis para o seu trajeto.</p>
          </div>
          <Link to="/veiculos" className="text-link">
            Explorar categorias
            <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="feature-grid">
          {vehicleReferences
            .filter((_, i) => [1, 2, 6].includes(i))
            .map(({ name, icon: Icon, text }) => (
              <article className="feature" key={name}>
                <Icon size={38} />
                <h3>{name}</h3>
                <p>{text}</p>
                <span className="status-label">
                  Categoria de referência · Consulte disponibilidade
                </span>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
