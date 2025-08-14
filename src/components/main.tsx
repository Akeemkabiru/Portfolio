"use client";

import { EXPERIENCE, NAVBAR_ITEMS, PROJECTS } from "@/utils/constant";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useView } from "@/context";
import AnimatedBody from "@/components/ui/animatedBody";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Title from "@/components/ui/title";
import Card from "@/components/project-card";
import TimelineItem from "@/components/work/timeline";
import AnimatedTitle from "@/components/ui/animatedTitle";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [viewCount, setViewCount] = useState<number>(0);
  const [hasBeenInView, setHasBeenInView] = useState<boolean>(false);
  const [isNavFixed, setIsNavFixed] = useState<boolean>(false);

  const { setSectionInView } = useView();
  const curYear = new Date().getFullYear();

  const heroRef = useRef<HTMLElement | null>(null);

  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const imageAnimation = {
    opacity: [0, 1],
    scale: [0.8, 1],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) {
      setSectionInView("home");
      setViewCount((prev) => prev + 1);
      setHasBeenInView(true);
    }
  }, [inView, setSectionInView]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setIsNavFixed(heroBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="home" className="lg:px-16 md:px-12 px-6 scroll-smooth">
      {/* Navbar */}
      <div className="flex items-center justify-center">
        <nav
          className={`${
            isNavFixed ? "fixed top-0 transform" : "relative"
          } flex items-center justify-center z-[100]  mx-auto px-6 py-4 md:gap-x-8 gap-x-4 bg-clip-padding backdrop-filter bg-opacity-30 bg-gray-400 rounded-b-3xl transition-all duration-900 ease-in-out backdrop-blur`}
        >
          {NAVBAR_ITEMS.map(({ title, id, href }) => (
            <div key={id} className="group inline-block">
              <Link
                href={href || id}
                target={href ? "_blank" : "_self"}
                className="hover:text-slate-500 focus:text-slate-500 relative transition-colors duration-300"
              >
                {title}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </nav>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex flex-col sm:flex-row lg:h-dvh items-center gap-6 sm:justify-between mb-8 pt-12"
      >
        <div>
          <motion.div animate={imageAnimation}>
            <Image
              src="/kabby.jpeg"
              width={100}
              height={100}
              alt="kabby"
              className="rounded-2xl shadow-lg mb-6 border-2 p-1 border-[#548FBA] md:hidden"
              quality={100}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-9 w-fit smm:flex gap-2 mb-2 xl:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <p className="text-white/60 text-xl smm:text-2xl mb-3 smm:mb-0 lg:text-3xl col-span-6">
              Hey, there
            </p>
            <motion.div
              animate={handWaveAnimation}
              style={{ transformOrigin: "bottom right" }}
              className="col-span-3"
            >
              <Image
                src="/hand-wave.svg"
                width={40}
                height={40}
                alt="hand-waving"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
          >
            <p className="text-white/60 inline">I&apos;m </p>
            <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
              Kabiru Akeem
            </span>
            <p>a Software Engineer</p>
          </motion.h1>

          <AnimatedTitle
            wordSpace={"mr-[12px]"}
            charSpace={"mr-[0.001em]"}
            className={`text-white/40 text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6 md:w-[65%] font-medium opacity-80`}
          >
            Specialize in building intuitive, high-performance web and mobile
            applications.
          </AnimatedTitle>
        </div>

        <motion.div
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="md:flex items-center justify-center hidden border p-2 rounded-2xl border-[#548FBA]"
        >
          <Image
            src="/kabby.jpeg"
            width={500}
            height={500}
            alt="kabby"
            className="w-[500px] rounded-2xl shadow-lg"
            quality={100}
            priority
          />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col gap-6 md:gap-10 mb-16" id="projects">
        <Title>Projects</Title>
        <div className="grid lg:grid-cols-3 md:gap-8 gap-6 md:px-16 2xl:px-0">
          {PROJECTS.map(
            (
              { picture, title, description, stacks, gitLink, link },
              index: number
            ) => (
              <Card
                key={index}
                picture={picture}
                title={title}
                description={description}
                stacks={stacks}
                gitLink={gitLink}
                link={link}
              />
            )
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiences" className="mb-16">
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
      </section>

      {/* About Section */}
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
              I&apos;m a Software Engineer with years of experience, passionate
              about building robust, scalable, and user-friendly applications.
            </AnimatedBody>
            <AnimatedBody className="leading-[34px] md:leading-[39px]">
              From designing dynamic websites to developing efficient tools that
              automate processes, I focus on delivering clean, high-performance
              code that addresses real-world business needs.
            </AnimatedBody>
            <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
              My goal is to craft solutions that reflect your vision, resonate
              with users, and drive measurable impact.
            </AnimatedBody>

            <Link
              href="/kabiruakeem-cv.pdf"
              className={`text-base ml-auto mt-6 lg:mt-0 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 rounded-xl border-2 border-white h-fit text-white uppercase leading-none w-fit ${
                viewCount <= 1 && "duration-500 delay-[1500ms]"
              } ${
                hasBeenInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              data-blobity-radius="12"
            >
              View resume
            </Link>
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
                Typescript, Javascript, Reactjs, Nextjs, Redux, RTK, React
                Query, HTML5, Zustand, Git & Github, Formik, React Hook Form
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
                CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Chakra UI,
                Framer Motion, Bootstrap, ReCharts, Material UI.
              </AnimatedBody>
            </div>
            <div>
              <AnimatedTitle
                wordSpace={"mr-[0.5ch]"}
                charSpace={"mr-[0.001em]"}
                className="font-bold antialiased text-xl md:text-2xl mb-2"
              >
                Backend Tools
              </AnimatedTitle>
              <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
                Node.js, Express.js, Golang, MongoDB, Mongoose, RESTful APIs,
                JWT & OAuth2, Bcrypt, Redis, WebSockets, CI/CD
              </AnimatedBody>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={ref}
        id="contact"
        className={`overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]`}
      >
        <div
          className={` ${syne.className} flex justify-between items-center w-full duration-1000 `}
        >
          <AnimatedTitle
            wordSpace={"mr-2 md:mr-[12px]"}
            charSpace={"mr-[0.001em]"}
            className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold"
          >
            GOT A PROJECT IN MIND?
          </AnimatedTitle>

          <Link
            href="mailto:kabbydev@gmail.com"
            className={`text-base ml-auto mt-6 lg:mt-0 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 rounded-xl border-2 border-white leading-none ${
              viewCount <= 1 && "duration-500 delay-[1500ms]"
            } ${
              hasBeenInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
            data-blobity-radius="12"
          >
            CONTACT&nbsp;ME
          </Link>
        </div>
      </section>

      {/* Footer */}
      <section
        id="footer"
        className="my-6 sm:my-8 text-sm sm:text-base lg:text-lg flex md:justify-between justify-center"
      >
        <p>
          <span className="text-xl sm:text-2xl">&copy;</span> {curYear} . KABIRU
          AKEEM . ALL RIGHTS RESERVED
        </p>
        <Link
          className="md:flex hidden items-center gap-1 leading-tight animate-bounce"
          href="#home"
          data-blobity-offset-x="2"
          data-blobity-offset-y="0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white hover:text-[#7CC0C4] transition duration-300"
          >
            <path d="M18 15l-6-6-6 6" />
            <path d="M18 11l-6-6-6 6" />
            <path d="M18 7l-6-6-6 6" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
