import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
