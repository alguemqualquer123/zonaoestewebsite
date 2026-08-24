import { ArrowUpRight, Music2, ShoppingBag } from "lucide-react";
import DiscordIcon from "@/components/icons/DiscordIcon";
import { FENIX_LOGO, LOGO } from "@/data/assets";

export default function SiteFooter() {
  return (
    <footer id="conta" className="footer">
      <div className="footer-main">
        <a href="#inicio" className="brand footer-brand">
          <img src={LOGO} alt="Logo oficial Zona Oeste" />
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
            href={process.env.NEXT_PUBLIC_STORE_URL || "https://zosprp.centralcart.ai/"}
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
            <img src={FENIX_LOGO} alt="Logo oficial Fênix Development" width={30} height={30} />
            <a href="/creditos">Créditos</a>
          </div>
        </div>
        <div className="socials">
          <a
            href={process.env.NEXT_PUBLIC_TIKTOK_URL || "https://www.tiktok.com/@zonaoesteroleplay011"}
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <Music2 size={16} />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/UFEV5632b"}
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
          >
            <DiscordIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
