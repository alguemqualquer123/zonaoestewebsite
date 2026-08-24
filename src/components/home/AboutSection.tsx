import { Check } from "lucide-react";
import { LOGO } from "@/data/assets";

export default function AboutSection() {
  return (
    <section id="sobre" className="section about-section">
      <div className="about-mark">
        <img src={LOGO} alt="Logo oficial Zona Oeste" />
        <span>
          DESDE
          <br />
          2024
        </span>
      </div>
      <div className="about-copy">
        <p className="section-kicker">07 / sobre nós</p>
        <h2>
          Mais que um servidor.
          <br />
          <em>Uma frequência.</em>
        </h2>
        <p>
          A Zona Oeste nasceu para transformar presença em história. Uma
          experiência de RP inspirada na energia de São Paulo, onde cada
          personagem tem contexto e cada escolha deixa consequência.
        </p>
        <div className="about-list">
          <span>
            <Check size={15} /> Comunidade ativa
          </span>
          <span>
            <Check size={15} /> Staff presente 24/7
          </span>
          <span>
            <Check size={15} /> Eventos constantes
          </span>
          <span>
            <Check size={15} /> RP sério para todos
          </span>
        </div>
      </div>
    </section>
  );
}
