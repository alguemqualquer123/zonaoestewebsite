import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Zona Oeste Roleplay",
  description: "Termos de Uso do Zona Oeste Roleplay. Conheça as regras e condições de uso do servidor e site.",
};

export default function TermosPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div style={{ maxWidth: 800, margin: "auto", padding: "120px 34px 80px" }}>
        <Link href="/" style={{ color: "var(--signal)", fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" as const }}>
          ← Voltar ao início
        </Link>

        <h1 style={{ margin: "30px 0 10px", fontFamily: "'Kanit', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".015em" }}>
          Termos de <span style={{ color: "var(--signal)" }}>Uso</span>
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 40 }}>Última atualização: Agosto de 2026</p>

        <div style={{ display: "grid", gap: 32, color: "var(--muted)", fontSize: 14, lineHeight: 1.8 }}>
          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar o servidor Zona Oeste Roleplay e seu site, você concorda com estes Termos de Uso. Se não concordar, não utilize nossos serviços.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>2. Elegibilidade</h2>
            <p>Para utilizar o servidor, você precisa:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li>Ter pelo menos 18 anos de idade</li>
              <li>Possuir uma cópia original do GTA V</li>
              <li>Ter o FiveM instalado</li>
              <li>Cumprir todas as regras da comunidade</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>3. Conduta do Usuário</h2>
            <p>Ao jogar no Zona Oeste, você concorda em:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li>Respeitar todos os jogadores e membros da equipe</li>
              <li>Manter a imersão do roleplay</li>
              <li>Não utilizar cheats, exploits ou mods proibidos</li>
              <li>Não praticar assédio, discriminação ou toxicidade</li>
              <li>Reportar problemas através dos canais oficiais</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>4. Propriedade Intelectual</h2>
            <p>Todo o conteúdo do servidor e site (logos, artes, scripts, textos) é propriedade da Zona Oeste Roleplay ou de seus licenciadores. É proibido reproduzir, distribuir ou modificar sem autorização.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>5. Contas e Progresso</h2>
            <p>Sua conta e progresso no servidor são pessoais e intransferíveis. A Zona Oeste não se responsabiliza por perdas de dados, itens ou progresso.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>6. Modificações e Suspensão</h2>
            <p>A equipe reserva-se o direito de modificar, suspender ou descontinuar qualquer aspecto do servidor a qualquer momento, aviso prévio ou não.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>7. Isenção de Responsabilidade</h2>
            <p>O servidor é fornecido &quot;como está&quot;. Não garantimos disponibilidade ininterrupta, ausência de erros ou segurança absoluta dos dados.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>8. Contato</h2>
            <p>Em caso de dúvidas sobre estes termos, entre em contato pelo nosso <a href="https://discord.gg/UFEV5632b" target="_blank" rel="noreferrer" style={{ color: "var(--signal)" }}>Discord oficial</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
