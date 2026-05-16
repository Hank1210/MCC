import { services } from "@/lib/content";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-teal-600 shrink-0 mt-0.5"
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

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
            {services.headline}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">{services.intro}</p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.items.map((service, i) => (
            <article
              key={service.title}
              className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Number badge */}
              <span className="inline-flex items-center justify-center w-9 h-9 bg-teal-50 text-teal-700 text-sm font-bold rounded-lg mb-4 border border-teal-100">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
                {service.description}
              </p>

              {/* Deliverables */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
                  Deliverables
                </p>
                <ul className="flex flex-col gap-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckIcon />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
