"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { hero } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

const socialLinks = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Kaggle", href: profile.links.kaggle },
  { label: "Tableau Public", href: profile.links.tableau },
];

export default function Hero() {
  const { locale } = useLanguage();
  const t = hero[locale];

  return (
    <section id="top" className="mx-auto max-w-4xl px-6 py-20">
      <Image
        src="/adrian.jpg"
        alt={profile.name}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-800"
      />
      <p className="mt-6 text-sm font-medium text-indigo-600 dark:text-indigo-400">{t.location}</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{t.role}</p>
      <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
        {t.pitch}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#proyectos"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          {t.viewProjects}
        </a>
        <a
          href="#contacto"
          className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          {t.contact}
        </a>
      </div>
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-500">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-zinc-900 dark:hover:text-zinc-200">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
