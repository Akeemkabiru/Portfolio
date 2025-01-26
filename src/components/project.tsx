import { PROJECTS } from "@/utils/constant";
import Card from "./project-card";

export default function Projects() {
  return (
    <section id="projects" className="space-y-8 md:space-y-12 pt-32">
      <p className={`uppercase text-4xl lg:text-5xl font-bold`}>Projects</p>
      {PROJECTS.map(
        (
          { picture, title, description, stacks, link, gitLink },
          index: number
        ) => {
          return (
            <Card
              key={index}
              picture={picture}
              title={title}
              description={description}
              stacks={stacks}
              link={link}
              gitLink={gitLink}
            />
          );
        }
      )}
    </section>
  );
}
