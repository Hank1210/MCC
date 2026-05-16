import { challenge } from "@/lib/content";

export default function Challenge() {
  return (
    <section className="bg-slate-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {challenge.headline}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">{challenge.body}</p>
        </div>

        {/* Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenge.cards.map((card) => (
            <li
              key={card.title}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex gap-4 items-start"
            >
              <span
                className="text-2xl mt-0.5 shrink-0"
                aria-hidden="true"
                role="img"
              >
                {card.icon}
              </span>
              <div>
                <h3 className="text-white font-semibold text-base mb-1">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
