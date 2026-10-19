import { education } from "@/data/profile";

export default function Education() {
  return (
    <section id="educacion" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Educación</h2>
      <ul className="mt-8 space-y-6">
        {education.map((item) => (
          <li key={item.title} className="border-l-2 border-indigo-500 pl-4">
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">{item.title}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {item.institution} · {item.period}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
