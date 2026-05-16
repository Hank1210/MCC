import { finalCTA } from "@/lib/content";

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

export default function FinalCTA() {
  const ctaProps = BOOKING_URL
    ? { href: BOOKING_URL, target: "_blank", rel: "noopener noreferrer" }
    : { href: "#contact" };

  return (
    <section className="bg-teal-700 py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
          {finalCTA.headline}
        </h2>
        <p className="text-teal-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          {finalCTA.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            {...ctaProps}
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-teal-800 font-bold text-base rounded-lg transition-colors shadow-lg"
          >
            {finalCTA.primaryCTA}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 hover:border-white/70 text-white font-semibold text-base rounded-lg transition-colors"
          >
            {finalCTA.secondaryCTA}
          </a>
        </div>
      </div>
    </section>
  );
}
