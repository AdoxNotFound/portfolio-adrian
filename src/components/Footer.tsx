import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
      © 2026 {profile.name}
    </footer>
  );
}
