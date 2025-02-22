import { EXPERIENCE, PROJECTS } from "@/utils/constant";
import Card from "./project-card";
import Image from "next/image";

export default function Work() {
  return (
    <>
      <section id="projects" className="space-y-8 md:space-y-12">
        <p className={`uppercase text-5xl text-white/60  font-bold`}>
          Projects
        </p>
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

      <section className="space-y-8 md:space-y-12">
        <p className={`uppercase text-5xl text-white/60  font-bold`}>
          Work experience
        </p>

        <div className="space-y-8 flex-1">
          {EXPERIENCE.map(
            (
              { logo, companyName, role, date, experience, type },
              index: number
            ) => (
              <div key={index} className="flex gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`${companyName}-logo`}
                    width={60}
                    height={60}
                    className="rounded-2xl"
                  />
                </div>

                {/* Experience Details */}
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-[2rem] font-bold text-white/90">
                    {role}
                  </h2>
                  <h3 className="text-base sm:text-lg font-semibold text-white/80 my-2">
                    {companyName} -{" "}
                    <span className="text-white/60">{type}</span>
                  </h3>
                  <p className="text-base sm:text-lg text-white/60 my-2">
                    {date}
                  </p>

                  {/* Experience Bullet Points */}
                  <ul className="space-y-3 list-disc pl-5">
                    {experience.map((text: string, index: number) => (
                      <li
                        key={index}
                        className="text-base sm:text-lg text-white/80 leading-relaxed"
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
