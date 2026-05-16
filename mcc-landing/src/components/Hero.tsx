"use client";

import { useEffect, useRef } from "react";
import { hero } from "@/lib/content";

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && videoRef.current) {
      videoRef.current.pause();
    }
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) videoRef.current?.pause();
      else videoRef.current?.play().catch(() => {});
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const ctaProps = BOOKING_URL
    ? { href: BOOKING_URL, target: "_blank", rel: "noopener noreferrer" }
    : { href: "#contact" };

  return (
    <section
      id="ai-transformation"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900"
      aria-labelledby="hero-heading"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/image-ki-1280x630.png"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      >
        <source src="/assets/mcc-animation.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-slate-900/55 to-slate-800/40"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold tracking-wide uppercase mb-6">
            <span aria-hidden="true" className="w-8 h-px bg-teal-400 inline-block" />
            {hero.eyebrow}
          </p>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            {hero.subheadline}
          </p>

          {/* Value bullets */}
          <ul className="flex flex-col gap-2 mb-10" aria-label="Kernleistungen">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-slate-200">
                <svg
                  className="w-5 h-5 text-teal-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base font-medium">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              {...ctaProps}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold text-base rounded-lg transition-colors shadow-lg"
            >
              {hero.primaryCTA}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-semibold text-base rounded-lg transition-colors"
            >
              {hero.secondaryCTA}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
