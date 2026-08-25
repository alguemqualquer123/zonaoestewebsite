import { ArrowUpRight, CarFront, Gamepad2, MapPin, ShieldCheck, Users, Zap } from "lucide-react";

const features = [
  [
    MapPin,
    "Cidade viva",
    "São Paulo pulsa ao seu redor. Cada rua, encontro e escolha pode dar início a uma nova história.",
    "#galeria",
  ],
  [
    Users,
    "Facções & territórios",
    "Construa alianças, dispute territórios e transforme presença em influência pelas ruas.",
    "#ranking",
  ],
  [
    Gamepad2,
    "Carreiras & negócios",
    "Comece de baixo, construa sua trajetória e transforme trabalho em patrimônio.",
    "#como-jogar",
  ],
  [
    Zap,
    "Economia realista",
    "Ganhe, invista e evolua. Suas decisões financeiras realmente impactam sua trajetória.",
    "#loja",
  ],
  [
    ShieldCheck,
    "Polícia & justiça",
    "Das ruas aos tribunais, suas ações têm consequências e a lei faz parte da história.",
    "#regras",
  ],
  [
    CarFront,
    "Veículos & customização",
    "Escolha, personalize e construa uma garagem que carregue a sua identidade.",
    "#loja",
  ],
];

export default function FeaturesSection() {
  return (
    <section id="season" className="section features-section w-full h-screen">
      <div className="section-heading">
        <div>
          <p className="section-kicker">01 / a cidade</p>
          <h2>
            O que te espera
            <br />
            <em>nas ruas de SP</em>
          </h2>
        </div>
        <p className="section-intro">
          São paulo não para.
          Escolha seu caminho,
          construa sua reputação e
          deixe sua marca na cidade.
        </p>
      </div>
      <div className="feature-grid">
        {features.map(([Icon, title, copy, href], index) => {
          const FeatureIcon = Icon as typeof MapPin;
          return (
            <article className="feature-card" key={title as string}>
              <span className="feature-index">0{index + 1}</span>
              <FeatureIcon size={25} strokeWidth={1.5} />
              <h3>{title as string}</h3>
              <p>{copy as string}</p>
              <a className="feature-link" href={href as string}>
                Explorar <ArrowUpRight size={14} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
