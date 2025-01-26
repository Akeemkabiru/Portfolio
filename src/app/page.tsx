import Card from "@/components/project-card";
import { ABOUT, EXPERIENCE, PROJECTS } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaList } from "react-icons/fa6";

export default function Home() {
  const curYear = new Date().getFullYear();

  return (
    <>
      {/* hero section */}
      <section className="w-full lg:h-[100vh] h-[100vh] md:h-fit flex justify-center items-center">
        <div className="flex md:flex-row flex-col justify-between gap-6">
          <div className="lg:space-y-8 space-y-4 lg:w-[60%] w-full">
            <div className="flex gap-2 items-center">
              <p className="text-white/60 text-xl lg:text-3xl"> Hey, there </p>
              <Image src="/hand-wave.svg" alt="hand" width={30} height={30} />
            </div>

            <h1 className="text-[32px]  md:text-5xl lg:text-6xl font-bold">
              <div className="mb-3">
                <p className="text-white/60 inline">I&apos;m </p>
                <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
                  Kabiru Akeem
                </span>
              </div>
              <p>a Software Engineer</p>
            </h1>

            <p className="text-white/40 text-xl lg:text-3xl ">
              Specialize in building intuitive, high-performance web and mobile
              applications with modern frameworks.
            </p>
          </div>
          <Image
            src="/kabby.jpeg"
            alt="my-img"
            width={350}
            height={350}
            className="rounded-2xl w-full md:w-fit"
          />
        </div>
      </section>

      {/* work exprience and projects */}
      <section id="projects" className="pt-28 space-y-8 md:space-y-12">
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

      {/* experience */}

      <section id="experience" className="mt-20">
        <p className={`uppercase text-4xl lg:text-5xl font-bold`}>
          Work experience
        </p>

        <div className="flex mt-6 gap-4 pl-3">
          <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />
          <div className="space-y-8">
            {EXPERIENCE.map(
              (
                { logo, companyName, role, date, experience, type },
                index: number
              ) => {
                return (
                  <div key={index} className="flex gap-2">
                    <Image
                      src={logo}
                      alt={`${companyName}-logo`}
                      width={80}
                      height={80}
                      className="rounded-2xl h-fit"
                    />
                    <div>
                      <h2 className="text-2xl sm:text-[2rem] font-bold">
                        {role}
                      </h2>
                      <h3 className="text-base sm:text-lg font-bold my-2 sm:my-3">
                        {companyName} - {type}
                      </h3>
                      <p className="text-base sm:text-lg text-white/60 my-3">
                        {date}
                      </p>

                      <ul className="space-y-4">
                        {experience.map((text: string, index: number) => {
                          return (
                            <li key={index} className="flex gap-1">
                              <AiOutlineArrowRight size={20} /> {text}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* about me*/}

      <section id="about" className="mt-20 space-y-8 ">
        <p
          className={`uppercase text-4xl lg:text-5xl font-bold w-[70%] leading-[72px]`}
        >
          Building Scalable Software and Intuitive Interfaces
        </p>
        <div className="space-y-8">
          {ABOUT.map(({ text, secondText }, index: number) => {
            return (
              <div key={index} className="flex  justify-between w-full">
                <div className="w-[60%]">{text}</div>
                {secondText && (
                  <div className="w-[30%]">{secondText.join(", ")}</div>
                )}
              </div>
            );
          })}
        </div>
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
          className="md:flex hidden items-center gap-1 leading-tight"
          href="#home"
          data-blobity-offset-x="2"
          data-blobity-offset-y="0"
        >
          <p className="underline leading-tight">SCROLL TO TOP</p>
        </Link>
      </section>
    </>
  );
}
