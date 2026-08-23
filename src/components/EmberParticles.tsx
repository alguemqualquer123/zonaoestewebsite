"use client";

import { useEffect, useRef } from "react";

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  hue: number;
  wobble: number;
}

export default function EmberParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const embersRef = useRef<Ember[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (): Ember => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -(0.8 + Math.random() * 1.8),
      size: 1.5 + Math.random() * 3.5,
      opacity: 0.5 + Math.random() * 0.5,
      life: 0,
      maxLife: 100 + Math.random() * 120,
      hue: 20 + Math.random() * 40,
      wobble: 0.015 + Math.random() * 0.03,
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.12) {
        embersRef.current.push(spawn());
      }

      embersRef.current = embersRef.current.filter((e) => {
        e.life++;
        e.x += e.vx + Math.sin(e.life * e.wobble) * 0.6;
        e.y += e.vy;
        e.vy *= 0.997;
        e.opacity = Math.max(0, e.opacity - 0.004);
        e.size *= 0.998;

        if (e.life > e.maxLife || e.opacity <= 0 || e.y < -20) return false;

        const g = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.size * 2.5);
        g.addColorStop(0, `hsla(${e.hue},100%,65%,${e.opacity})`);
        g.addColorStop(0.4, `hsla(${e.hue - 8},100%,50%,${e.opacity * 0.5})`);
        g.addColorStop(1, `hsla(${e.hue - 15},100%,40%,0)`);
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${e.hue + 15},100%,85%,${e.opacity * 0.8})`;
        ctx.fill();

        return true;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 6,
        mixBlendMode: "screen",
      }}
      aria-hidden="true"
    />
  );
}
