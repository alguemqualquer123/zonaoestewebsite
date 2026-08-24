import DiscordIcon from "@/components/icons/DiscordIcon";

export default function FloatingDiscord() {
  return (
    <a
      className="floating-discord"
      href={process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/UFEV5632b"}
      target="_blank"
      rel="noreferrer"
      aria-label="Entrar no Discord da Zona Oeste"
    >
      <span className="floating-discord-halo" />
      <DiscordIcon size={24} />
      <span className="floating-discord-label">Entrar no Discord</span>
    </a>
  );
}
