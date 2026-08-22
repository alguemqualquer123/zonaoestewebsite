import { NextResponse } from "next/server";

const SERVER_ENDPOINT = "ad7z6e";

interface CfxPlayer {
  endpoint?: string;
  id?: number;
  identifiers?: string[];
  name?: string;
  ping?: number;
}

async function fetchFromCfxApi() {
  const res = await fetch(
    `https://frontend.cfx-services.net/api/servers/single/${SERVER_ENDPOINT}`,
    { next: { revalidate: 10 } }
  );
  if (!res.ok) return null;
  return res.json();
}

async function fetchPlayersJson(host: string) {
  try {
    const res = await fetch(`http://${host}/players.json`, {
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data;
  } catch {
    return [];
  }
}

export async function GET() {
  try {
    const serverData = await fetchFromCfxApi();

    if (!serverData || !serverData.Data) {
      return NextResponse.json({
        online: false,
        playerCount: 0,
        maxPlayers: 0,
        hostname: "",
        players: [],
        uptime: "",
      });
    }

    const data = serverData.Data;
    const hostname: string = data.hostname || "Zona Oeste RP";
    const maxPlayers: number = data.sv_maxclients || data.sv_maxClients || 2048;
    const playerCount: number = data.clients || data.players || 0;
    const endpoint: string = data.Endpoint || data.endpoint || serverData.EndPoint || "";

    let players: { name: string; ping: number }[] = [];

    if (endpoint && typeof endpoint === "string") {
      const rawPlayers: CfxPlayer[] = await fetchPlayersJson(endpoint);
      if (Array.isArray(rawPlayers)) {
        players = rawPlayers
          .filter((p): p is CfxPlayer & { name: string } => typeof p === "object" && p !== null && typeof p.name === "string")
          .map((p) => ({
            name: p.name || "Unknown",
            ping: typeof p.ping === "number" ? p.ping : 0,
          }));
      }
    }

    const uptimeRaw: number = data.uptime || 0;
    const uptimeHours = Math.floor(uptimeRaw / 3600);
    const uptimeMinutes = Math.floor((uptimeRaw % 3600) / 60);

    return NextResponse.json({
      online: true,
      playerCount: typeof playerCount === "number" ? playerCount : 0,
      maxPlayers: typeof maxPlayers === "number" ? maxPlayers : 2048,
      hostname: hostname.replace(/\^\d+/g, ""),
      players,
      endpoint: typeof endpoint === "string" ? endpoint : "",
      uptime: `${uptimeHours}h ${uptimeMinutes}m`,
    });
  } catch {
    return NextResponse.json({
      online: false,
      playerCount: 0,
      maxPlayers: 0,
      hostname: "",
      players: [],
      uptime: "",
    });
  }
}
