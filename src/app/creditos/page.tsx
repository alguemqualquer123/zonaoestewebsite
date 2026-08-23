import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creditos | Zona Oeste Roleplay",
  description: "Creditos e desenvolvedores do Zona Oeste Roleplay.",
};

export default function CreditosPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div style={{ maxWidth: 800, margin: "auto", padding: "120px 34px 80px" }}>
        <Link href="/" style={{ color: "var(--signal)", fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" as const }}>
          Voltar ao inicio
        </Link>

        <h1 style={{ margin: "30px 0 40px", fontFamily: "'Kanit', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".015em" }}>
          <span style={{ color: "var(--signal)" }}>Creditos</span>
        </h1>

        <div style={{ display: "grid", gap: 40 }}>
          <section style={{ border: "1px solid rgba(242,239,233,.14)", padding: 32, background: "var(--surface)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 55, height: 5, background: "var(--signal)", clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 20 }}>
              <div style={{ width: 80, height: 80, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(242,239,233,.14)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#14171B" }}>
                <Image src="/assets/fenix_logo.png" alt="Fenix Development" width={60} height={60} style={{ objectFit: "contain" }} />
              </div>
              <div>
                <h2 style={{ fontFamily: "'Kanit', sans-serif", fontSize: 22, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", margin: 0 }}>
                  Fenix Development
                </h2>
                <p style={{ color: "var(--signal)", fontFamily: "'Kanit', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", margin: "4px 0 0" }}>
                  Desenvolvimento e Design
                </p>
              </div>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
              Responsavel pelo desenvolvimento completo do site, design visual,
              integracao com o servidor FiveM e toda a infraestrutura tecnica
              que mantem a Zona Oeste online.
            </p>
          </section>

          <section style={{ border: "1px solid rgba(242,239,233,.14)", padding: 32, background: "var(--surface)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 55, height: 5, background: "var(--signal)", clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }} />
            <h2 style={{ fontFamily: "'Kanit', sans-serif", fontSize: 18, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 16, color: "var(--paper)" }}>
              Equipe Zona Oeste
            </h2>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                { role: "Fundador", name: "SR VINIX" },
                { role: "Equipe de Staff", name: "SR VINIX" },
                { role: "Desenvolvimento", name: "Fenix Development" },
              ].map((member) => (
                <div key={member.role} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(242,239,233,.08)" }}>
                  <span style={{ color: "var(--paper)", fontWeight: 600, fontSize: 14 }}>{member.role}</span>
                  <span style={{ color: "var(--muted)", fontSize: 13 }}>{member.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section style={{ border: "1px solid rgba(242,239,233,.14)", padding: 32, background: "var(--surface)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 55, height: 5, background: "var(--signal)", clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }} />
            <h2 style={{ fontFamily: "'Kanit', sans-serif", fontSize: 18, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 16, color: "var(--paper)" }}>
              Tecnologias
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "FiveM", "shadcn/ui"].map((tech) => (
                <span key={tech} style={{ padding: "6px 12px", border: "1px solid rgba(200,236,79,.3)", color: "var(--signal)", fontFamily: "'Kanit', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <div style={{ textAlign: "center", padding: "20px 0", color: "var(--muted)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase" as const }}>
            <p>© 2026 Zona Oeste Roleplay</p>
            <p style={{ marginTop: 4 }}>Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </div>
  );
}
