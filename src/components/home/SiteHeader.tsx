"use client";

import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import DiscordIcon from "@/components/icons/DiscordIcon";
import { LOGO } from "@/data/assets";

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

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#inicio" className="brand" aria-label="Zona Oeste — início">
          <img src={LOGO} alt="Logo oficial Zona Oeste" />
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
            href={process.env.NEXT_PUBLIC_STORE_URL || "https://www.fenixdevelopment.com.br"}
            target="_blank"
            rel="noreferrer"
          >
            <ShoppingBag size={15} /> Loja VIP
          </a>
          <a
            className="header-discord"
            href={process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/"}
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
  );
}
