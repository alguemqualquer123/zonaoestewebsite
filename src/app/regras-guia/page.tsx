"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  ChevronDown,
  Play,
  Pause,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Shield,
  Users,
  Gamepad2,
  Car,
  MapPin,
  MessageCircle,
  ArrowLeft,
  ArrowUpRight,
  Search,
  Clock,
  Eye,
  ThumbsUp,
  Video,
  FileText,
  Zap,
  Menu,
  X,
  Scale,
  Swords,
  Building2,
  Wallet,
  Monitor,
  Headphones,
  Globe,
  Ban,
} from "lucide-react";

/* ─── Sidebar Data ─── */
interface SidebarSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: { id: string; title: string }[];
}

const sidebarSections: SidebarSection[] = [
  {
    id: "intro",
    title: "Introdução",
    icon: <BookOpen size={16} />,
    items: [
      { id: "bem-vindo", title: "Bem-vindo à Zona Oeste" },
      { id: "como-usar", title: "Como usar este guia" },
      { id: "codesign", title: "Código de Conduta" },
    ],
  },
  {
    id: "regras",
    title: "Regras de RP",
    icon: <Shield size={16} />,
    items: [
      { id: "respeito", title: "Respeito mútuo" },
      { id: "powergaming", title: "Powergaming" },
      { id: "metagaming", title: "Metagaming" },
      { id: "rdm", title: "RDM / Deathmatch" },
      { id: "vdm", title: "VDM (Vehicle DM)" },
      { id: "newlife", title: "Regra da Nova Vida" },
      { id: "valores", title: "Valorização da vida" },
      { id: "idle", title: "AFK / Idle" },
      { id: "revenge", title: "Regra da Vingança" },
    ],
  },
  {
    id: "comportamento",
    title: "Comportamento",
    icon: <Users size={16} />,
    items: [
      { id: "ooc", title: "Comunicação OOC" },
      { id: "chat", title: "Chat & Comandos" },
      { id: "naming", title: "Nomenclatura" },
      { id: "skins", title: "Aparência" },
      { id: "newbies", title: "Auxiliar novatos" },
    ],
  },
  {
    id: "veiculos",
    title: "Veículos",
    icon: <Car size={16} />,
    items: [
      { id: "trafego", title: "Leis de trânsito" },
      { id: "perseguicao", title: "Perseguição" },
      { id: "veiculos-regras", title: "Regras gerais" },
      { id: "drift", title: "Drift & Street Racing" },
    ],
  },
  {
    id: "territorios",
    title: "Territórios & Facções",
    icon: <MapPin size={16} />,
    items: [
      { id: "faccoes", title: "Criação de facções" },
      { id: "territorios-regras", title: "Controle territorial" },
      { id: "guerras", title: "Guerras & Disputas" },
      { id: "economia-faccoes", title: "Economia faccional" },
    ],
  },
  {
    id: "economia",
    title: "Economia & Serviços",
    icon: <Wallet size={16} />,
    items: [
      { id: "empregos", title: "Sistema de empregos" },
      { id: "propriedades", title: "Propriedades" },
      { id: "loja-vip", title: "Loja VIP" },
      { id: "ilegal", title: "Atividades ilegais" },
    ],
  },
  {
    id: "tutoriais",
    title: "Tutoriais em Vídeo",
    icon: <Video size={16} />,
    items: [
      { id: "tutorial-conectar", title: "Como conectar" },
      { id: "tutorial-fivem", title: "Instalar o FiveM" },
      { id: "tutorial-personagem", title: "Criar personagem" },
      { id: "tutorial-emprego", title: "Sistema de empregos" },
      { id: "tutorial-economia", title: "Economia & Loja" },
      { id: "tutorial-faccoes", title: "Entrar numa facção" },
      { id: "tutorial-casa", title: "Comprar uma casa" },
    ],
  },
  {
    id: "faq",
    title: "Perguntas Frequentes",
    icon: <MessageCircle size={16} />,
    items: [
      { id: "faq-geral", title: "FAQ Geral" },
      { id: "faq-tecnico", title: "FAQ Técnico" },
      { id: "faq-ban", title: "Solicitar desban" },
    ],
  },
];

/* ─── Video Data ─── */
const videos = [
  { title: "Como Conectar no Servidor", category: "Início", duration: "5 min", views: 1240, likes: 98, quality: "1080p", description: "Passo a passo completo para entrar na Zona Oeste pela primeira vez.", thumbnail: "/assets/flyer1.png", outdated: false },
  { title: "Instalar o FiveM (Guia Completo)", category: "Tutorial", duration: "8 min", views: 2300, likes: 187, quality: "1080p", description: "Como baixar, instalar e configurar o FiveM para jogar.", thumbnail: "/assets/flyer2.png", outdated: false },
  { title: "Criando seu Personagem", category: "Personagem", duration: "10 min", views: 890, likes: 76, quality: "1080p", description: "Dicas para criar um personagem único e imersivo para o RP.", thumbnail: "/assets/flyer3.png", outdated: false },
  { title: "Sistema de Empregos", category: "Mecânica", duration: "13 min", views: 670, likes: 54, quality: "1080p", description: "Como funcionam os empregos, carreiras e progressão na cidade.", thumbnail: "/assets/flyer1.png", outdated: false },
  { title: "Economia & Loja VIP", category: "Economia", duration: "7 min", views: 1560, likes: 123, quality: "1080p", description: "Tudo sobre a economia do servidor, propriedades e a loja VIP.", thumbnail: "/assets/flyer2.png", outdated: false },
  { title: "Como Entrar numa Facção", category: "Facções", duration: "11 min", views: 520, likes: 41, quality: "1080p", description: "Processo de recrutamento, hierarquia e direitos dentro de uma facção.", thumbnail: "/assets/flyer3.png", outdated: false },
  { title: "Comprando sua Primeira Casa", category: "Imóveis", duration: "9 min", views: 780, likes: 63, quality: "1080p", description: "Sistema imobiliário, como comprar, alugar e decorar sua residência.", thumbnail: "/assets/flyer1.png", outdated: false },
];

