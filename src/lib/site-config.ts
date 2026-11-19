export const siteConfig = {
  name: "U Entregador",
  coverageState: "São Paulo",
  coverageStates: ["SP"],
  bicycleActivationFee: 0,
  enabledVehicles: [] as string[],
  appAndroidUrl: null,
  appIosUrl: null,
  contactEmail: null,
  authConnected: false,
  contactConnected: false,
  productionUrl: null,
};
export const pageInfo = {
  "/como-funciona": [
    "Como funciona",
    "Da coleta ao destino, uma experiência mais prática.",
    "Conheça as etapas para solicitar uma entrega pelo aplicativo U Entregador.",
  ],
  "/cliente": [
    "Para clientes",
    "Uma solução para o que você precisa entregar.",
    "Conecte-se a entregadores parceiros e transporte suas encomendas e produtos no estado de São Paulo.",
  ],
  "/para-empresas": [
    "Para empresas",
    "Sua operação vai mais longe.",
    "Entregas sob demanda para apoiar a rotina de lojas, pequenos negócios e empresas em São Paulo.",
  ],
  "/para-entregadores": [
    "Para entregadores",
    "Seu próximo caminho começa aqui.",
    "Conheça o U Entregador e as orientações para se tornar um entregador parceiro.",
  ],
  "/veiculos": [
    "Veículos",
    "Cada entrega pede o veículo certo.",
    "Conheça os tipos de veículo e consulte as categorias habilitadas para seu trajeto no aplicativo.",
  ],
  "/cobertura": [
    "Cobertura",
    "Nossa conexão é com São Paulo.",
    "O U Entregador atua exclusivamente no estado de São Paulo. A disponibilidade depende da região e do trajeto.",
  ],
  "/precos": [
    "Preços",
    "Informações claras antes de confirmar.",
    "Consulte o valor e as condições da sua entrega diretamente no aplicativo U Entregador.",
  ],
  "/baixar-app": [
    "Aplicativo",
    "U Entregador. Seu próximo destino.",
    "Solicite entregas e consulte as etapas do pedido pelo aplicativo da plataforma.",
  ],
  "/sobre": [
    "Sobre nós",
    "Conectamos pessoas. Movemos possibilidades.",
    "Somos uma plataforma brasileira de intermediação de entregas sob demanda, com atuação no estado de São Paulo.",
  ],
  "/contato": [
    "Contato",
    "Estamos aqui para ajudar.",
    "Encontre orientações para atendimento, dúvidas e interesse comercial no U Entregador.",
  ],
  "/ajuda": [
    "Central de ajuda",
    "Como podemos ajudar?",
    "Encontre respostas sobre solicitações, cobertura, preços e cadastro de entregadores.",
  ],
  "/entrar": [
    "Entrar",
    "Que bom ter você por aqui.",
    "Escolha o seu perfil para acessar o U Entregador.",
  ],
  "/entrar/cliente": [
    "Entrar como cliente",
    "Sua próxima entrega começa aqui.",
    "Acesso de clientes à plataforma U Entregador.",
  ],
  "/entrar/entregador": [
    "Entrar como entregador",
    "Bom ter você de volta, parceiro.",
    "Acesso de entregadores parceiros à plataforma U Entregador.",
  ],
  "/recuperar-senha": [
    "Recuperar acesso",
    "Vamos recuperar seu acesso.",
    "Recuperação de senha da sua conta U Entregador.",
  ],
  "/termos": [
    "Termos de uso",
    "Transparência em cada etapa.",
    "Consulte a disponibilidade dos termos oficiais de utilização da plataforma U Entregador.",
  ],
  "/privacidade": [
    "Política de privacidade",
    "Seus dados merecem cuidado.",
    "Informações sobre a disponibilidade da política oficial de privacidade do U Entregador.",
  ],
} as const;
export type PagePath = keyof typeof pageInfo;
export const SITE_URL = "https://uentregador.com.br";
const PRIVATE_PATHS = ["/entrar", "/entrar/cliente", "/entrar/entregador", "/recuperar-senha"];
export function pageHead(path: PagePath) {
  const [label, , description] = pageInfo[path];
  const title = `${label} | U Entregador`;
  const url = `${SITE_URL}${path}`;
  return {
    links: [{ rel: "canonical", href: url }],
    meta: [
      ...(PRIVATE_PATHS.includes(path) ? [{ name: "robots", content: "noindex, follow" }] : []),
      { property: "og:url", content: url },
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
export const faqs = [
  [
    "Como solicitar uma entrega?",
    "No aplicativo U Entregador, informe os endereços de coleta e destino, consulte os veículos disponíveis, confira as condições e confirme sua solicitação.",
  ],
  [
    "Quem pode utilizar a plataforma?",
    "Pessoas físicas, pequenos negócios e empresas que precisam transportar produtos, objetos e mercadorias dentro das regiões atendidas.",
  ],
  [
    "Quais veículos estão disponíveis?",
    "As categorias habilitadas devem ser consultadas no aplicativo para o seu trajeto. Os tipos apresentados no site são referências; capacidade e disponibilidade precisam de confirmação.",
  ],
  [
    "Como consultar preços e pagamentos?",
    "Confira o valor e os meios de pagamento apresentados no aplicativo antes de confirmar. Não há uma tabela pública de preços confirmada neste site.",
  ],
  [
    "Posso cancelar uma solicitação?",
    "Consulte as opções e condições de cancelamento do seu pedido no aplicativo. As regras oficiais e eventuais cobranças dependem das condições da plataforma.",
  ],
  [
    "Como me cadastrar como entregador?",
    "O cadastro deve ser realizado pelo canal oficial da plataforma, com envio das informações solicitadas e análise cadastral. O link oficial ainda precisa ser disponibilizado neste site.",
  ],
  [
    "Existe taxa de ativação?",
    "Bicicleta não possui taxa de ativação. Para outros veículos, consulte os valores oficiais e as condições antes de se cadastrar. Não há promessa de demanda ou ganhos garantidos.",
  ],
  [
    "Onde o U Entregador atua?",
    "Exclusivamente no estado de São Paulo. A atuação no estado não significa cobertura de todos os municípios: confirme a disponibilidade do trajeto no aplicativo.",
  ],
  [
    "Como falar com o suporte?",
    "Consulte os canais de atendimento do aplicativo. Os contatos públicos oficiais ainda aguardam confirmação para serem disponibilizados neste site.",
  ],
];
