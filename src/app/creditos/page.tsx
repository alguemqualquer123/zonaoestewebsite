import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Créditos | Zona Oeste Roleplay",
  description: "Créditos e desenvolvedores do Zona Oeste Roleplay.",
};

function DiscordIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function GlobeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function CreditosPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div style={{ maxWidth: 800, margin: "auto", padding: "120px 34px 80px" }}>
        <Link href="/" style={{ color: "var(--signal)", fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" as const }}>
          ← Voltar ao início
        </Link>

        <h1 style={{ margin: "30px 0 40px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", textTransform: "uppercase", letterSpacing: ".015em" }}>
          <span style={{ color: "var(--signal)" }}>Créditos</span>
        </h1>

        <div style={{ display: "grid", gap: 32 }}>
          {/* ── Fenix Development Card ── */}
          <section style={{ border: "1px solid rgba(200,236,79,.25)", padding: 0, background: "linear-gradient(135deg, rgba(200,236,79,.06) 0%, var(--surface) 50%)", position: "relative", overflow: "hidden", borderRadius: 12 }}>
            {/* Top accent */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 4, background: "linear-gradient(90deg, var(--signal), rgba(200,236,79,.3), transparent)" }} />

            <div style={{ padding: "36px 32px 32px" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
                <div style={{ width: 80, height: 80, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(200,236,79,.2)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#0D0F12" }}>
                  <img src="/assets/fenix_logo.png" alt="Fenix Development" width={60} height={60} style={{ objectFit: "contain" }} />
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 24, textTransform: "uppercase", letterSpacing: ".04em", margin: 0, lineHeight: 1.1 }}>
                    Fenix Development
                  </h2>
                  <p style={{ color: "var(--signal)", fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", margin: "6px 0 0" }}>
                    Desenvolvimento & Design
                  </p>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8, margin: "0 0 24px", fontFamily: "'Inter', sans-serif" }}>
                Responsável pelo desenvolvimento completo do site, design visual,
                integração com o servidor FiveM e toda a infraestrutura técnica
                que mantém a Zona Oeste online.
              </p>

              {/* Links */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="https://discord.gg/XKBFcZPb8"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 18px",
                    background: "rgba(88,101,242,.15)",
                    border: "1px solid rgba(88,101,242,.35)",
                    borderRadius: 8,
                    color: "#8b9aff",
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: ".04em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all .25s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(88,101,242,.25)"; e.currentTarget.style.borderColor = "rgba(88,101,242,.55)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(88,101,242,.15)"; e.currentTarget.style.borderColor = "rgba(88,101,242,.35)"; e.currentTarget.style.transform = "none"; }}
                >
                  <DiscordIcon size={16} /> Discord
                </a>
                <a
                  href="https://fenixdevelopment.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 18px",
                    background: "rgba(200,236,79,.08)",
                    border: "1px solid rgba(200,236,79,.25)",
                    borderRadius: 8,
                    color: "var(--signal)",
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: ".04em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all .25s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(200,236,79,.15)"; e.currentTarget.style.borderColor = "rgba(200,236,79,.5)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(200,236,79,.08)"; e.currentTarget.style.borderColor = "rgba(200,236,79,.25)"; e.currentTarget.style.transform = "none"; }}
                >
                  <GlobeIcon size={16} /> Website
                </a>
              </div>
            </div>
          </section>

          {/* ── Equipe Card ── */}
          <section style={{ border: "1px solid rgba(242,239,233,.1)", padding: "28px 32px", background: "var(--surface)", position: "relative", overflow: "hidden", borderRadius: 12 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 44, height: 4, background: "var(--signal)", clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }} />
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 18, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 18, color: "var(--paper)" }}>
              Equipe Zona Oeste
            </h2>
            <div style={{ display: "grid", gap: 0 }}>
              {[
                { role: "Fundador", name: "SR VINIX" },
                { role: "Equipe de Staff", name: "SR VINIX" },
                { role: "Desenvolvimento", name: "Fenix Development" },
              ].map((member, i) => (
                <div key={member.role} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: i < 2 ? "1px solid rgba(242,239,233,.06)" : "none" }}>
                  <span style={{ color: "var(--paper)", fontWeight: 600, fontSize: 14, fontFamily: "'Inter', sans-serif" }}>{member.role}</span>
                  <span style={{ color: member.name === "Fenix Development" ? "var(--signal)" : "var(--muted)", fontSize: 13, fontFamily: "'Inter', sans-serif", fontWeight: member.name === "Fenix Development" ? 700 : 400 }}>{member.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Tecnologias Card ── */}
          <section style={{ border: "1px solid rgba(242,239,233,.1)", padding: "28px 32px", background: "var(--surface)", position: "relative", overflow: "hidden", borderRadius: 12 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 44, height: 4, background: "var(--signal)", clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }} />
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 18, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 18, color: "var(--paper)" }}>
              Tecnologias
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "FiveM", "shadcn/ui"].map((tech) => (
                <span key={tech} style={{ padding: "6px 14px", border: "1px solid rgba(200,236,79,.2)", color: "var(--signal)", fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", borderRadius: 6, background: "rgba(200,236,79,.04)" }}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* ── Footer ── */}
          <div style={{ textAlign: "center", padding: "24px 0 0", color: "var(--muted)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase" as const, fontFamily: "'Inter', sans-serif", borderTop: "1px solid var(--line)" }}>
            <p style={{ margin: 0 }}>© 2026 Zona Oeste Roleplay</p>
            <p style={{ margin: "4px 0 0" }}>Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </div>
  );
}
