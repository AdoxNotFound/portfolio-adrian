"use client";

import { projects, projectsSection } from "@/data/content";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Projects() {
  const { locale } = useLanguage();
  const items = projects[locale];
  const heading = projectsSection[locale].heading;

  return (
    <section id="proyectos" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{heading}</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {project.client} · {project.period}
            </p>
            <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {project.role}
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link.href}
                className="mt-4 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >
                {project.link.label} →
              </a>
            )}
            {project.note && (
              <p className="mt-4 text-xs italic text-zinc-500 dark:text-zinc-500">{project.note}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