/* ─── FAQ Data ─── */
const faqGeral = [
  { q: "Preciso ter o GTA V original?", a: "Sim. O FiveM exige que você possua o GTA V legítimo (Steam, Epic ou Rockstar)." },
  { q: "Posso jogar no console?", a: "Não. O FiveM é exclusivo para PC (Windows)." },
  { q: "Quanto custa jogar?", a: "O servidor é gratuito. Existem pacotes VIP opcionais na loja." },
  { q: "Como reportar um jogador?", a: "Use o canal de denúncias no Discord com provas (prints, vídeos, horário)." },
  { q: "Posso ser policial?", a: "Sim! Candidate-se no Discord quando houver recrutamento aberto." },
  { q: "Meu personagem morreu, e agora?", a: "Acordará no hospital sem memórias da morte. Nova vida, novo começo." },
  { q: "Posso ter dois personagens?", a: "Sim, cada jogador pode ter até 2 personagens com identidades diferentes." },
  { q: "Como ganhar dinheiro?", a: "Trabalhando em empregos legais, participando de eventos ou em atividades ilegais (com riscos)." },
];

const faqTecnico = [
  { q: "O FiveM não abre, o que faço?", a: "Verifique se o Windows está atualizado, desative antivírus temporariamente e reinstale o FiveM." },
  { q: "Estou com lag, o que fazer?", a: "Feche outros programas, verifique sua internet e reduza os gráficos do GTA V." },
  { q: "Não consigo conectar no servidor", a: "Verifique se está usando a versão mais recente do FiveM e se o servidor está online." },
  { q: "Meu jogo crasha ao entrar", a: "Delete a pasta do FiveM (%localappdata%\\FiveM) e reinstale. Se persistir, abra um ticket no Discord." },
  { q: "Como aumentar o FPS?", a: "Reduza gráficos no GTA, desative V-Sync, use DirectX 11 e feche programas em background." },
  { q: "A tela fica preta ao conectar", a: "Aguarde 30-60 segundos. Se persistir, reinicie o FiveM e tente novamente." },
];

const faqBan = [
  { q: "Fui banido injustamente", a: "Abra um ticket no Discord com o link do ban e suas provas. A equipe irá revisar o caso." },
  { q: "Quanto tempo dura o ban?", a: "Depende da gravidade. Bans temporários duram de 1 a 30 dias. Bans permanentes só com apelação." },
  { q: "Posso jogar em outra conta?", a: "Não. Usar contas alternativas para burlar ban é passível de ban permanente na nova conta." },
];

