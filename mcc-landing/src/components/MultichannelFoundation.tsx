import Image from "next/image";
import { multichannel } from "@/lib/content";

export default function MultichannelFoundation() {
  return (
    <section className="bg-slate-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/assets/image-ki-1280x630.png"
              alt="KI-Transformation und digitale Vernetzung"
              width={1280}
              height={630}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {multichannel.headline}
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              {multichannel.body}
            </p>

            <ul className="flex flex-col gap-5">
              {multichannel.cards.map((card) => (
                <li
                  key={card.title}
                  className="flex gap-4 bg-slate-800 border border-slate-700 rounded-xl p-5"
                >
                  <span
                    className="text-2xl shrink-0"
                    aria-hidden="true"
                    role="img"
                  >
                    {card.icon}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
