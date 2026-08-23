import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Zona Oeste Roleplay",
  description: "Política de Privacidade do Zona Oeste Roleplay. Saiba como seus dados são coletados, usados e protegidos.",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div style={{ maxWidth: 800, margin: "auto", padding: "120px 34px 80px" }}>
        <Link href="/" style={{ color: "var(--signal)", fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" as const }}>
          ← Voltar ao início
        </Link>

        <h1 style={{ margin: "30px 0 10px", fontFamily: "'Kanit', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".015em" }}>
          Política de <span style={{ color: "var(--signal)" }}>Privacidade</span>
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 40 }}>Última atualização: Agosto de 2026</p>

        <div style={{ display: "grid", gap: 32, color: "var(--muted)", fontSize: 14, lineHeight: 1.8 }}>
          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>1. Informações que Coletamos</h2>
            <p>Podemos coletar as seguintes informações quando você interage com nosso servidor e site:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li>Nome de usuário no FiveM e Discord</li>
              <li>Identificadores únicos (Steam ID, License, Discord ID)</li>
              <li>Endereço IP para fins de moderação e segurança</li>
              <li>Dados de navegação no site (via cookies e analytics)</li>
              <li>Informações fornecidas voluntariamente em formulários</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>2. Como Usamos suas Informações</h2>
            <p>Utilizamos os dados coletados para:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li>Gerenciar sua conta e acesso ao servidor</li>
              <li>Garantir a segurança e integridade da comunidade</li>
              <li>Melhorar a experiência de jogo e o site</li>
              <li>Comunicar atualizações, eventos e novidades</li>
              <li>Resolver disputas e aplicar regras</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>3. Compartilhamento de Dados</h2>
            <p>Não vendemos ou compartilhamos seus dados pessoais com terceiros, exceto quando:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li>Obrigatório por lei ou ordem judicial</li>
              <li>Necessário para proteger os direitos da comunidade</li>
              <li>Com provedores de serviço que auxiliam na operação (hospedagem, analytics)</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>4. Cookies</h2>
            <p>O site pode utilizar cookies para melhorar sua experiência, lembrar preferências e coletar estatísticas de uso. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar o funcionamento do site.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>5. Segurança</h2>
            <p>Adotamos medidas de segurança para proteger seus dados contra acesso não autorizado, alteração ou destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.</p>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>6. Seus Direitos</h2>
            <p>Você tem o direito de:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li>Solicitar acesso aos seus dados pessoais</li>
              <li>Solicitar correção de dados incorretos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar o consentimento para uso de dados</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>7. Contato</h2>
            <p>Em caso de dúvidas sobre esta política, entre em contato pelo nosso <a href={process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/UFEV5632b"} target="_blank" rel="noreferrer" style={{ color: "var(--signal)" }}>Discord oficial</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
