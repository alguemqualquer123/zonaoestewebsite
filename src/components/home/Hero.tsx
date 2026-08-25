import { ArrowDown, ArrowUpRight } from "lucide-react";
import DiscordIcon from "@/components/icons/DiscordIcon";
import { LOGO } from "@/data/assets";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen h-screen hero hero-video">
      {/* TODO: voltar para o banner HERO_BANNER quando disponível */}
      <img src={LOGO} alt="" className="hero-video-bg hero-logo-bg" />
      {/* <video
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
      </video> */}
      <div className="hero-scrim" />
      <div className="hero-grid" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow pb-8">
            <span className="pulse" /> Season 2 · no ar agora
          </p>
          <h1>
            São Paulo<span>Do Seu Jeito.</span>
          </h1>
          <p className="hero-lede">
            Construa <span className="text-white font-bold">sua história</span> em uma cidade onde cada escolha muida o seu caminho.
          </p>
          <div className="hero-actions">
            <a
              href={process.env.NEXT_PUBLIC_CONNECT_URL || "https://cfx.re/join/"}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Jogar agora <ArrowUpRight size={17} />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/"}
              target="_blank"
              rel="noreferrer"
              className="button button-ghost"
            >
              <DiscordIcon size={17} /> Entrar no Discord
            </a>
          </div>
        </div>
        {/*
        <div className="server-panel">
          <div className="panel-top">
            <span>STATUS DO SERVIDOR</span>
            <span className={`panel-online ${server.online ? "" : "offline"}`}>
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
        */}
      </div>
      <a className="scroll-cue" href="#season">
        <span>role para explorar</span>
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
