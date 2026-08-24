import { LOGO } from "@/data/assets";

export default function LoadingScreen({
  isLoading,
}: {
  isLoading: boolean;
}) {
  return (
    <div
      className={`loading-screen ${isLoading ? "is-loading" : "is-ready"}`}
      aria-hidden={!isLoading}
    >
      <div className="loading-grid" />
      <div className="loading-core">
        <div className="loading-mark-wrap">
          <img src={LOGO} alt="Logo Zona Oeste" className="loading-mark" />
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
          {/* <strong>2026 / S2</strong> */}
        </div>
      </div>
    </div>
  );
}
