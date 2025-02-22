"use client";

import { EXPERIENCE, PROJECTS } from "@/utils/constant";
import Card from "./project-card";
import Title from "./ui/title";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useView } from "@/context";
import TimelineItem from "./work/timeline";

export default function Work() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <>
      <section className="flex flex-col gap-6 md:gap-10" ref={ref} id="work">
        <Title>Projects</Title>
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

      <div className="mt-10 md:mt-[110px]">
        <Title> Work experience</Title>

        <div className="flex mt-6 gap-4 pl-3">
          <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

          <div className="flex flex-col gap-10">
            {EXPERIENCE.map((item, index) => (
              <TimelineItem
                key={index}
                companyImg={item.companyImg}
                jobTitle={item.jobTitle}
                company={item.company}
                jobType={item.jobType}
                duration={item.duration}
                stuffIDid={item.stuffIDid}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
