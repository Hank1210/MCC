"use client";

import { useState, type FormEvent } from "react";
import { contact, CONTACT_EMAIL } from "@/lib/content";

interface FormState {
  name: string;
  company: string;
  email: string;
  topic: string;
  message: string;
  consent: boolean;
}

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  topic: "",
  message: "",
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Anfrage: ${form.topic || "Allgemein"} – ${form.name}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        form.company ? `Unternehmen: ${form.company}` : null,
        `E-Mail: ${form.email}`,
        `Thema: ${form.topic}`,
        "",
        form.message,
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition placeholder:text-slate-400";

  return (
    <section id="contact" className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: copy */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              {contact.headline}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">{contact.body}</p>

            <div className="flex items-center gap-3 text-slate-600">
              <svg
                className="w-5 h-5 text-teal-600 shrink-0"
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
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-teal-700 hover:underline font-medium text-sm"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7 md:p-9">
            {submitted ? (
              <div className="flex flex-col items-center text-center gap-4 py-8">
                <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-900 font-semibold text-lg">
                  Ihr E-Mail-Programm wird geöffnet.
                </p>
                <p className="text-slate-500 text-sm">
                  Bitte senden Sie die vorausgefüllte E-Mail ab.{" "}
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-teal-600 hover:underline font-medium"
                  >
                    Zurück zum Formular
                  </button>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Name <span className="text-red-500" aria-hidden>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Unternehmen
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Ihr Unternehmen"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    E-Mail <span className="text-red-500" aria-hidden>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ihre@email.de"
                    className={inputClass}
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="topic"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Thema <span className="text-red-500" aria-hidden>*</span>
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    value={form.topic}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {contact.topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Nachricht <span className="text-red-500" aria-hidden>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie kurz Ihre Herausforderung oder Ihr Ziel..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="mb-7">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      name="consent"
                      type="checkbox"
                      required
                      checked={form.consent}
                      onChange={handleChange}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 shrink-0"
                    />
                    <span className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                      {contact.consentText}{" "}
                      <span className="text-red-500" aria-hidden>*</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-lg transition-colors shadow-sm"
                >
                  Anfrage senden
                </button>

                <p className="text-xs text-slate-400 mt-4 text-center">
                  <span className="text-red-500">*</span> Pflichtfelder. Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
