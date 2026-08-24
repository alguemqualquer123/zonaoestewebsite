"use client";

import { useState } from "react";
import { CarFront, ChevronRight, Clock3, MapPin, Trophy } from "lucide-react";

const players = [
  ["01", "Ayrton Nunes", "5.678h", "#C8EC4F"],
  ["02", "Carlinhoss Bigodudaa", "4.416h", "#C7C8C4"],
  ["03", "Júlia Mendes", "4.195h", "#8D685D"],
  ["04", "Wil Salvatore", "4.097h", "#8D685D"],
  ["05", "Gaby Zinha", "3.940h", "#8D685D"],
];

export default function RankingSection() {
  const [rank, setRank] = useState("horas");

  return (
    <section id="ranking" className="section ranking-section">
      <div className="section-heading ranking-heading">
        <div>
          <p className="section-kicker">02 / comunidade</p>
          <h2>
            Destaques da
            <br />
            <em>cidade</em>
          </h2>
        </div>
        <p className="section-intro">
          Sinal da comunidade: acompanhe quem está deixando presença,
          tempo e história na cidade.
        </p>
      </div>
      <div className="rank-tabs">
        {[
          ["horas", Clock3, "Mais horas"],
          ["curtidas", Trophy, "Mais curtidos"],
          ["casas", MapPin, "Residências"],
          ["carros", CarFront, "Carros"],
        ].map(([id, Icon, label]) => {
          const RankIcon = Icon as typeof Clock3;
          return (
            <button
              key={id as string}
              className={rank === id ? "active" : ""}
              onClick={() => setRank(id as string)}
            >
              <RankIcon size={15} /> {label as string}
            </button>
          );
        })}
      </div>
      <div className="ranking-board">
        <div className="board-header">
          <span>posição / jogador</span>
          <span>tempo na cidade</span>
        </div>
        {players.map(([position, name, hours, color]) => (
          <div className="player-row" key={name}>
            <span className="player-position" style={{ color }}>
              {position}
            </span>
            <span className="player-name">{name}</span>
            <span className="player-hours">
              {rank === "horas"
                ? hours
                : rank === "curtidas"
                  ? `${Number(hours.replace(".", "").replace("h", "")) * 3} pts`
                  : rank === "casas"
                    ? `${Number(position) + 1} imóveis`
                    : `${Number(position) + 2} veículos`}{" "}
              <ChevronRight size={14} />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
