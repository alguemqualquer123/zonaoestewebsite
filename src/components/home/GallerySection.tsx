import { ArrowUpRight } from "lucide-react";

const gallery = [
  "/assets/flyer1.png",
  "/assets/flyer2.png",
  "/assets/flyer3.png"];

const captions = [
  "A cidade não dorme",
  "A rua é de quem vive",
  "Detalhe faz diferença",
];

const alts = [
  "Flyer Zona Oeste RP",
  "Flyer Zona Oeste RP v2",
  "Flyer Zona Oeste RP versão 3",
];

export default function GallerySection() {
  return (
    <section id="galeria" className="section gallery-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">06 / atmosfera</p>
          <h2>
            A vibe da
            <br />
            <em>Season 2</em>
          </h2>
        </div>
        <p className="section-intro">
          Frequência da cidade: cenas, rotas e detalhes de uma metrópole
          que muda quando você entra nela.
        </p>
      </div>
      <div className="gallery-grid">
        {gallery.map((image, index) => (
          <figure key={image}>
            <img src={image} alt={alts[index]} />
            <figcaption>
              <span>0{index + 1}</span>
              {captions[index]}
              <ArrowUpRight size={16} />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
