"use client";

import { profile } from "@/data/profile";
import { nav, languageToggle } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Header() {
  const { locale, toggleLocale } = useLanguage();
  const items = nav[locale];
  const toggle = languageToggle[locale];

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold text-zinc-900 dark:text-zinc-50">
          {profile.name.split(" ").slice(0, 2).join(" ")}
        </a>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-zinc-950 dark:hover:text-zinc-50">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggleLocale}
            title={toggle.title}
            className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            {toggle.label}
          </button>
        </div>
      </nav>
    </header>
  );
}
