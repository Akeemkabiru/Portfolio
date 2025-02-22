import About from "@/components/about";
import Copyright from "@/components/copy";
import Experience from "@/components/experience";
import NavBar from "@/components/header";
import Hero from "@/components/hero";

import Projects from "@/components/project";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="px-4 pt-32 space-y-8">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Copyright />
      </section>
    </main>
  );
}
