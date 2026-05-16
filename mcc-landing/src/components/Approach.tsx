import Image from "next/image";
import { approach } from "@/lib/content";

export default function Approach() {
  return (
    <section id="approach" className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
            {approach.headline}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">{approach.intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <ol className="flex flex-col gap-6">
            {approach.steps.map((step) => (
              <li key={step.number} className="flex gap-5 items-start">
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-teal-600 text-white font-bold text-sm">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/image-transformation-1280x630.png"
              alt="Transformation von Prozessen und Organisation"
              width={1280}
              height={630}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
