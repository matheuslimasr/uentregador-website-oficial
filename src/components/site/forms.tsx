import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Eye, EyeOff, ArrowRight, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brand } from "./layout";
import courier from "@/assets/entregador-parceiro.jpg";
export function AuthPage({
  partner = false,
  recover = false,
}: {
  partner?: boolean;
  recover?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const handle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(
      recover
        ? "A recuperação ainda não está conectada ao sistema existente. Nenhum e-mail foi enviado."
        : "O acesso ainda não está conectado à plataforma existente. Nenhuma autenticação foi realizada.",
    );
  };
  return (
    <div className="auth-layout">
      <div className="auth-side">
        <span className="eyebrow">{partner ? "Entregador parceiro" : "U Entregador"}</span>
        <h1>
          {recover
            ? "Vamos recuperar seu acesso."
            : partner
              ? "Bom ter você de volta, parceiro."
              : "Sua próxima entrega começa aqui."}
        </h1>
        <p>
          {partner
            ? "Consulte as condições, orientações e solicitações pelo canal oficial da plataforma."
            : "Uma conexão para levar o que importa até o próximo destino."}
        </p>
        <img
          src={courier}
          width={1280}
          height={1024}
          alt="Imagem ilustrativa de entregador com encomenda"
          loading="lazy"
        />
      </div>
      <div className="form-panel">
        <Brand />
        <h2>
          {recover
            ? "Recuperar senha"
            : partner
              ? "Acessar minha conta de entregador"
              : "Entrar como cliente"}
        </h2>
        <p className="text-sm text-muted-foreground">
          {recover
            ? "Informe o e-mail associado à sua conta."
            : "Utilize o e-mail da sua conta na plataforma."}
        </p>
        <div className="notice">
          <LockKeyhole size={17} />
          <strong> Conexão pendente.</strong>{" "}
          {recover
            ? "O envio de recuperação depende do sistema de acesso existente."
            : "O acesso será habilitado após a conexão com o sistema existente do U Entregador."}
        </div>
        <form onSubmit={handle}>
          <div className="field">
            <label htmlFor="auth-email">E-mail</label>
            <Input
              id="auth-email"
              type="email"
              autoComplete="email"
              placeholder="Seu e-mail"
              required
              maxLength={254}
            />
          </div>
          {!recover && (
            <>
              <div className="field">
                <label htmlFor="auth-password">Senha</label>
                <div className="password-field">
                  <Input
                    id="auth-password"
                    type={visible ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    minLength={1}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </div>
              <Link to="/recuperar-senha" className="text-link mb-5">
                Esqueci minha senha
              </Link>
            </>
          )}
          <Button type="submit" className="w-full">
            {recover ? "Solicitar recuperação" : "Entrar"}
            <ArrowRight />
          </Button>
          {message && (
            <div className="form-message" role="status">
              {message}
            </div>
          )}
        </form>
        <p className="text-sm text-muted-foreground mt-6">
          {recover ? (
            <Link to="/entrar" className="text-link">
              Voltar para entrar
            </Link>
          ) : (
            <>
              Ainda não tem uma conta?{" "}
              <Link to={partner ? "/para-entregadores" : "/baixar-app"} className="text-link">
                {partner ? "Conheça o cadastro" : "Conheça o aplicativo"}
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
export function ContactForm() {
  const [message, setMessage] = useState("");
  return (
    <div className="form-panel">
      <h2 className="!mt-0">Fale com a gente</h2>
      <p className="text-sm text-muted-foreground">Atendimento geral e interesse comercial.</p>
      <div className="notice">
        O envio deste formulário aguarda conexão com o atendimento oficial. Nenhuma mensagem será
        enviada nesta versão.
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setMessage(
            "Não foi possível enviar: o serviço de atendimento ainda não está conectado. Nenhum dado foi transmitido.",
          );
        }}
      >
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">Nome *</label>
            <Input id="name" required autoComplete="name" maxLength={120} />
          </div>
          <div className="field">
            <label htmlFor="email">E-mail *</label>
            <Input id="email" required type="email" autoComplete="email" maxLength={254} />
          </div>
          <div className="field">
            <label htmlFor="phone">Telefone</label>
            <Input id="phone" type="tel" autoComplete="tel" maxLength={25} />
          </div>
          <div className="field">
            <label htmlFor="company">Empresa</label>
            <Input id="company" autoComplete="organization" maxLength={120} />
          </div>
          <div className="field">
            <label htmlFor="profile">Seu perfil *</label>
            <select id="profile" required defaultValue="">
              <option value="" disabled>
                Selecione
              </option>
              <option>Cliente</option>
              <option>Entregador</option>
              <option>Empresa</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="subject">Assunto *</label>
            <select id="subject" required defaultValue="">
              <option value="" disabled>
                Selecione
              </option>
              <option>Solicitação de entrega</option>
              <option>Cadastro de entregador</option>
              <option>Interesse comercial</option>
              <option>Suporte e outros assuntos</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="message">Mensagem *</label>
          <textarea id="message" required minLength={10} maxLength={3000} />
        </div>
        <Button type="submit">
          Enviar mensagem
          <ArrowRight />
        </Button>
        {message && (
          <div className="form-message" role="status">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
