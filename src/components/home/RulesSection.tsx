"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, Search, ShieldCheck } from "lucide-react";

const basicRules = [
  {
    title: "Respeite todos os jogadores",
    copy: "Trate cada pessoa com respeito. Preconceito, assédio e toxicidade não fazem parte da Zona Oeste.",
  },
  {
    title: "Mantenha o roleplay",
    copy: "Priorize a interpretação e as consequências da sua história. Evite quebrar a imersão ou agir fora do personagem sem motivo.",
  },
  {
    title: "Proibido Deathmatch e RDM",
    copy: "Não ataque ou elimine outros jogadores sem contexto válido dentro da cena. Toda ação precisa ter motivo e coerência.",
  },
  {
    title: "Valorize a vida do personagem",
    copy: "Situações de risco devem gerar reações proporcionais. Preserve a vida e interprete o medo quando a cena exigir.",
  },
  {
    title: "Use canais oficiais para suporte",
    copy: "Dúvidas e denúncias devem ser encaminhadas à equipe pelos canais oficiais da comunidade, com informações claras e provas quando possível.",
  },
];

export default function RulesSection() {
  const [openRule, setOpenRule] = useState(0);
  const [ruleSearch, setRuleSearch] = useState("");
  const filteredRules = basicRules
    .map((rule, index) => ({ ...rule, originalIndex: index }))
    .filter((rule) =>
      `${rule.title} ${rule.copy}`
        .toLocaleLowerCase("pt-BR")
        .includes(ruleSearch.trim().toLocaleLowerCase("pt-BR"))
    );

  return (
    <section id="regras" className="section rules-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">04 / código da cidade</p>
          <h2>
            Regras para
            <br />
            <em>viver o RP</em>
          </h2>
        </div>
        <p className="section-intro">
          O básico para manter a cidade justa, imersiva e divertida para
          todo mundo. Consulte o regulamento completo no Discord.
        </p>
      </div>
      <div className="rules-search-wrap">
        <label className="sr-only" htmlFor="rule-search">
          Pesquisar nas regras
        </label>
        <Search size={18} />
        <input
          id="rule-search"
          type="search"
          value={ruleSearch}
          onChange={(event) => {
            setRuleSearch(event.target.value);
            setOpenRule(0);
          }}
          placeholder="Pesquisar regra, conduta ou palavra-chave..."
          autoComplete="off"
        />
        <span>
          {filteredRules.length}/{basicRules.length}
        </span>
      </div>
      <div className="rules-layout">
        <div className="rules-intro">
          <span className="rules-signal">
            <ShieldCheck size={20} />
          </span>
          <strong>
            JOGUE LIMPO.
            <br />
            DEIXE MARCA.
          </strong>
          <a
            className="text-link"
            href={process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/UFEV5632b"}
            target="_blank"
            rel="noreferrer"
          >
            Regulamento completo <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="rules-accordion">
          {filteredRules.length ? (
            filteredRules.map((rule, index) => {
              const isOpen = openRule === index;
              return (
                <div
                  className={`rule-item ${isOpen ? "is-open" : ""}`}
                  key={rule.title}
                >
                  <button
                    className="rule-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`rule-panel-${rule.originalIndex}`}
                    onClick={() => setOpenRule(isOpen ? -1 : index)}
                  >
                    <span className="rule-number">
                      0{rule.originalIndex + 1}
                    </span>
                    <span>{rule.title}</span>
                    <ChevronDown size={18} />
                  </button>
                  <div
                    id={`rule-panel-${rule.originalIndex}`}
                    role="region"
                    className="rule-panel"
                  >
                    <p>{rule.copy}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="rules-empty" role="status">
              <Search size={20} />
              <strong>Nenhuma regra encontrada.</strong>
              <span>
                Tente buscar por outra palavra, como "respeito", "RP" ou
                "suporte".
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
