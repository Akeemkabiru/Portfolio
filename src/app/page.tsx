import About from "@/components/about";
import Contact from "@/components/contact";
import Copyright from "@/components/copy";

import NavBar from "@/components/header";
import Hero from "@/components/hero";
import Work from "@/components/project";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="px-4 md:px-10 lg:px-16 pt-32 lg:pt-16 space-y-16">
        <Hero />
        <Work />
        <About />
        <Contact />
        <Copyright />
      </section>
    </main>
  );
}
