import { Check } from "lucide-react";
import { LOGO } from "@/data/assets";

const aboutList = [
  "Comunidade ativa e sem toxicidade",
  "Staff presente e suporte 24/7",
  "Atualizações e eventos constantes",
  "RP sério, do iniciante ao veterano",
];

export default function AboutSection() {
  return (
    <section id="sobre" className="section about-section">
      <div className="about-mark">
        <span className="about-badge">Desde 2024</span>
        <img src={LOGO} alt="Logo oficial Zona Oeste" />
      </div>
      <div className="about-copy">
        <p className="about-kicker">Sobre nós</p>
        <h2>
          Mais que um servidor.
          <br />
          <em>Uma comunidade.</em>
        </h2>
        <p className="about-text">
          A Zona Oeste SP Roleplay nasceu da paixão por criar a experiência de
          RP mais autêntica do Brasil — inspirada no cotidiano vibrante de São
          Paulo. Aqui o roleplay é levado a sério: cada personagem tem
          história, cada escolha tem consequência.
        </p>
        <p className="about-text">
          Nossa equipe é formada por jogadores veteranos e desenvolvedores que
          acreditam que o verdadeiro RP vai além do jogo. É sobre comunidade,
          respeito e criatividade — num ambiente acolhedor, seguro e livre de
          toxicidade.
        </p>
        <div className="about-list">
          {aboutList.map((item) => (
            <span key={item}>
              <span className="about-check">
                <Check size={13} strokeWidth={3} />
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