/* ─── Components ─── */
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity .6s cubic-bezier(.23,1,.32,1) ${delay}s, transform .6s cubic-bezier(.23,1,.32,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function RuleCard({ type, title, description, example }: { type: "allowed" | "prohibited" | "warning"; title: string; description: string; example?: string }) {
  const [hovered, setHovered] = useState(false);
  const colors = {
    allowed: { border: "#22c55e", bg: "rgba(34,197,94,.06)", icon: <CheckCircle2 size={18} color="#22c55e" /> },
    prohibited: { border: "#ef4444", bg: "rgba(239,68,68,.06)", icon: <XCircle size={18} color="#ef4444" /> },
    warning: { border: "#f59e0b", bg: "rgba(245,158,11,.06)", icon: <AlertTriangle size={18} color="#f59e0b" /> },
  };
  const c = colors[type];
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? c.border + "60" : c.border + "20"}`,
        background: hovered ? c.bg.replace(/[\d.]+\)$/, "0.1)") : c.bg,
        borderRadius: 10,
        padding: "18px 22px",
        marginBottom: 12,
        transition: "all .25s ease",
        transform: hovered ? "translateX(4px)" : "none",
        boxShadow: hovered ? `0 4px 20px ${c.border}15` : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        {c.icon}
        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 15, textTransform: "uppercase", letterSpacing: ".04em" }}>{title}</span>
      </div>
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>{description}</p>
      {example && (
        <div style={{ marginTop: 12, padding: "12px 16px", background: "rgba(0,0,0,.35)", borderRadius: 8, borderLeft: `3px solid ${c.border}` }}>
          <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: c.border, display: "block", marginBottom: 5, fontFamily: "'Inter', sans-serif" }}>Exemplo</span>
          <span style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(242,239,233,.7)", fontFamily: "'Inter', sans-serif" }}>{example}</span>
        </div>
      )}
    </div>
  );
}

function VideoCard({ video, index }: { video: (typeof videos)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={index * 0.08}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          border: `1px solid ${hovered ? "rgba(200,236,79,.3)" : "rgba(242,239,233,.08)"}`,
          background: "#14171B",
          borderRadius: 12,
          overflow: "hidden",
          transition: "transform .3s cubic-bezier(.23,1,.32,1), box-shadow .3s, border-color .3s",
          transform: hovered ? "translateY(-6px) scale(1.01)" : "none",
          boxShadow: hovered ? "0 16px 40px rgba(0,0,0,.5), 0 0 0 1px rgba(200,236,79,.15)" : "none",
        }}
      >
        <div style={{ position: "relative", aspectRatio: "16/9", background: "#090A0D", overflow: "hidden" }}>
          <img src={video.thumbnail} alt={video.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: hovered ? 1 : .65, filter: hovered ? "saturate(1.1)" : "saturate(.6)", transition: "all .4s" }} />
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: hovered ? "rgba(0,0,0,.1)" : "rgba(0,0,0,.35)", transition: "background .3s" }}>
            <div style={{ width: 58, height: 58, borderRadius: "50%", background: "var(--signal)", display: "grid", placeItems: "center", boxShadow: hovered ? "0 0 30px rgba(200,236,79,.5), 0 0 60px rgba(200,236,79,.2)" : "0 0 20px rgba(200,236,79,.3)", transition: "all .3s", transform: hovered ? "scale(1.12)" : "none" }}>
              <Play size={24} color="#090A0D" fill="#090A0D" style={{ marginLeft: 3 }} />
            </div>
          </div>
          <span style={{ position: "absolute", bottom: 10, right: 10, padding: "4px 10px", background: "rgba(0,0,0,.85)", borderRadius: 5, fontSize: 11, fontWeight: 700, fontFamily: "'Inter', sans-serif", backdropFilter: "blur(4px)" }}>{video.duration}</span>
          {video.outdated && (
            <span style={{ position: "absolute", top: 10, left: 10, padding: "5px 12px", background: "#f59e0b", color: "#000", borderRadius: 5, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", display: "flex", alignItems: "center", gap: 5 }}>
              <AlertTriangle size={12} /> Desatualizado
            </span>
          )}
          {/* Corner accent */}
          <div style={{ position: "absolute", top: 10, right: 10, width: 30, height: 30, borderRight: "2px solid var(--signal)", borderTop: "2px solid var(--signal)", opacity: hovered ? .8 : .3, transition: "opacity .3s" }} />
        </div>
        <div style={{ padding: "18px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ padding: "4px 10px", border: "1px solid rgba(200,236,79,.3)", color: "var(--signal)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", borderRadius: 5, fontFamily: "'Inter', sans-serif" }}>{video.category}</span>
          </div>
          <h4 style={{ margin: "0 0 8px", fontFamily: "'Anton', sans-serif", fontSize: 18, textTransform: "uppercase", letterSpacing: ".03em", lineHeight: 1.1 }}>{video.title}</h4>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>{video.description}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(242,239,233,.06)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}><Eye size={13} /> {video.views.toLocaleString()}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}><ThumbsUp size={13} /> {video.likes}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>{video.quality}</span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={index * 0.05}>
      <div style={{ border: `1px solid ${open ? "rgba(200,236,79,.25)" : "var(--line)"}`, borderRadius: 10, marginBottom: 8, overflow: "hidden", transition: "border-color .3s", background: open ? "rgba(200,236,79,.03)" : "var(--surface)" }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%", display: "flex", alignItems: "center", gap: 12,
            padding: "16px 20px", background: "none", border: "none",
            color: open ? "var(--signal)" : "var(--paper)", cursor: "pointer",
            textAlign: "left", transition: "color .2s",
          }}
        >
          <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 14, textTransform: "uppercase", flex: 1 }}>{q}</span>
          <ChevronDown size={16} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .3s", color: "var(--muted)" }} />
        </button>
        <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height .35s cubic-bezier(.23,1,.32,1)" }}>
          <p style={{ margin: 0, padding: "0 20px 16px", fontSize: 13, lineHeight: 1.7, color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>{a}</p>
        </div>
      </div>
    </FadeIn>
  );
}

/* ─── Main Page ─── */
export default function RegrasGuiaPage() {
  const [activeSection, setActiveSection] = useState("bem-vindo");
  const [expandedGroups, setExpandedGroups] = useState<string[]>(["intro", "regras", "tutoriais"]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => (prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]));
  };

  const filteredSections = sidebarSections
    .map((s) => ({ ...s, items: s.items.filter((item) => `${item.title} ${s.title}`.toLowerCase().includes(searchQuery.toLowerCase())) }))
    .filter((s) => s.items.length > 0);

  const navigate = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--ink)", color: "var(--paper)" }}>
      {/* Mobile toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ position: "fixed", top: 16, left: 16, zIndex: 200, width: 44, height: 44, display: "grid", placeItems: "center", background: "var(--surface)", border: "1px solid var(--line)", color: "var(--paper)", borderRadius: 10, cursor: "pointer", transition: "all .2s" }}
        aria-label="Menu"
      >
        {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Overlay mobile */}
      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.6)", zIndex: 140, display: "none" }} className="guide-overlay" />}

      {/* ─── Sidebar ─── */}
      <aside style={{ position: "fixed", top: 0, left: 0, bottom: 0, width: 290, background: "#0A0C10", borderRight: "1px solid var(--line)", display: "flex", flexDirection: "column", zIndex: 150, transition: "transform .3s cubic-bezier(.23,1,.32,1)" }} className="guide-sidebar">
        {/* Sidebar header */}
        <div style={{ padding: "22px 20px 16px", borderBottom: "1px solid var(--line)", background: "linear-gradient(180deg, rgba(200,236,79,.03) 0%, transparent 100%)" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--signal)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 16, padding: "5px 10px", border: "1px solid rgba(200,236,79,.2)", borderRadius: 6, transition: "all .2s" }}>
            <ArrowLeft size={12} /> Voltar ao site
          </Link>
          <h1 style={{ margin: 0, fontFamily: "'Anton', sans-serif", fontSize: 24, textTransform: "uppercase", letterSpacing: ".04em", lineHeight: 1.05 }}>
            Guia & <span style={{ color: "var(--signal)" }}>Regras</span>
          </h1>
          <p style={{ margin: "8px 0 0", fontSize: 11, color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>Zona Oeste RP — v2.0 Completo</p>
          {/* Search */}
          <div style={{ position: "relative", marginTop: 16 }}>
            <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }} />
            <input
              type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Buscar seção..."
              style={{ width: "100%", padding: "10px 12px 10px 36px", background: "rgba(255,255,255,.04)", border: "1px solid var(--line)", borderRadius: 8, color: "var(--paper)", fontSize: 12, fontFamily: "'Inter', sans-serif", outline: "none", transition: "border-color .2s" }}
              onFocus={(e) => e.currentTarget.style.borderColor = "rgba(200,236,79,.4)"}
              onBlur={(e) => e.currentTarget.style.borderColor = "var(--line)"}
            />
          </div>
        </div>

        {/* Sidebar nav */}
        <nav style={{ flex: 1, overflowY: "auto", padding: "6px 0" }}>
          {filteredSections.map((section) => (
            <div key={section.id}>
              <button onClick={() => toggleGroup(section.id)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "none", border: "none", color: expandedGroups.includes(section.id) ? "var(--paper)" : "var(--muted)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", cursor: "pointer", textAlign: "left", transition: "color .2s" }}>
                <span style={{ color: "var(--signal)", display: "flex" }}>{section.icon}</span>
                <span style={{ flex: 1, fontFamily: "'Inter', sans-serif" }}>{section.title}</span>
                {expandedGroups.includes(section.id) ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
              </button>
              {expandedGroups.includes(section.id) && (
                <div style={{ paddingBottom: 6 }}>
                  {section.items.map((item) => (
                    <button key={item.id} onClick={() => navigate(item.id)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "8px 20px 8px 46px", background: activeSection === item.id ? "rgba(200,236,79,.07)" : "none", border: "none", borderLeft: activeSection === item.id ? "2px solid var(--signal)" : "2px solid transparent", color: activeSection === item.id ? "var(--signal)" : "rgba(242,239,233,.5)", fontSize: 12, cursor: "pointer", textAlign: "left", fontFamily: "'Inter', sans-serif", transition: "all .15s" }}>
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div style={{ padding: "14px 20px", borderTop: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 10, color: "var(--muted)", fontFamily: "'Inter', sans-serif", letterSpacing: ".08em", textTransform: "uppercase" }}>
          <span>Zona Oeste RP</span>
          <span style={{ color: "var(--signal)" }}>v2.0</span>
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main ref={contentRef} style={{ flex: 1, marginLeft: 290, padding: "50px 60px 100px", maxWidth: 920, overflowY: "auto" }} className="guide-content">

        {/* ── Bem-vindo ── */}
        {activeSection === "bem-vindo" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Introdução</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1, letterSpacing: ".02em" }}>
                Bem-vindo à<br /><span style={{ color: "var(--signal)" }}>Zona Oeste</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 28, fontFamily: "'Inter', sans-serif" }}>
                Este é o guia completo do servidor. Aqui você encontra todas as regras de Roleplay, exemplos práticos, tutoriais em vídeo e tudo o que precisa para começar sua história em São Paulo.
              </p>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 32 }}>
              {[
                { icon: <Shield size={20} />, label: "Regras de RP", desc: "Todas as regras", id: "respeito" },
                { icon: <Video size={20} />, label: "Tutoriais", desc: "Vídeos e guias", id: "tutorial-conectar" },
                { icon: <MessageCircle size={20} />, label: "FAQ", desc: "Dúvidas frequentes", id: "faq-geral" },
                { icon: <Scale size={20} />, label: "Economia", desc: "Regras econômicas", id: "empregos" },
              ].map((card, i) => (
                <FadeIn key={card.label} delay={i * 0.08}>
                  <div onClick={() => navigate(card.id)} style={{ padding: "20px 18px", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 10, cursor: "pointer", transition: "all .25s", display: "flex", flexDirection: "column", gap: 10, position: "relative", overflow: "hidden" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(200,236,79,.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "none"; }}
                  >
                    <div style={{ position: "absolute", top: 0, left: 0, width: 40, height: 3, background: "var(--signal)", clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)" }} />
                    <div style={{ color: "var(--signal)" }}>{card.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 15, textTransform: "uppercase", letterSpacing: ".03em" }}>{card.label}</div>
                      <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>{card.desc}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <div style={{ padding: "18px 22px", background: "rgba(200,236,79,.05)", border: "1px solid rgba(200,236,79,.18)", borderRadius: 10, display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Zap size={18} color="var(--signal)" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <strong style={{ fontSize: 13, display: "block", marginBottom: 5, fontFamily: "'Inter', sans-serif" }}>Mantenha-se atualizado</strong>
                  <span style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
                    As regras podem mudar com atualizações do servidor. Verifique esta página regularmente para acompanhar as novidades.
                  </span>
                </div>
              </div>
            </FadeIn>
          </section>
        )}

        {/* ── Como usar ── */}
        {activeSection === "como-usar" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Introdução</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Como usar este <span style={{ color: "var(--signal)" }}>guia</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Use a sidebar à esquerda para navegar entre as seções. Cada regra inclui uma explicação clara e exemplos práticos.
              </p>
            </FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {[
                { icon: <CheckCircle2 size={16} color="#22c55e" />, color: "#22c55e", label: "Verde", desc: "Comportamento permitido e encorajado" },
                { icon: <XCircle size={16} color="#ef4444" />, color: "#ef4444", label: "Vermelho", desc: "Comportamento proibido (punição aplicada)" },
                { icon: <AlertTriangle size={16} color="#f59e0b" />, color: "#f59e0b", label: "Amarelo", desc: "Atenção: zona cinzenta, use bom senso" },
              ].map((item, i) => (
                <FadeIn key={item.label} delay={i * 0.1}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", background: "var(--surface)", borderRadius: 8, border: "1px solid var(--line)" }}>
                    {item.icon}
                    <span style={{ fontSize: 13, fontFamily: "'Inter', sans-serif" }}><strong style={{ color: item.color }}>{item.label}</strong> — {item.desc}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        )}

        {/* ── Código de Conduta ── */}
        {activeSection === "codesign" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Introdução</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Código de <span style={{ color: "var(--signal)" }}>Conduta</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Valores que guiiam nossa comunidade. Respeite para que todos se divirtam.
              </p>
            </FadeIn>
            {[
              { icon: <Heart size={20} />, title: "Respeito", text: "Trate todos com dignidade. Não importa facção, cargo ou experiência." },
              { icon: <Users size={20} />, title: "Colaboração", text: "Ajude novos jogadores. A comunidade cresce quando todos contribuem." },
              { icon: <Scale size={20} />, title: "Justiça", text: "Regras são iguais para todos. Staff e jogadores seguem as mesmas normas." },
              { icon: <Gamepad2 size={20} />, title: "Diversão", text: "O objetivo é se divertir. RP é uma experiência coletiva, não uma competição." },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div style={{ display: "flex", gap: 16, padding: "18px 22px", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 10, marginBottom: 10, alignItems: "flex-start" }}>
                  <div style={{ color: "var(--signal)", marginTop: 2 }}>{v.icon}</div>
                  <div>
                    <h4 style={{ margin: "0 0 4px", fontFamily: "'Anton', sans-serif", fontSize: 16, textTransform: "uppercase" }}>{v.title}</h4>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>{v.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </section>
        )}

        {/* ── Regras de RP ── */}
        {activeSection === "respeito" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Regras de RP</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Respeito <span style={{ color: "var(--signal)" }}>mútuo</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                A base de qualquer comunidade saudável é o respeito. Todos merecem tratamento digno.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Toxicidade" description="Preconceito, assédio, ofensas pessoais e discriminação de qualquer tipo não são tolerados." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Insultos fora do RP" description="Não xingue outros jogadores fora da cena de roleplay. Use os canais oficiais para reportar." /></FadeIn>
            <FadeIn delay={0.2}><RuleCard type="allowed" title="Encorajado: Colaboração" description="Ajude novos jogadores, participe de cenas coletivas e construa histórias em conjunto." example="Um veterano ajuda um novato a entender o sistema de empregos, sem quebrar a imersão do personagem." /></FadeIn>
            <FadeIn delay={0.25}><RuleCard type="warning" title="Atenção: Discussões" description="Discussões sobre regras devem ser feitas nos canais oficiais, com respeito." /></FadeIn>
          </section>
        )}

        {activeSection === "powergaming" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Regras de RP</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Power<span style={{ color: "var(--signal)" }}>gaming</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Forçar situações irreais ou usar o jogo de forma antiêmica. O RP deve ser coerente e realista.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Ações irreais" description="Não faça coisas que um humano normal não conseguiria." example="Errado: Pular de um prédio de 10 andares e sair andando. Certo: Ao cair, sofrer lesões graves e precisar de socorro." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Forçar cenas" description="Não force outros jogadores a aceitarem situações. Cena é consentimento mútuo." example="Errado: Apontar arma e exigir que alguém entregue tudo sem dar opção. Certo: Criar uma cena onde ambos possam reagir." /></FadeIn>
            <FadeIn delay={0.2}><RuleCard type="prohibited" title="Proibido: Autolesão" description="Não se machuque de propósito para ganhar vantagem ou chamar atenção." example="Errado: Se jogar de um morro para ter desculpa de ir ao hospital. Certo: Criar uma cena genuína de acidente." /></FadeIn>
            <FadeIn delay={0.25}><RuleCard type="allowed" title="Encorajado: Criatividade realista" description="Use sua criatividade dentro do que é plausível." example="Um ladrão cria um plano elaborado de assalto com fuga,etrizeiras e fachada." /></FadeIn>
          </section>
        )}

        {activeSection === "metagaming" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Regras de RP</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Meta<span style={{ color: "var(--signal)" }}>gaming</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Usar informações fora do jogo para vantagem dentro do personagem.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Info externa" description="Não use Discord, live streams ou qualquer canal externo para obter informações que seu personagem não teria." example="Errado: Saber que o jogador X está na delegacia porque viu no Discord. Certo: Seu personagem só sabe se estiver lá ou alguém contar em RP." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Stream sniping" description="Não assista a live de outro jogador para saber sua localização ou planos." /></FadeIn>
            <FadeIn delay={0.2}><RuleCard type="warning" title="Atenção: Redes sociais" description="Postar coisas sobre o RP nas redes sociais é ok, mas não use essas informações dentro do jogo." /></FadeIn>
          </section>
        )}

        {activeSection === "rdm" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Regras de RP</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                RDM & <span style={{ color: "var(--signal)" }}>Deathmatch</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Random Deathmatch e Deathmatch são ataques sem motivo ou contexto.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: RDM" description="Não atire ou ataque alguém sem uma cena de RP anterior." example="Errado: Ver um jogador andando na rua e atirar sem motivo. Certo: Criar uma cena de assalto, briga ou conflito antes." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Ataques sem aviso" description="Toda agressão deve ter contexto narrativo. Não ataque quem não participa da cena." /></FadeIn>
            <FadeIn delay={0.2}><RuleCard type="allowed" title="Encorajado: Conflitos com contexto" description="Confrontos faccionais, assaltos, disputas territoriais — tudo válido quando tem cena." /></FadeIn>
          </section>
        )}

        {activeSection === "vdm" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Regras de RP</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                VDM — Vehicle <span style={{ color: "var(--signal)" }}>Deathmatch</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Usar veículos como arma para atingir jogadores sem contexto de RP.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Atropelamento intencional" description="Não atropelar jogadores sem motivo. Isso inclui atropelar e sair correndo." example="Errado: Dirigir na calçada atropelando pessoas. Certo: Perseguição policial onde o atropelamento acidental faz parte da cena." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="warning" title="Atenção: Acidentes" description="Acidentes de trânsito podem acontecer, mas devem ser interpretados com RP adequado." /></FadeIn>
          </section>
        )}

        {activeSection === "newlife" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Regras de RP</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Regra da <span style={{ color: "var(--signal)" }}>Nova Vida</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Quando seu personagem morre, ele perde todas as memórias da vida anterior.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Vingança pós-morte" description="Se você morreu, não pode voltar para se vingar." example="Errado: Morrer em um assalto e voltar para atacar o assaltante. Certo: Acordar no hospital sem saber quem te machucou." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Recordar a morte" description="Seu personagem não lembra como morreu." example="Errado: Chegar no hospital e dizer 'fui baleado pelo João'. Certo: Chegar confuso, sem saber o que aconteceu." /></FadeIn>
            <FadeIn delay={0.2}><RuleCard type="allowed" title="Encorajado: Novos começos" description="Use a nova vida para criar uma nova história, novas amizades, uma nova trajetória." /></FadeIn>
          </section>
        )}

        {activeSection === "valores" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Regras de RP</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Valorização da <span style={{ color: "var(--signal)" }}>vida</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Todo personagem tem medo de morrer. Reaja de forma proporcional ao perigo.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Ignorar perigo" description="Não finja que balas não machucam." example="Errado: Ficar parado no meio da rua durante um tiroteio. Certo: Se abrigar, chamar reforços, ter medo real." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="allowed" title="Encorajado: Reações realistas" description="Sofra,grite,peça socorro — quanto mais realista, melhor a cena para todos." /></FadeIn>
          </section>
        )}

        {activeSection === "idle" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Regras de RP</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                AFK & <span style={{ color: "var(--signal)" }}>Idle</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Se precisar sair, vá para um local seguro e use o sistema de AFK.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="warning" title="Atenção: Locais seguros" description="Se for AFK, vá para sua casa, um hospital ou local seguro." example="Seu personagem pode estar dormindo em casa, no hospital em tratamento, ou em algum local neutro." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: AFK em cena" description="Não fique parado no meio de uma cena de RP. Se precisar saia da cena primeiro." /></FadeIn>
          </section>
        )}

        {activeSection === "revenge" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Regras de RP</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Regra da <span style={{ color: "var(--signal)" }}>Vingança</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Vingança precisa de contexto e deve ser proporcional. Não épermitido vingança desmedida.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Vingança desproporcional" description="Se alguém te roubou R$ 1.000, não mate a pessoa. A reação deve ser proporcional." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="warning" title="Atenção: Contexto" description="Vingança só é válida se houver cena de RP anterior clara entre as partes." /></FadeIn>
            <FadeIn delay={0.2}><RuleCard type="allowed" title="Encorajado: Consequências narrativas" description="Use a vingança como ferramenta de história, não como vingança pessoal do jogador." /></FadeIn>
          </section>
        )}

        {/* ── Comportamento ── */}
        {activeSection === "ooc" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Comportamento</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Comunicação <span style={{ color: "var(--signal)" }}>OOC</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                OOC (Out of Character) é comunicação fora do personagem. Use com moderação.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: OOC em cena" description="Não misture OOC com RP." example="Errado: '/me está com raiva' e em seguida '/ooc mas eu não sei o que fazer'. Certo: Resolva OOC no Discord." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="allowed" title="Permitido: /me e /do" description="Use /me para descrever ações e /do para descrever o ambiente." example="/me verifica o documento com cuidado. /do O documento parece autêntico." /></FadeIn>
          </section>
        )}

        {activeSection === "chat" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Comportamento</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Chat & <span style={{ color: "var(--signal)" }}>Comandos</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                O chat tem alcance limitado. Use canais corretos para cada tipo de comunicação.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ padding: 20, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 10, marginBottom: 20 }}>
                <h4 style={{ margin: "0 0 14px", fontFamily: "'Anton', sans-serif", fontSize: 16, textTransform: "uppercase" }}>Canais de chat</h4>
                <div style={{ display: "grid", gap: 8 }}>
                  {[
                    { cmd: "/me", desc: "Descrever ação do personagem" },
                    { cmd: "/do", desc: "Descrever o ambiente ou situação" },
                    { cmd: "/ooc", desc: "Comunicação fora do personagem" },
                    { cmd: "/b", desc: "Chat OOC local" },
                    { cmd: "/f", desc: "Chat da facção" },
                    { cmd: "/g", desc: "Chat da gangue" },
                    { cmd: "/t", desc: "Chat da equipe (staff)" },
                  ].map((ch) => (
                    <div key={ch.cmd} style={{ display: "flex", gap: 14, alignItems: "center", padding: "6px 0" }}>
                      <code style={{ padding: "4px 10px", background: "rgba(200,236,79,.08)", color: "var(--signal)", borderRadius: 5, fontSize: 12, fontFamily: "monospace", minWidth: 42, textAlign: "center", border: "1px solid rgba(200,236,79,.15)" }}>{ch.cmd}</code>
                      <span style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>{ch.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </section>
        )}

        {activeSection === "naming" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Comportamento</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Nomenclatura
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Nomes devem ser realistas e adequados para São Paulo.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Nomes irrealistas" description="Nomes como 'XxProGamerxX', 'Batman' não são permitidos." example="Errado: Spawn_2024, Player_One. Certo: Carlos Silva, Maria Santos." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Nomes ofensivos" description="Nomes com conotação sexual, racista ou ofensiva serão removidos." /></FadeIn>
          </section>
        )}

        {activeSection === "skins" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Comportamento</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Aparência
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                A aparência do personagem deve ser coerente com o universo de São Paulo.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Skins absurdas" description="Skins de animais, super-heróis ou personagens irreais não são permitidas." example="Errado: Skin de macaco ou personagem de anime. Certo: Roupas de rua, trabalho, formal." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="allowed" title="Encorajado: Identidade única" description="Crie uma aparência que combine com a história do seu personagem." /></FadeIn>
          </section>
        )}

        {activeSection === "newbies" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Comportamento</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Auxiliar <span style={{ color: "var(--signal)" }}>novatos</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Todos já foram novos um dia. Ajude quem está começando.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="allowed" title="Encorajado: Mentorar" description="Ajude novos jogadores a entender as regras, sistemas e cultura do RP." example="Um jogador experiente mostra ao novato como usar /me, /do e o sistema de empregos." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Explorar novatos" description="Não engane ou prejudique jogadores novos por serem inexperientes." /></FadeIn>
          </section>
        )}

        {/* ── Veículos ── */}
        {activeSection === "trafego" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Veículos</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Leis de <span style={{ color: "var(--signal)" }}>trânsito</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                São Paulo tem leis de trânsito. Respeite semáforos, faixas e velocidade.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Dirigir na calçada" description="Calçada é para pedestres. Dirija nas ruas." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="warning" title="Atenção: Velocidade" description="Cada região tem limite. Zonas residenciais são mais lentas." /></FadeIn>
            <FadeIn delay={0.2}><RuleCard type="allowed" title="Encorajado: RP de trânsito" description="Respeite o código de trânsito para um RP mais imersivo." /></FadeIn>
          </section>
        )}

        {activeSection === "perseguicao" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Veículos</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Perseguição
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Perseguições policiais devem ser realistas e com contexto.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Perseguição sem motivo" description="Não inicie uma perseguição sem justificativa." example="Errado: Ver um carro e sair atrás. Certo: Viu uma infração, acionou o alarme e iniciou a abordagem." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="allowed" title="Encorajado: Cenas cinematográficas" description="Perseguições com dublês e resolução criativa são muito bem-vindas." /></FadeIn>
          </section>
        )}

        {activeSection === "veiculos-regras" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Veículos</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Regras gerais de <span style={{ color: "var(--signal)" }}>veículos</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Cada veículo tem um dono. Respeite propriedade alheia.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Roubo sem cena" description="Não entre em um veículo alheio sem uma cena de RP." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="warning" title="Atenção: Documentação" description="Todo veículo deve ter documento. Veículos sem placa podem ser apreendidos." /></FadeIn>
          </section>
        )}

        {activeSection === "drift" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Veículos</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Drift & Street <span style={{ color: "var(--signal)" }}>Racing</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Corridas de rua e drift existem na cidade, mas com regras.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="warning" title="Atenção: Locais adequados" description="Drift e corridas devem ocorrer em locais apropriados, não em vias públicas movimentadas." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="allowed" title="Encorajado: Cultura automotiva" description="Eventos de carros, encontros e corridas organizadas são ótimos para o RP." /></FadeIn>
          </section>
        )}

        {/* ── Territórios ── */}
        {activeSection === "faccoes" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Territórios & Facções</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Criação de <span style={{ color: "var(--signal)" }}>facções</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Facções são grupos organizados que dominam territórios e atividades.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="allowed" title="Permitido: Criar facção" description="Grupos com mínimo 5 membros podem solicitar registro no Discord." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Facção sem registro" description="Grupos não registrados não têm direito a territórios oficiais." /></FadeIn>
          </section>
        )}

        {activeSection === "territorios-regras" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Territórios & Facções</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Controle <span style={{ color: "var(--signal)" }}>territorial</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Territórios são mantidos por presença constante e investimento.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="warning" title="Atenção: Presença" description="Para manter território, a facção precisa de membros online regularmente." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="allowed" title="Encorajado: Diplomacia" description="Acordos entre facções são válidos e encorajados." /></FadeIn>
          </section>
        )}

        {activeSection === "guerras" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Territórios & Facções</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Guerras & <span style={{ color: "var(--signal)" }}>Disputas</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Guerras faccionais devem ser coordenadas e com regras claras.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="warning" title="Atenção: Organização" description="Guerras devem ser anunciadas previamente no Discord." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Guerras sem aviso" description="Não inicie guerra sem comunicar a staff e a facção adversária." /></FadeIn>
          </section>
        )}

        {activeSection === "economia-faccoes" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Territórios & Facções</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Economia <span style={{ color: "var(--signal)" }}>faccional</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Facções têm economia própria. Gerencie recursos com responsabilidade.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="prohibited" title="Proibido: Money drop" description="Não drope dinheiro para outros jogadores sem cena de RP." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="allowed" title="Permitido: Investimentos" description="Facções podem investir em propriedades, veículos e negócios." /></FadeIn>
          </section>
        )}

        {/* ── Economia ── */}
        {activeSection === "empregos" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Economia & Serviços</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Sistema de <span style={{ color: "var(--signal)" }}>empregos</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                A cidade oferece diversos empregos legais. Cada um com progressão própria.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ padding: 20, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 10, marginBottom: 20 }}>
                <h4 style={{ margin: "0 0 14px", fontFamily: "'Anton', sans-serif", fontSize: 16, textTransform: "uppercase" }}>Empregos disponíveis</h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {["Policia", "Bombeiro", "Médico", "Mecânico", "Advogado", "Entregador", "Uber", "Minerador", "Ladrão", "Taxista"].map((job) => (
                    <div key={job} style={{ padding: "8px 12px", background: "rgba(200,236,79,.04)", border: "1px solid rgba(200,236,79,.1)", borderRadius: 6, fontSize: 12, fontFamily: "'Inter', sans-serif", color: "var(--paper)" }}>
                      {job}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}><RuleCard type="allowed" title="Encorajado: Progressão" description="Cada emprego tem níveis. Quanto mais trabalha, mais desbloqueia." /></FadeIn>
          </section>
        )}

        {activeSection === "propriedades" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Economia & Serviços</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                <span style={{ color: "var(--signal)" }}>Propriedades</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Casas, apartamentos e terrenos podem ser comprados ou alugados.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="allowed" title="Permitido: Comprar imóvel" description="Use o sistema de imobiliárias para adquirir propriedades." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Invadir propriedade" description="Não entre em propriedade alheia sem cena de RP." /></FadeIn>
          </section>
        )}

        {activeSection === "loja-vip" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Economia & Serviços</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Loja <span style={{ color: "var(--signal)" }}>VIP</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                A loja VIP oferece benefícios extras, mas não vantagens unfair em RP.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="warning" title="Atenção: Vantagens limitadas" description="VIP dá benefícios cosméticos e conveniência, não poderes de RP." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Comprar vantagem de RP" description="Não use VIP para ganhar vantagem injusta em cenas de roleplay." /></FadeIn>
          </section>
        )}

        {activeSection === "ilegal" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Economia & Serviços</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Atividades <span style={{ color: "var(--signal)" }}>ilegais</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 24, fontFamily: "'Inter', sans-serif" }}>
                Atividades ilegais existem no RP, mas têm consequências reais.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}><RuleCard type="warning" title="Atenção: Consequências" description="Se for pego, terá que cumprir pena. Atividades ilegais têm risco real." /></FadeIn>
            <FadeIn delay={0.15}><RuleCard type="prohibited" title="Proibido: Ilegal sem cena" description="Não faça activities ilegais sem contexto de RP com outros jogadores." /></FadeIn>
          </section>
        )}

        {/* ── Tutoriais em Vídeo ── */}
        {(activeSection === "tutorial-conectar" || activeSection === "tutorial-fivem" || activeSection === "tutorial-personagem" || activeSection === "tutorial-emprego" || activeSection === "tutorial-economia" || activeSection === "tutorial-faccoes" || activeSection === "tutorial-casa") && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Tutoriais em Vídeo</p>
              <h2 style={{ margin: "0 0 8px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Aprenda com <span style={{ color: "var(--signal)" }}>vídeos</span>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "var(--muted)", maxWidth: 620, marginBottom: 32, fontFamily: "'Inter', sans-serif" }}>
                Tutoriais em vídeo para te ajudar a começar. Assista, aprenda e entre na cidade preparado.
              </p>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
              {videos.map((v, i) => <VideoCard key={v.title} video={v} index={i} />)}
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        {activeSection === "faq-geral" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Perguntas Frequentes</p>
              <h2 style={{ margin: "0 0 24px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                FAQ <span style={{ color: "var(--signal)" }}>Geral</span>
              </h2>
            </FadeIn>
            {faqGeral.map((faq, i) => <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />)}
          </section>
        )}

        {activeSection === "faq-tecnico" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Perguntas Frequentes</p>
              <h2 style={{ margin: "0 0 24px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                FAQ <span style={{ color: "var(--signal)" }}>Técnico</span>
              </h2>
            </FadeIn>
            {faqTecnico.map((faq, i) => <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />)}
          </section>
        )}

        {activeSection === "faq-ban" && (
          <section>
            <FadeIn>
              <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, color: "var(--signal)", textTransform: "uppercase", letterSpacing: ".15em" }}>Perguntas Frequentes</p>
              <h2 style={{ margin: "0 0 24px", fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", textTransform: "uppercase", lineHeight: 1 }}>
                Solicitar <span style={{ color: "var(--signal)" }}>desban</span>
              </h2>
            </FadeIn>
            {faqBan.map((faq, i) => <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />)}
          </section>
        )}
      </main>

      {/* ─── Responsive ─── */}
      <style>{`
        @media (max-width: 900px) {
          .guide-sidebar {
            transform: ${sidebarOpen ? "translateX(0)" : "translateX(-100%)"};
            box-shadow: ${sidebarOpen ? "4px 0 30px rgba(0,0,0,.6)" : "none"};
          }
          .guide-content {
            margin-left: 0 !important;
            padding: 70px 24px 80px !important;
          }
          .guide-overlay {
            display: ${sidebarOpen ? "block" : "none"} !important;
          }
        }
      `}</style>
    </div>
  );
}

/* Need Heart for codesign - import it */
import { Heart } from "lucide-react";
