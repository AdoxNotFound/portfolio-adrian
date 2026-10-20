"use client";

import { education, educationSection } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Education() {
  const { locale } = useLanguage();
  const items = education[locale];
  const heading = educationSection[locale].heading;

  return (
    <section id="educacion" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{heading}</h2>
      <ul className="mt-8 space-y-6">
        {items.map((item) => (
          <li key={item.title} className="border-l-2 border-indigo-500 pl-4">
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">{item.title}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {item.institution} · {item.period}
            </p>
            {item.link && (
              <a
                href={item.link.href}
                className="mt-1 inline-block text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >
                {item.link.label} →
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
