"use client";

import Image from "next/image";
import { useState } from "react";
import { nav } from "@/lib/content";

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

export default function Header() {
  const [open, setOpen] = useState(false);

  const ctaProps = BOOKING_URL
    ? { href: BOOKING_URL, target: "_blank", rel: "noopener noreferrer" }
    : { href: "#contact" };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#ai-transformation" aria-label="MultiChannelConsult – zur Startseite">
            <Image
              src="/assets/logo-mcc-tagline-final.png"
              alt="MultiChannelConsult Logo"
              width={220}
              height={41}
              priority
              className="h-9 md:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Hauptnavigation"
            className="hidden lg:flex items-center gap-6"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              {...ctaProps}
              className="inline-flex items-center px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-lg transition-colors focus-visible:outline-teal-500"
            >
              AI Transformation Call buchen
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <span className="sr-only">{open ? "Schließen" : "Öffnen"}</span>
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-slate-200 bg-white">
          <nav aria-label="Mobile Navigation" className="px-4 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-slate-700 hover:text-teal-600 border-b border-slate-100 last:border-0 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                {...ctaProps}
                onClick={() => setOpen(false)}
                className="block w-full text-center px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                AI Transformation Call buchen
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

