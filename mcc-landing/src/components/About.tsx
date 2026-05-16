import Image from "next/image";
import { about } from "@/lib/content";

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/frank-euler-office.png"
                alt="Frank Euler, MultiChannelConsult"
                width={667}
                height={1000}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent px-6 py-5">
                <p className="text-white font-bold text-lg">Frank Euler</p>
                <p className="text-teal-300 text-sm font-medium">
                  MultiChannelConsult
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {about.headline}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">{about.body}</p>
            <p className="text-slate-600 leading-relaxed mb-8">{about.body2}</p>

            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">
                Expertise & Erfahrung
              </p>
              <ul className="flex flex-col gap-3">
                {about.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-slate-700">
                    <CheckIcon />
                    <span className="text-sm md:text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
