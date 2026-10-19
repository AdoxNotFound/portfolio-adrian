import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Contacto</h2>
      <p className="mt-4 max-w-xl text-zinc-700 dark:text-zinc-300">
        ¿Tenés un proyecto o una oportunidad remota, de consultoría o freelance? Escribime.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        {profile.email}
      </a>
    </section>
  );
}
