import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regras | Zona Oeste Roleplay",
  description: "Regras oficiais do Zona Oeste Roleplay.",
};

const rules = [
  { title: "Respeito entre jogadores", items: ["Trate todos com respeito. Preconceito, assédio e discriminação resultam em banimento.", "Não pratique bullying, xingamentos ou ofensas pessoais.", "Respeite a diversidade da comunidade."] },
  { title: "Roleplay e imersão", items: ["Mantenha sempre a interpretação do seu personagem.", "Não quebre a imersão sem motivo válido dentro da cena.", "Evite metagaming (usar informações OOC que o personagem não saberia).", "Evite powergaming (forçar ações irreais em outros jogadores)."] },
  { title: "Conflitos e combate", items: ["Proibido RDM: não ataque sem motivo e contexto.", "Proibido VDM: não use veículos como arma contra jogadores sem contexto.", "Toda ação de conflito precisa ter precedente narrativo e ser proporcional.", "Respeite o resultado de cenas de roleplay, mesmo quando desfavorável."] },
  { title: "Vida do personagem", items: ["Valorize a vida do seu personagem. Em situações de risco, reaja com medo e proporcionalidade.", "Após ser morto em roleplay, não tenha memória do evento.", "Respeite o new life rule: após morrer, seu personagem não lembra das últimas cenas."] },
  { title: "Conduta na cidade", items: ["Não estacione veículos em locais que bloqueiem a via.", "Respeite as leis de trânsito e sinalização.", "Não faça spam no chat ou canais de voz.", "Use canais oficiais para suporte e denúncias."] },
  { title: "Segurança e cheats", items: ["É estritamente proibido o uso de cheats, hacks ou exploits.", "Mods estéticos são permitidos apenas mediante aprovação da equipe.", "Qualquer bug encontrado deve ser reportado, não explorado."] },
  { title: "Economia do servidor", items: ["Não faça metagaming financeiro (usar OOC para transações IC).", "Respeite o valor dos itens e moedas do servidor.", "Compras na loja VIP não garantem vantagens que quebrem o equilíbrio do RP."] },
];

export default function RegrasPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div style={{ maxWidth: 800, margin: "auto", padding: "120px 34px 80px" }}>
        <Link href="/" style={{ color: "var(--signal)", fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" as const }}>
          Voltar ao inicio
        </Link>
        <h1 style={{ margin: "30px 0 10px", fontFamily: "'Kanit', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".015em" }}>
          Regras da <span style={{ color: "var(--signal)" }}>Cidade</span>
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 8, lineHeight: 1.8 }}>
          O codigo da Zona Oeste garante um RP justo, imersivo e divertido para todos.
        </p>
        <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 40 }}>
          Regulamento completo disponivel no{" "}
          <a href="https://discord.gg/UFEV5632b" target="_blank" rel="noreferrer" style={{ color: "var(--signal)" }}>Discord oficial</a>.
        </p>
        <div style={{ display: "grid", gap: 28 }}>
          {rules.map((section, i) => (
            <section key={section.title} style={{ borderLeft: "3px solid var(--signal)", paddingLeft: 20 }}>
              <h2 style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 18, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 10 }}>
                <span style={{ color: "var(--signal)", marginRight: 10 }}>0{i + 1}</span>
                {section.title}
              </h2>
              <ul style={{ display: "grid", gap: 8, paddingLeft: 0, listStyle: "none" }}>
                {section.items.map((item) => (
                  <li key={item} style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7, paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--signal)" }}>›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div style={{ marginTop: 50, padding: 24, border: "1px solid rgba(200,236,79,.3)", background: "rgba(200,236,79,.05)" }}>
          <p style={{ color: "var(--paper)", fontFamily: "'Kanit', sans-serif", fontSize: 16, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>
            Infracoes
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.7 }}>
            Infracoes leves resultam em advertencia. Infracoes graves resultam em suspensao ou banimento permanente.
            A equipe reserva-se o direito de tomar decisoes com base na gravidade de cada caso.
          </p>
        </div>
      </div>
    </div>
  );
}
