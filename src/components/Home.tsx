"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CarFront,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Crown,
  Gamepad2,
  Music2,
  MapPin,
  Menu,
  ShieldCheck,
  ShoppingBag,
  Search,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";

function DiscordIcon({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const hero = "/assets/hero.jpg";
const mark = "/assets/logo.png";
const gallery = [
  "/assets/flyer1.png",
  "/assets/flyer2.png",
  "/assets/flyer3.png",
];

const features = [
  [
    MapPin,
    "Cidade viva",
    "Um mapa urbano inspirado na capital paulista, com cada esquina pronta para uma nova história.",
  ],
  [
    Users,
    "Facções & territórios",
    "Alianças, disputas e organizações que transformam presença em influência.",
  ],
  [
    Gamepad2,
    "Empregos & carreiras",
    "Do primeiro turno ao próprio negócio: sua rotina também constrói reputação.",
  ],
  [
    Zap,
    "Economia que pesa",
    "Propriedades, veículos e escolhas que têm consequência dentro da cidade.",
  ],
  [
    ShieldCheck,
    "Polícia & justiça",
    "Conflito com contexto, suporte presente e regras claras para um RP consistente.",
  ],
  [
    CarFront,
    "Veículos & tuning",
    "Uma garagem para chamar de sua, com identidade em cada detalhe.",
  ],
];

const players = [
  ["01", "Ayrton Nunes", "5.678h", "#C8EC4F"],
  ["02", "Carlinhoss Bigodudaa", "4.416h", "#C7C8C4"],
  ["03", "Júlia Mendes", "4.195h", "#8D685D"],
  ["04", "Wil Salvatore", "4.097h", "#8D685D"],
  ["05", "Gaby Zinha", "3.940h", "#8D685D"],
];

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

const vipPackages = [
  {
    name: "VIP Rua",
    label: "entrada",
    copy: "O primeiro sinal de presença na cidade.",
    benefits: [
      "Benefícios exclusivos por 30 dias",
      "Prioridade em ações especiais",
      "Identidade VIP dentro da comunidade",
    ],
    tone: "vip-basic",
  },
  {
    name: "VIP Centro",
    label: "mais escolhido",
    copy: "Mais acesso, mais presença e mais possibilidades.",
    benefits: [
      "Tudo do VIP Rua",
      "Vantagens extras na experiência",
      "Acesso a benefícios da categoria",
    ],
    tone: "vip-featured",
  },
  {
    name: "VIP Mansão",
    label: "alta frequência",
    copy: "Para quem quer deixar uma marca maior na cidade.",
    benefits: [
      "Tudo do VIP Centro",
      "Pacote exclusivo da loja",
      "Experiência premium por 30 dias",
    ],
    tone: "vip-premium",
  },
];

function ScrollLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className="nav-link">
      {children}
    </a>
  );
}

interface ServerStatus {
  online: boolean;
  playerCount: number;
  maxPlayers: number;
  hostname: string;
  players: { name: string; ping: number }[];
  uptime: string;
}

