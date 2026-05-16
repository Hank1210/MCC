import { useCases } from "@/lib/content";

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-slate-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            {useCases.headline}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">{useCases.intro}</p>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 bg-slate-800/60 border border-slate-700/60 rounded-xl px-5 py-4"
            >
              <span
                className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0"
                aria-hidden="true"
              />
              <span className="text-slate-200 text-sm md:text-base font-medium leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
