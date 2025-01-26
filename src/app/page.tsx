import Copyright from "@/components/copy";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/project";

export default function Home() {
  return (
    <main className="px-6 md:px-12 lg:px-16 lg:pt-0 pt-12 md:pt-24">
      <Hero />
      <Projects />
      <Experience />
      <Copyright />
    </main>
  );
}
