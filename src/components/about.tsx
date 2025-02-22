"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useInView } from "react-intersection-observer";
import { useView } from "@/context";
import AnimatedBody from "./ui/animatedBody";
import AnimatedTitle from "./ui/animatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I amplify brand voices through the web
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I&apos;m a Software Engineer with 3+ years of experience, passionate
            about building robust, scalable, and user-friendly applications. I
            specialize in modern frameworks like React.js, Next.js, and Golang
            to create solutions that empower businesses to grow and thrive.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            From designing dynamic websites to developing efficient tools that
            automate processes, I focus on delivering clean, high-performance
            code that addresses real-world business needs. I thrive on
            collaboration, innovation, and solving unique challenges to create
            software that exceeds expectations.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            My goal is to craft solutions that reflect your vision, resonate
            with users, and drive measurable impact—helping businesses evolve
            from where they are today to their ultimate goals and beyond. Wanna
            learn more? Here&apos;s <br className="hidden md:block" />
            <Link className="underline" href={"https://akeemkabiru.tiiny.site"}>
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Typescript, Javascript Reactjs, Nextjs, Redux, RTK, React Query,
              HTML5, Zustand, Golang, Git & Github, Formik, React Form Hook
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Chakra UI, Framer
              Motion, Bootstrap, ReCharts.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
