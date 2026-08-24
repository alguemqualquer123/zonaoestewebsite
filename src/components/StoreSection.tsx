"use client";

import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Crown,
  Gem,
  Package,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import {
  STORE_BASE_URL,
  storeCategories,
  vipPackages,
  type StoreProduct,
} from "@/data/store";

const tabs = [
  { id: "vips", name: "VIPS · 30 dias", icon: Crown },
  { id: "cartoes", name: "Cartões BZO", icon: CreditCard },
  { id: "gemas", name: "Gemas", icon: Gem },
  { id: "exclusivos", name: "Exclusivos", icon: Sparkles },
  { id: "combos", name: "Combos", icon: Package },
] as const;

type TabId = (typeof tabs)[number]["id"];

const carouselCategories = new Set(["exclusivos", "combos"]);

function ProductCard({ product }: { product: StoreProduct }) {
  return (
    <a
      className="store-card"
      href={`${STORE_BASE_URL}${product.href}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="store-thumb">
        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <span className="store-thumb-fallback">
            <Package size={26} strokeWidth={1.5} />
          </span>
        )}
        {product.tag ? <span className="store-tag">{product.tag}</span> : null}
      </div>
      <h3>{product.name}</h3>
      <div className="store-card-foot">
        <span className="store-price">{product.price}</span>
        <span className="store-buy">
          Comprar <ArrowUpRight size={14} />
        </span>
      </div>
    </a>
  );
}

export default function StoreSection() {
  const [active, setActive] = useState<TabId>("vips");
  const trackRef = useRef<HTMLDivElement>(null);

  const category = storeCategories.find((item) => item.id === active);
  const isCarousel = carouselCategories.has(active);

  const scrollByCards = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".store-card");
    const step = card
      ? card.offsetWidth + 14
      : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="loja" className="section vip-section store-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">03 / loja oficial</p>
          <h2>
            Loja da
            <br />
            <em>Zona Oeste</em>
          </h2>
        </div>
        <p className="section-intro">
          VIPS, cartões, gemas, exclusivos e combos — entrega automática e
          pagamento via Pix. Escolha uma categoria e confira os detalhes na loja
          oficial.
        </p>
      </div>

      <div className="store-tabs" role="tablist" aria-label="Categorias da loja">
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              className={isActive ? "active" : ""}
              onClick={() => setActive(tab.id)}
            >
              <TabIcon size={15} /> {tab.name}
            </button>
          );
        })}
      </div>

      {active === "vips" ? (
        <div className="vip-grid">
          {vipPackages.map((pack, index) => (
            <article className={`vip-card ${pack.tone}`} key={pack.name}>
              <div className="vip-card-top">
                <span className="vip-index">0{index + 1}</span>
                <span className={`vip-label${pack.label === "uso restrito" ? " vip-label-restricted" : ""}`}>
                  {pack.label}
                </span>
              </div>
              <Crown size={24} className="vip-icon" />
              <h3>{pack.name}</h3>
              <p className="vip-price">{pack.price}</p>
              <p className="vip-copy">{pack.copy}</p>
              <ul>
                {pack.benefits.map((benefit) => (
                  <li key={benefit}>
                    <Check size={14} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                className="vip-cta"
                href={`${STORE_BASE_URL}${pack.href}`}
                target="_blank"
                rel="noreferrer"
              >
                Ver na loja <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      ) : category ? (
        isCarousel ? (
          <div className="store-carousel-wrap">
            <button
              className="carousel-btn"
              aria-label="Rolar para a esquerda"
              onClick={() => scrollByCards(-1)}
            >
              <ChevronLeft size={18} />
            </button>
            <div className="store-carousel" ref={trackRef}>
              {category.products.map((product) => (
                <ProductCard key={product.href} product={product} />
              ))}
            </div>
            <button
              className="carousel-btn"
              aria-label="Rolar para a direita"
              onClick={() => scrollByCards(1)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        ) : (
          <div className="store-grid">
            {category.products.map((product) => (
              <ProductCard key={product.href} product={product} />
            ))}
          </div>
        )
      ) : null}

      <div className="vip-footer-line">
        <span>
          <ShoppingBag size={15} /> Entrega automática · Pagamento seguro · Pix
          à vista
        </span>
        <a
          className="text-link"
          href={`${STORE_BASE_URL}/#store`}
          target="_blank"
          rel="noreferrer"
        >
          Abrir Loja Oficial Zona Oeste <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
