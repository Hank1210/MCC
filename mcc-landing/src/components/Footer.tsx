import Image from "next/image";
import { nav, footer, CONTACT_EMAIL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#ai-transformation" aria-label="MultiChannelConsult – zur Startseite">
              <Image
                src="/assets/logo-mcc-tagline-final.png"
                alt="MultiChannelConsult Logo"
                width={200}
                height={37}
                className="h-8 w-auto object-contain mb-5 brightness-0 invert opacity-90"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {footer.description}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 mt-5 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-slate-500 text-xs">{footer.copyright}</p>
          <p className="text-slate-600 text-xs">
            {/* Impressum und Datenschutz werden separat ergänzt */}
            multichannelconsult.de
          </p>
        </div>
      </div>
    </footer>
  );
}
