import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zona Oeste Roleplay | Servidor de GTA RP em São Paulo",
  description:
    "Entre no Zona Oeste Roleplay: uma cidade de GTA RP inspirada em São Paulo, com facções, empregos, economia, eventos e uma comunidade ativa.",
  keywords:
    "GTA RP, GTA roleplay, FiveM, servidor GTA RP, São Paulo RP, roleplay brasileiro, Zona Oeste, cidade RP",
  authors: [{ name: "Zona Oeste Roleplay" }],
  creator: "Zona Oeste Roleplay",
  publisher: "Zona Oeste Roleplay",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  metadataBase: new URL("https://zona-oeste-roleplay.vercel.app"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Zona Oeste Roleplay",
    title: "Zona Oeste Roleplay | A Zona Oeste está ligada",
    description:
      "Viva histórias com consequência em uma cidade de GTA RP inspirada em São Paulo.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1600,
        height: 900,
        alt: "Logo Zona Oeste Roleplay",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zona Oeste Roleplay | A Zona Oeste está ligada",
    description:
      "Entre na cidade, construa seu personagem e viva o verdadeiro RP de São Paulo.",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "/#organization",
                  name: "Zona Oeste Roleplay",
                  url: "https://zona-oeste-roleplay.vercel.app",
                  logo: {
                    "@type": "ImageObject",
                    url: "/assets/logo.png",
                  },
                  sameAs: [
                    "https://discord.gg/eliterpgg",
                    "https://zosprp.centralcart.ai/",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "/#website",
                  url: "https://zona-oeste-roleplay.vercel.app",
                  name: "Zona Oeste Roleplay",
                  description:
                    "Servidor brasileiro de GTA RP inspirado em São Paulo.",
                  inLanguage: "pt-BR",
                  publisher: { "@id": "/#organization" },
                },
                {
                  "@type": "WebPage",
                  "@id": "/#webpage",
                  url: "https://zona-oeste-roleplay.vercel.app",
                  name: "Zona Oeste Roleplay | Servidor de GTA RP em São Paulo",
                  isPartOf: { "@id": "/#website" },
                  about: { "@id": "/#organization" },
                  description: "Site oficial da Zona Oeste Roleplay.",
                  inLanguage: "pt-BR",
                  primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: "/assets/logo.png",
                  },
                },
                {
                  "@type": "VideoGame",
                  name: "Zona Oeste Roleplay",
                  genre: ["Role-playing game", "Simulation"],
                  gamePlatform: "FiveM",
                  inLanguage: "pt-BR",
                  description:
                    "Experiência de roleplay urbano ambientada em uma cidade inspirada em São Paulo.",
                  url: "https://zona-oeste-roleplay.vercel.app",
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
