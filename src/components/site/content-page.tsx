import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  UserRound,
  Bike,
  Search,
  FileText,
  Smartphone,
  Check,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { pageInfo, faqs, type PagePath } from "@/lib/site-config";
import {
  Steps,
  Benefits,
  BusinessSection,
  CourierSection,
  StateVisual,
  FAQ,
  vehicleReferences,
  FinalCTA,
} from "./sections";
import { ContactForm } from "./forms";
import logo from "@/assets/u-entregador-logo-color.png";
export function ContentPage({ path }: { path: PagePath }) {
  const [label, title, description] = pageInfo[path];
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <div className="breadcrumb">
            <Link to="/">Início</Link>
            <ArrowRight size={11} />
            {label}
          </div>
          <span className="eyebrow">{label}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
      <PageBody path={path} />
      {!["/entrar", "/termos", "/privacidade", "/contato", "/baixar-app"].includes(path) && (
        <FinalCTA />
      )}
    </>
  );
}
function HelpContent() {
  const [search, setSearch] = useState("");
  const filtered = faqs.filter(([q, a]) =>
    `${q} ${a}`.toLocaleLowerCase("pt-BR").includes(search.toLocaleLowerCase("pt-BR")),
  );
  return (
    <>
      <div className="search-field">
        <Search />
        <Input
          type="search"
          aria-label="Buscar na central de ajuda"
          placeholder="Busque por uma dúvida ou assunto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filtered.length ? (
        <FAQ items={filtered} />
      ) : (
        <p role="status">Nenhuma resposta encontrada. Tente outro assunto.</p>
      )}
      <div className="notice">
        Precisa de mais orientações?{" "}
        <Link to="/contato" className="text-link">
          Consulte o atendimento
          <ArrowRight size={14} />
        </Link>
      </div>
    </>
  );
}
function PageBody({ path }: { path: PagePath }) {
  if (path === "/como-funciona")
    return (
      <>
        <section className="section">
          <div className="container-site">
            <h2>Quatro etapas. Um novo destino.</h2>
            <p className="text-muted-foreground mb-10">
              A solicitação e a confirmação são feitas pelo aplicativo.
            </p>
            <Steps />
            <div className="notice">
              A disponibilidade e o valor são apresentados para o seu trajeto. Confira as
              informações antes de confirmar.
            </div>
          </div>
        </section>
        <section className="section section-tint">
          <div className="container-site two-col">
            <div>
              <h2>Antes de solicitar</h2>
              <ul className="check-list">
                <li>
                  <Check />
                  Tenha os endereços completos de coleta e entrega
                </li>
                <li>
                  <Check />
                  Conheça o tamanho e as características da carga
                </li>
                <li>
                  <Check />
                  Confira as condições apresentadas no aplicativo
                </li>
              </ul>
            </div>
            <div>
              <h2>Depois de confirmar</h2>
              <p>
                Consulte as etapas disponíveis no seu pedido. Para questões operacionais, utilize o
                atendimento indicado pela plataforma.
              </p>
              <Link to="/ajuda" className="text-link">
                Encontre respostas
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  if (path === "/cliente")
    return (
      <>
        <section className="section">
          <div className="container-site">
            <h2>Para as entregas que fazem parte da sua vida.</h2>
            <Benefits />
            <div className="two-col mt-10">
              <div>
                <h3>Encomendas e objetos</h3>
                <p>
                  Uma compra, um presente ou um produto que precisa chegar a outro endereço. Escolha
                  uma categoria compatível com o que precisa transportar.
                </p>
              </div>
              <div>
                <h3>Pequenos negócios</h3>
                <p>
                  Entregas para clientes e movimentação de mercadorias, conforme as condições e a
                  disponibilidade do aplicativo.
                </p>
              </div>
            </div>
            <Button variant="brand" asChild>
              <Link to="/baixar-app">
                Conhecer o aplicativo
                <Smartphone />
              </Link>
            </Button>
          </div>
        </section>
      </>
    );
  if (path === "/para-empresas")
    return (
      <>
        <BusinessSection />
        <section className="section">
          <div className="container-site">
            <h2>Uma conexão que acompanha seu negócio.</h2>
            <Benefits />
            <div className="notice">
              As condições comerciais devem ser confirmadas com a operação. Integrações de API,
              faturamento mensal e SLA dedicado não estão confirmados.
            </div>
            <Button variant="brand" asChild>
              <Link to="/contato">
                Conversar sobre minha empresa
                <Building2 />
              </Link>
            </Button>
          </div>
        </section>
      </>
    );
  if (path === "/para-entregadores")
    return (
      <>
        <CourierSection />
        <section className="section section-tint">
          <div className="container-site">
            <h2>Entenda as etapas do cadastro.</h2>
            <div className="steps">
              {[
                [
                  "Conheça as condições",
                  "Consulte a categoria do seu veículo e as regras oficiais.",
                ],
                [
                  "Envie seu cadastro",
                  "Forneça as informações e os documentos exigidos pelo canal oficial.",
                ],
                [
                  "Aguarde a análise",
                  "A plataforma analisa os dados antes de habilitar seu cadastro.",
                ],
                [
                  "Consulte a operação",
                  "Confira as solicitações disponíveis e as regras no aplicativo.",
                ],
              ].map(([t, p], i) => (
                <div key={t}>
                  <div className="step-number">0{i + 1}</div>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <div className="notice">
              <strong>Bicicleta não possui taxa de ativação.</strong> Os valores para outros
              veículos, as regras de pagamentos e saques e o canal oficial de cadastro aguardam
              confirmação. Não há demanda ou ganhos garantidos.
            </div>
            <Button asChild>
              <Link to="/entrar/entregador">
                Já tenho uma conta
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </>
    );
  if (path === "/veiculos")
    return (
      <section className="section">
        <div className="container-site">
          <h2>Tipos de veículo para diferentes necessidades.</h2>
          <div className="notice">
            <strong>Categorias de referência, não disponibilidade confirmada.</strong> Nenhuma
            categoria foi confirmada como habilitada para publicação. Consulte o aplicativo para
            disponibilidade, capacidade de carga e dimensões oficiais.
          </div>
          <div className="vehicle-grid">
            {vehicleReferences.map(({ name, icon: Icon, text }, i) => (
              <article className="vehicle-card" key={name}>
                <Icon />
                <h3>{name}</h3>
                <p>{text}</p>
                <span className="status-label">Disponibilidade a confirmar</span>
                <details className="mt-5 text-sm">
                  <summary className="text-primary font-bold cursor-pointer">
                    Ver orientações
                  </summary>
                  <p className="mt-3">
                    {text} Verifique a compatibilidade, a embalagem e as condições no aplicativo.{" "}
                    {i === 0
                      ? "Bicicleta não possui taxa de ativação."
                      : "Limites de peso e dimensões não foram informados oficialmente."}
                  </p>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  if (path === "/cobertura")
    return (
      <section className="section">
        <div className="container-site two-col">
          <StateVisual />
          <div>
            <h2>Atuação no estado de São Paulo.</h2>
            <p>
              O U Entregador conecta clientes e entregadores parceiros dentro das regiões
              habilitadas da operação paulista.
            </p>
            <div className="notice">
              Não há confirmação de cobertura integral em todos os municípios. A consulta de um CEP
              neste site ainda não está disponível.
            </div>
            <h3>Como verificar seu trajeto?</h3>
            <p>
              Informe os endereços de coleta e destino no aplicativo e consulte a disponibilidade
              apresentada antes de solicitar.
            </p>
            <Button variant="brand" asChild>
              <Link to="/baixar-app">
                Consultar acesso ao aplicativo
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  if (path === "/precos")
    return (
      <section className="section">
        <div className="container-site content-narrow">
          <h2>Seu valor é consultado no aplicativo.</h2>
          <p>
            Informe o trajeto e consulte as condições apresentadas pela plataforma para a categoria
            escolhida. Confira o valor final antes de confirmar a solicitação.
          </p>
          <div className="feature-grid">
            <article className="feature">
              <h3>Trajeto</h3>
              <p>Informe a coleta e o destino completos.</p>
            </article>
            <article className="feature">
              <h3>Categoria</h3>
              <p>Consulte as opções habilitadas para sua carga.</p>
            </article>
            <article className="feature">
              <h3>Confirmação</h3>
              <p>Revise as condições e o valor apresentado.</p>
            </article>
          </div>
          <div className="notice">
            Não há tabela de preços, taxas de cancelamento ou meios de pagamento oficialmente
            confirmados para publicação neste site.
          </div>
          <h3>Taxa de ativação de entregador</h3>
          <p>
            Bicicleta não possui taxa de ativação. Para outros veículos, consulte os valores
            oficiais antes de se cadastrar.
          </p>
          <Link to="/para-entregadores" className="text-link">
            Orientações para entregadores
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    );
  if (path === "/baixar-app")
    return (
      <section className="section">
        <div className="container-site two-col">
          <div>
            <img
              src={logo}
              alt="Logo oficial U Entregador"
              width={819}
              height={627}
              className="w-40 h-32 object-contain mb-8"
            />
            <h2>Sua entrega começa pelo aplicativo.</h2>
            <p>
              Informe o trajeto, consulte as categorias e condições e acompanhe as atualizações
              disponíveis do pedido.
            </p>
            <ul className="check-list">
              <li>
                <Check />
                Solicitações de entrega
              </li>
              <li>
                <Check />
                Consulta de valores e condições
              </li>
              <li>
                <Check />
                Etapas do pedido
              </li>
            </ul>
          </div>
          <div>
            <h2>Acesso oficial</h2>
            <div className="notice">
              <strong>Links de download aguardando confirmação.</strong> O endereço oficial da loja
              Android ainda não foi informado. Não há confirmação de uma versão iOS publicada.
            </div>
            <p>
              Se já possui o aplicativo oficial instalado, utilize-o para solicitar entregas. Não
              instale arquivos de fontes não verificadas.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contato">
                Consultar orientações de acesso
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  if (path === "/sobre")
    return (
      <section className="section">
        <div className="container-site">
          <div className="two-col">
            <div>
              <span className="eyebrow">Quem somos</span>
              <h2>
                Uma plataforma brasileira.
                <br />
                Uma conexão com você.
              </h2>
            </div>
            <div>
              <p>
                O U Entregador é uma plataforma de logística e intermediação de entregas sob
                demanda. Conectamos pessoas e empresas que precisam transportar produtos, objetos e
                mercadorias a entregadores parceiros cadastrados.
              </p>
              <p>
                Nossa atuação atual é exclusivamente no estado de São Paulo, nas regiões habilitadas
                pela operação.
              </p>
            </div>
          </div>
          <Benefits />
          <div className="notice">
            Informações empresariais, sede e identificação jurídica aguardam os dados oficiais.
            Nenhum endereço ou registro demonstrativo é divulgado.
          </div>
        </div>
      </section>
    );
  if (path === "/contato")
    return (
      <section className="section">
        <div className="container-site two-col">
          <div>
            <h2>Uma conversa para cada necessidade.</h2>
            <p>Clientes, entregadores e empresas encontram aqui um ponto de orientação.</p>
            <div className="feature">
              <ShieldCheck />
              <h3>Atendimento e suporte</h3>
              <p>
                Para pedidos em andamento, consulte os canais de atendimento indicados no
                aplicativo.
              </p>
              <Link to="/ajuda" className="text-link">
                Consultar central de ajuda
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="feature">
              <Building2 />
              <h3>Contato empresarial</h3>
              <p>
                Quer conversar sobre as entregas do seu negócio? Utilize o assunto “Interesse
                comercial” quando o envio estiver habilitado.
              </p>
            </div>
            <div className="notice">
              E-mail, telefone, WhatsApp e horários de atendimento aguardam confirmação oficial.
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    );
  if (path === "/ajuda")
    return (
      <section className="section">
        <div className="container-site content-narrow">
          <HelpContent />
        </div>
      </section>
    );
  if (path === "/entrar")
    return (
      <section className="section">
        <div className="container-site">
          <div className="two-col">
            <article className="audience-card">
              <div className="icon-box">
                <UserRound />
              </div>
              <h2>Sou cliente</h2>
              <p>Acesse com a sua conta de cliente da plataforma.</p>
              <Button variant="brand" asChild>
                <Link to="/entrar/cliente">
                  Entrar como cliente
                  <ArrowRight />
                </Link>
              </Button>
            </article>
            <article className="audience-card">
              <div className="icon-box">
                <Bike />
              </div>
              <h2>Sou entregador</h2>
              <p>Acesse com a sua conta de entregador parceiro.</p>
              <Button variant="brand" asChild>
                <Link to="/entrar/entregador">
                  Entrar como entregador
                  <ArrowRight />
                </Link>
              </Button>
            </article>
          </div>
          <div className="notice">
            As telas de acesso estão preparadas. A autenticação real aguarda conexão com o sistema
            existente da plataforma.
          </div>
        </div>
      </section>
    );
  if (path === "/termos" || path === "/privacidade")
    return (
      <section className="section">
        <div className="container-site legal-state">
          <FileText />
          <h2>
            {path === "/termos"
              ? "Documento oficial de termos de uso"
              : "Documento oficial de privacidade"}
          </h2>
          <p>
            O documento válido ainda não foi fornecido para este site. Nenhuma cláusula jurídica foi
            criada ou apresentada como política oficial.
          </p>
          <div className="notice">
            Antes de utilizar a plataforma, consulte a versão oficial disponibilizada no aplicativo.
            Esta página não substitui o documento oficial.
          </div>
          <Button variant="outline" asChild>
            <Link to="/contato">
              Consultar atendimento
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    );
  return null;
}