const defaultStatus: ServerStatus = {
  online: false,
  playerCount: 0,
  maxPlayers: 2048,
  hostname: "",
  players: [],
  uptime: "",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rank, setRank] = useState("horas");
  const [openRule, setOpenRule] = useState(0);
  const [ruleSearch, setRuleSearch] = useState("");
  const filteredRules = basicRules
    .map((rule, index) => ({ ...rule, originalIndex: index }))
    .filter((rule) =>
      `${rule.title} ${rule.copy}`
        .toLocaleLowerCase("pt-BR")
        .includes(ruleSearch.trim().toLocaleLowerCase("pt-BR"))
    );
  const [isLoading, setIsLoading] = useState(true);
  const [server, setServer] = useState<ServerStatus>(defaultStatus);

  useEffect(() => {
    const fetchServer = async () => {
      try {
        const res = await fetch("/api/server");
        const data = await res.json();
        setServer(data);
      } catch {
        setServer(defaultStatus);
      }
    };
    fetchServer();
    const interval = setInterval(fetchServer, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const preload = new Image();
    preload.src = hero;
    let timer: number | undefined;
    const reveal = () => {
      timer = window.setTimeout(() => setIsLoading(false), 850);
    };
    if (preload.complete) reveal();
    else {
      preload.onload = reveal;
      preload.onerror = reveal;
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const revealItems = document.querySelectorAll<HTMLElement>(
      ".section, .signal-strip, .feature-card, .step, .gallery-grid figure, .player-row, .footer-main"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    revealItems.forEach((item) => observer.observe(item));

    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      root.style.setProperty("--pointer-x", `${x.toFixed(3)}`);
      root.style.setProperty("--pointer-y", `${y.toFixed(3)}`);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Header scroll effect
    const header = document.querySelector<HTMLElement>(".site-header");
    const onScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add("is-scrolled");
      } else {
        header?.classList.remove("is-scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const interactiveCards = document.querySelectorAll<HTMLElement>(
      ".feature-card, .gallery-grid figure, .player-row, .server-panel"
    );
    const cardCleanups = Array.from(interactiveCards).map((card) => {
      const onCardMove = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        const tiltX = ((y - 50) / 50) * -2.8;
        const tiltY = ((x - 50) / 50) * 2.8;
        card.style.setProperty("--spot-x", `${x}%`);
        card.style.setProperty("--spot-y", `${y}%`);
        card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
        card.classList.add("pointer-active");
      };
      const onCardLeave = () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.classList.remove("pointer-active");
      };
      card.addEventListener("pointermove", onCardMove, { passive: true });
      card.addEventListener("pointerleave", onCardLeave);
      return () => {
        card.removeEventListener("pointermove", onCardMove);
        card.removeEventListener("pointerleave", onCardLeave);
      };
    });
    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      cardCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>      <div className={`loading-screen ${isLoading ? "is-loading" : "is-ready"}`} aria-hidden={!isLoading}>
        <div className="loading-grid" />
        <div className="loading-core">
          <div className="loading-mark-wrap">
            <img src={mark} alt="Logo Zona Oeste" className="loading-mark" />
          </div>
          <p className="loading-kicker">
            <span /> Zona Oeste Roleplay
          </p>
          <div className="loading-wordmark">
            ZONA<span>OESTE</span>
          </div>
          <div className="loading-progress">
            <span />
          </div>
          <div className="loading-meta">
            <span>ESTABELECENDO CONEXÃO</span>
            <strong>2026 / S2</strong>
          </div>
        </div>
      </div>
      <div
        className={`site-shell ${isLoading ? "content-waiting" : "content-ready"}`}
      >
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <header className="site-header">
          <div className="header-inner">
            <a
              href="#inicio"
              className="brand"
              aria-label="Zona Oeste — início"
            >
              <img src={mark} alt="Logo oficial Zona Oeste" />
              <span>
                ZONA<span>OESTE</span>
              </span>
            </a>
            <nav
              className={`main-nav ${menuOpen ? "is-open" : ""}`}
              aria-label="Navegação principal"
            >
              <ScrollLink href="#inicio">Início</ScrollLink>
              <ScrollLink href="#season">Season 2</ScrollLink>
              <ScrollLink href="#como-jogar">Como jogar</ScrollLink>
              <ScrollLink href="#galeria">Galeria</ScrollLink>
              <ScrollLink href="#ranking">Ranking</ScrollLink>
              <ScrollLink href="#sobre">Sobre</ScrollLink>
              <a className="nav-link nav-account" href="#conta">
                <span className="live-dot" />
                Minha conta
              </a>
            </nav>
            <div className="header-actions">
              <a
                className="header-store"
                href="https://zosprp.centralcart.ai/"
                target="_blank"
                rel="noreferrer"
              >
                <ShoppingBag size={15} /> Loja VIP
              </a>
              <a
                className="header-discord"
                href="https://discord.gg/UFEV5632b"
                target="_blank"
                rel="noreferrer"
              >
                <DiscordIcon size={15} /> Discord
              </a>
              <button
                className="menu-toggle"
                onClick={() => setMenuOpen((value) => !value)}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {menuOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </div>
        </header>

        <main id="conteudo">
          <section id="inicio" className="hero hero-video">
            <video
              className="hero-video-bg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source
                src="/assets/Loadscreen Zona Oeste RP.mp4"
                type="video/mp4"
              />
            </video>
            <div className="hero-scrim" />
            <div className="hero-grid" />
            <div className="hero-inner">
              <div className="hero-copy">
                <p className="eyebrow">
                  <span className="pulse" /> Season 2 · no ar agora
                </p>
                <h1>
                  Servidor de GTA RP<span>Cidade de São Paulo</span>
                </h1>
                <p className="hero-lede">
                  A cidade está ligada. Seu personagem também.
                </p>
                <div className="hero-actions">
                  <a
                    href="https://cfx.re/join/ad7z6e"
                    target="_blank"
                    rel="noreferrer"
                    className="button button-primary"
                  >
                    Conectar na cidade <ArrowUpRight size={17} />
                  </a>
                  <a
                    href="https://discord.gg/UFEV5632b"
                    target="_blank"
                    rel="noreferrer"
                    className="button button-ghost"
                  >
                    <DiscordIcon size={17} /> Entrar no Discord
                  </a>
                </div>
              </div>
              <div className="server-panel">
                <div className="panel-top">
                  <span>STATUS DO SERVIDOR</span>
                  <span
                    className={`panel-online ${server.online ? "" : "offline"}`}
                  >
                    <i /> {server.online ? "ONLINE" : "OFFLINE"}
                  </span>
                </div>
                <strong>
                  {server.playerCount}
                  <span>/{server.maxPlayers}</span>
                </strong>
                <p>jogadores conectados agora</p>
                <div className="capacity">
                  <span
                    style={{
                      width: `${server.maxPlayers > 0 ? (server.playerCount / server.maxPlayers) * 100 : 0}%`,
                    }}
                  />
                </div>
                <div className="panel-foot">
                  <span>
                    {server.online ? "24/7 online" : "Servidor offline"}
                  </span>
                  <span>{server.uptime || "São Paulo, BR"}</span>
                </div>
              </div>
            </div>
            <a className="scroll-cue" href="#season">
              <span>role para explorar</span>
              <ArrowDown size={18} />
            </a>
          </section>

          <section
            className="signal-strip"
            aria-label="Indicadores do servidor"
          >
            <div>
              <strong>{server.playerCount}</strong>
              <span>jogadores conectados</span>
            </div>
            <div>
              <strong>{server.maxPlayers}</strong>
              <span>capacidade da cidade</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>{server.online ? "online sem parar" : "offline"}</span>
            </div>
            <div>
              <strong>S2</strong>
              <span>season 2 no ar</span>
            </div>
          </section>

          <section id="season" className="section features-section">
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
                Transmissão ativa: uma cidade viva, sistemas profundos e
                histórias que deixam marca — do primeiro login ao seu legado na
                metrópole.
              </p>
            </div>
            <div className="feature-grid">
              {features.map(([Icon, title, copy], index) => {
                const FeatureIcon = Icon as typeof MapPin;
                return (
                  <article className="feature-card" key={title as string}>
                    <span className="feature-index">0{index + 1}</span>
                    <FeatureIcon size={25} strokeWidth={1.5} />
                    <h3>{title as string}</h3>
                    <p>{copy as string}</p>
                    <ArrowUpRight className="feature-arrow" size={18} />
                  </article>
                );
              })}
            </div>
          </section>

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

          <section id="vip" className="section vip-section">
            <div className="section-heading">
              <div>
                <p className="section-kicker">03 / loja oficial</p>
                <h2>
                  Escolha seu
                  <br />
                  <em>pacote VIP</em>
                </h2>
              </div>
              <p className="section-intro">
                Dê outro ritmo à sua passagem pela cidade. Veja os destaques e
                confira todos os detalhes diretamente na Loja VIP Zona Oeste.
              </p>
            </div>
            <div className="vip-grid">
              {vipPackages.map((pack, index) => (
                <article className={`vip-card ${pack.tone}`} key={pack.name}>
                  <div className="vip-card-top">
                    <span className="vip-index">0{index + 1}</span>
                    <span className="vip-label">{pack.label}</span>
                  </div>
                  <Crown size={24} className="vip-icon" />
                  <h3>{pack.name}</h3>
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
                    href="https://zosprp.centralcart.ai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver na loja <ArrowUpRight size={16} />
                  </a>
                </article>
              ))}
            </div>
            <div className="vip-footer-line">
              <span>
                <ShoppingBag size={15} /> Entrega automática na comunidade
              </span>
              <a
                className="text-link"
                href="https://zosprp.centralcart.ai/"
                target="_blank"
                rel="noreferrer"
              >
                Abrir Loja VIP Zona Oeste <ArrowUpRight size={15} />
              </a>
            </div>
          </section>

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
                  href="https://discord.gg/UFEV5632b"
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
              {[
                [
                  "01",
                  "Instale o FiveM",
                  "Baixe e instale o FiveM. É preciso ter o GTA V original.",
                ],
                [
                  "02",
                  "Entre no Discord",
                  "Participe da comunidade para receber suporte e novidades.",
                ],
                [
                  "03",
                  "Leia as regras",
                  "Conheça as regras oficiais para um RP justo para todos.",
                ],
                [
                  "04",
                  "Libere sua ID",
                  "Conclua o quiz no jogo e libere sua whitelist.",
                ],
                [
                  "05",
                  "Conecte e jogue",
                  "Abra o FiveM, busque por Zona Oeste e conecte.",
                ],
              ].map(([number, title, copy]) => (
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
                  <img
                    src={image}
                    alt={
                      index === 0
                        ? "Flyer Zona Oeste RP"
                        : index === 1
                          ? "Flyer Zona Oeste RP v2"
                          : "Flyer Zona Oeste RP versão 3"
                    }
                  />
                  <figcaption>
                    <span>0{index + 1}</span>
                    {
                      [
                        "A cidade não dorme",
                        "A rua é de quem vive",
                        "Detalhe faz diferença",
                      ][index]
                    }
                    <ArrowUpRight size={16} />
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="sobre" className="section about-section">
            <div className="about-mark">
              <img src={mark} alt="Logo oficial Zona Oeste" />
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
        </main>

        <footer id="conta" className="footer">
          <div className="footer-main">
            <a href="#inicio" className="brand footer-brand">
              <img src={mark} alt="Logo oficial Zona Oeste" />
              <span>
                ZONA<span>OESTE</span>
              </span>
            </a>
            <p>
              A Zona Oeste está ligada.
              <br />
              <strong>Sua história também.</strong>
            </p>
            <div className="footer-actions">
              <a className="button button-primary" href="#como-jogar">
                Sintonizar a cidade <ArrowUpRight size={17} />
              </a>
              <a
                className="button button-store"
                href="https://zosprp.centralcart.ai/"
                target="_blank"
                rel="noreferrer"
              >
                <ShoppingBag size={17} /> Acessar Loja VIP Zona Oeste
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 ZONA OESTE ROLEPLAY</span>
            <div>
              <a href="/regras">Regras</a>
              <a href="/privacidade">Privacidade</a>
              <a href="/termos">Termos</a>
              <div>
                <img src={"/assets/fenix_logo.png"} alt="Logo oficial Fênix Development" width={30} height={30} />
                <a href="/creditos">Créditos</a>
              </div>
            </div>
            <div className="socials">
              <a
                href="https://www.tiktok.com/@zonaoesteroleplay011"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <Music2 size={16} />
              </a>
              <a
                href="https://discord.gg/UFEV5632b"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
              >
                <DiscordIcon size={16} />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <a
        className="floating-discord"
        href="https://discord.gg/UFEV5632b"
        target="_blank"
        rel="noreferrer"
        aria-label="Entrar no Discord da Zona Oeste"
      >
        <span className="floating-discord-halo" />
        <DiscordIcon size={24} />
        <span className="floating-discord-label">Entrar no Discord</span>
      </a>
    </>
  );
}
