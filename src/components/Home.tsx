"use client";

import { useEffect, useState } from "react";
import EmberParticles from "@/components/EmberParticles";
import StoreSection from "@/components/StoreSection";
import LoadingScreen from "@/components/home/LoadingScreen";
import SiteHeader from "@/components/home/SiteHeader";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import RankingSection from "@/components/home/RankingSection";
import RulesSection from "@/components/home/RulesSection";
import StepsSection from "@/components/home/StepsSection";
import GallerySection from "@/components/home/GallerySection";
import AboutSection from "@/components/home/AboutSection";
import SiteFooter from "@/components/home/SiteFooter";
import FloatingDiscord from "@/components/home/FloatingDiscord";
import { HERO_BANNER } from "@/data/assets";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preload = new Image();
    preload.src = HERO_BANNER;
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

  // Force video autoplay + keep alive
  useEffect(() => {
    const video = document.querySelector<HTMLVideoElement>("video.hero-video-bg");
    if (!video) return;
    video.play().catch(() => {});
    // Re-trigger play when tab becomes visible or video pauses unexpectedly
    const onVis = () => { if (!document.hidden && video.paused) video.play().catch(() => {}); };
    const onTimeUpdate = () => {
      // If video is near end, loop is handled by attribute, but ensure it keeps playing
      if (video.paused && !video.ended) video.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);
    video.addEventListener("pause", onTimeUpdate);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      video.removeEventListener("pause", onTimeUpdate);
    };
  }, [isLoading]);

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

    // Header scroll + hero parallax
    const header = document.querySelector<HTMLElement>(".site-header");
    const heroVideo = document.querySelector<HTMLElement>(".hero-video-bg");
    const heroScrim = document.querySelector<HTMLElement>(".hero-scrim");
    const heroGrid = document.querySelector<HTMLElement>(".hero-grid");
    const heroCopy = document.querySelector<HTMLElement>(".hero-copy");
    const onScroll = () => {
      const sy = window.scrollY;
      if (sy > 50) {
        header?.classList.add("is-scrolled");
      } else {
        header?.classList.remove("is-scrolled");
      }
      // Hero parallax
      const heroH = window.innerHeight;
      if (sy < heroH) {
        const ratio = sy / heroH;
        if (heroVideo) heroVideo.style.transform = `translateY(${sy * 0.35}px) scale(${1 + ratio * 0.05})`;
        if (heroScrim) heroScrim.style.transform = `translateY(${sy * 0.2}px)`;
        if (heroGrid) heroGrid.style.transform = `translateY(${sy * 0.15}px)`;
        if (heroCopy) {
          heroCopy.style.transform = `translateY(${sy * 0.25}px)`;
          heroCopy.style.opacity = `${1 - ratio * 0.7}`;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const interactiveCards = document.querySelectorAll<HTMLElement>(
      ".feature-card, .gallery-grid figure, .player-row, .server-panel, .vip-card, .store-grid .store-card"
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
      // Reset parallax
      if (heroVideo) heroVideo.style.transform = '';
      if (heroScrim) heroScrim.style.transform = '';
      if (heroGrid) heroGrid.style.transform = '';
      if (heroCopy) { heroCopy.style.transform = ''; heroCopy.style.opacity = ''; }
      cardCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      <EmberParticles />
      <div className="grain-overlay" aria-hidden="true" />
      <LoadingScreen isLoading={isLoading} />
      <div
        className={`site-shell ${isLoading ? "content-waiting" : "content-ready"}`}
      >
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">
          <Hero />
          <FeaturesSection />
          <RankingSection />
          <StoreSection />
          <RulesSection />
          <StepsSection />
          <GallerySection />
          <AboutSection />
        </main>
        <SiteFooter />
      </div>
      <FloatingDiscord />
    </>
  );
}
