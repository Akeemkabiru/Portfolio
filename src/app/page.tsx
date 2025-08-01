"use client";

import { EXPERIENCE, NAVBAR_ITEMS, PROJECTS } from "@/utils/constant";
import Image from "next/image";
import { motion, easeInOut, AnimatePresence } from "framer-motion";
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
import { useForm } from "react-hook-form";

const syne = Syne({ subsets: ["latin"] });

export default function Home() {
  const [formDisplay, setFormDisplay] = useState<boolean>(false);
  const [viewCount, setViewCount] = useState<number>(0);
  const formRef = useRef<HTMLFormElement>(null);
  const { formState, register } = useForm();
  const { errors } = formState;
  const { setSectionInView } = useView();
  const curYear = new Date().getFullYear();

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
    }
  }, [inView, setSectionInView]);

  return (
    <main className="lg:px-16 md:px-8 px-4 py-8">
      <nav className="flex items-center justify-center w-full px-4 mb-16 md:mb-0">
        <div className="flex items-center gap-x-6 bg-white/20 py-4 px-8 rounded-2xl backdrop-blur-lg fixed z-[100] top-6">
          {NAVBAR_ITEMS.map(({ title, id }) => (
            <Link
              href={id}
              key={id}
              className="hover:underline-offset-1 hover:underline font-medium underline:text-red-500"
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>

      {/* hero */}
      <section
        className="flex flex-col sm:flex-row lg:h-dvh items-center gap-6 sm:justify-between mb-8 pt-12"
        id="home"
        ref={ref}
      >
        <div>
          <motion.div animate={imageAnimation}>
            <Image
              src="/kabby.jpeg"
              width={100}
              height={100}
              alt="kabby"
              className="rounded-lg shadow-lg mb-6 border-2 border-[#548FBA] md:hidden"
              quality={100}
              priority
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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: easeInOut }}
            className="text-white/40 text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6 md:w-[65%]"
          >
            Specialize in building intuitive, high-performance web and mobile
            applications.
          </motion.p>
        </div>

        <motion.div
          className="md:flex items-center justify-center hidden"
          animate={imageAnimation}
        >
          <Image
            src="/kabby.jpeg"
            width={500}
            height={500}
            alt="kabby"
            className="w-[500px] rounded-lg shadow-lg"
            quality={100}
            priority
          />
        </motion.div>
      </section>

      <section
        className="flex flex-col gap-6 md:gap-10 mb-16"
        ref={ref}
        id="work"
      >
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

      <section className="mb-16">
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
              from where they are today to their ultimate goals and beyond.
              Wanna learn more? Here&apos;s <br className="hidden md:block" />
              <Link className="underline" href="/resume.pdf" download={true}>
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
                CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Chakra UI,
                Framer Motion, Bootstrap, ReCharts.
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
                Node.js, Express.js, MongoDB, Mongoose, RESTful APIs, JWT &
                OAuth2, Bcrypt, TypeScript, Golang, Redis, WebSockets, CI/CD,
              </AnimatedBody>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ref}
        id="contact"
        style={{
          transform: `${
            formDisplay
              ? "perspective(300px) rotateY(-180deg)"
              : "perspective(300px) rotateY(-360deg)"
          }`,
        }}
        className={`overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]`}
      >
        {!formDisplay ? (
          <div
            className={` ${
              syne.className
            } flex justify-between items-center w-full duration-1000 ${
              formDisplay && "opacity-0"
            }`}
          >
            <div className="inline w-full">
              <AnimatedTitle
                wordSpace={"mr-2 md:mr-[12px]"}
                charSpace={"mr-[0.001em]"}
                className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold"
              >
                GOT A PROJECT IN MIND?
              </AnimatedTitle>
              <Link href="#footer" data-no-blobity>
                <span
                  data-blobity
                  onClick={() => {
                    setFormDisplay(!formDisplay);
                  }}
                  className="sm:mt-0 text-xl sm:text-2xl md:text-[32px] w-fit underline lg:text-[40px] font-bold leading-tight hidden sm:block lg:hidden"
                >
                  CONTACT ME
                </span>
              </Link>
            </div>
            <Link href="#footer">
              <button
                className={`text-base ml-auto mt-6 lg:mt-0 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 rounded-xl border-2 border-white leading-none ${
                  viewCount <= 1 && "duration-500 delay-[1500ms]"
                } ${
                  inView
                    ? " opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                data-blobity-radius="12"
                onClick={() => {
                  setFormDisplay(!formDisplay);
                }}
              >
                CONTACT&nbsp;ME
              </button>
            </Link>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              exit={{ opacity: 0 }}
              style={{
                transform: `${
                  formDisplay
                    ? "perspective(300px) rotateY(-180deg)"
                    : "perspective(300px) rotateY(0deg)"
                }`,
              }}
              className="w-full"
            >
              <div className="flex items-center h-full gap-2 w-full">
                <form
                  ref={formRef}
                  className={`back w-full flex flex-col gap-3 grow-[2] basis-0`}
                >
                  <div className="flex gap-1 flex-col">
                    <label
                      htmlFor="userName"
                      className="opacity-70 text-sm lg:text-base "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="userName"
                      {...register("userName", {
                        required: "I need to know your name",
                        pattern: {
                          value: /^[a-zA-Z][a-zA-Z0-9]{2,}/,
                          message: "Please enter a valid name.",
                        },
                      })}
                      className="bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-none py-1 pl-2"
                    />
                    {errors?.userName && (
                      <span className="text-red-400 text-xs">
                        {errors?.userName?.message as string}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1 flex-col">
                    <label
                      htmlFor="userEmail"
                      className="opacity-70 text-sm lg:text-base "
                    >
                      Email
                    </label>
                    <input
                      id="userEmail"
                      type="email"
                      {...register("userEmail", {
                        required: "Enter a correct email address",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please provide a valid email address",
                        },
                      })}
                      className="bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-none py-1 pl-2"
                    />
                    {errors?.userEmail && (
                      <span className="text-red-400 text-xs">
                        {errors?.userEmail?.message as string}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1 flex-col">
                    <label
                      htmlFor="userMessage"
                      className="opacity-70 text-sm lg:text-base"
                    >
                      Message
                    </label>
                    <textarea
                      id="userMessage"
                      {...register("userMessage", {
                        required: "I'll appreciate what you have to say.",
                      })}
                      rows={4}
                      cols={50}
                      className="bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-none py-1 pl-2"
                    />
                    {errors?.userMessage && (
                      <span className="text-red-400 text-xs">
                        {errors?.userMessage?.message as string}
                      </span>
                    )}
                  </div>
                  <button
                    className={`rounded-md bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] py-3 px-5 ${syne.className} font-bold uppercase mt-4`}
                  >
                    Send
                  </button>
                </form>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </section>

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

          {/* <p className="underline leading-tight">SCROLL TO TOP</p> */}
        </Link>
      </section>
      <section className="px-4 md:px-10 lg:px-16 pt-32 lg:pt-16 space-y-16"></section>
    </main>
  );
}
