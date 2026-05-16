import { whyMCC } from "@/lib/content";

export default function WhyMCC() {
  return (
    <section className="bg-slate-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
          {whyMCC.headline}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyMCC.cards.map((card) => (
            <article
              key={card.title}
              className="bg-slate-800 border border-slate-700 rounded-xl p-7 flex flex-col gap-4 hover:border-teal-700/50 transition-colors"
            >
              <span
                className="text-3xl"
                aria-hidden="true"
                role="img"
              >
                {card.icon}
              </span>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
