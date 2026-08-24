import { ArrowUpRight, Check } from "lucide-react";

const steps = [
  ["01", "Instale o FiveM", "Baixe e instale o FiveM. É preciso ter o GTA V original."],
  ["02", "Entre no Discord", "Participe da comunidade para receber suporte e novidades."],
  ["03", "Leia as regras", "Conheça as regras oficiais para um RP justo para todos."],
  ["04", "Libere sua ID", "Conclua o quiz no jogo e libere sua whitelist."],
  ["05", "Conecte e jogue", "Abra o FiveM, busque por Zona Oeste e conecte."],
];

export default function StepsSection() {
  return (
    <section id="como-jogar" className="section steps-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">05 / primeiros passos</p>
          <h2>
            Como entrar
            <br />
            <em>na Zona Oeste</em>
          </h2>
        </div>
        <p className="section-intro">
          Cinco sinais e você está dentro. O próximo capítulo começa
          quando a cidade reconhece seu nome.
        </p>
      </div>
      <div className="steps-list">
        {steps.map(([number, title, copy]) => (
          <div className="step" key={number}>
            <span className="step-number">{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
            <Check size={18} />
          </div>
        ))}
      </div>
      <a className="text-link" href="#conta">
        Guia completo passo a passo <ArrowUpRight size={16} />
      </a>
    </section>
  );
}
