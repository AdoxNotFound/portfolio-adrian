import { profile } from "@/data/profile";

const navItems = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Skills", href: "#skills" },
  { label: "Educación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold text-zinc-900 dark:text-zinc-50">
          {profile.name.split(" ").slice(0, 2).join(" ")}
        </a>
        <ul className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-zinc-950 dark:hover:text-zinc-50">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
