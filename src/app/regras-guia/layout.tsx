import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia & Regras | Zona Oeste Roleplay",
  description:
    "Guia completo de regras de RP, tutoriais em vídeo e FAQ do Zona Oeste Roleplay.",
};

export default function RegrasGuiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
