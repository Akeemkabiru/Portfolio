import About from "@/components/about";
import Copyright from "@/components/copy";

import NavBar from "@/components/header";
import Hero from "@/components/hero";
import Work from "@/components/project";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="px-4 pt-28 space-y-16">
        <Hero />
        <Work />
        <About />
        <Copyright />
      </section>
    </main>
  );
}
