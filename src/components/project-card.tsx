"use client";

import Image from "next/image";

import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { BsGithub, BsLink } from "react-icons/bs";

export interface ICard {
  picture: string;
  title: string;
  description: string;
  stacks: string[];
  link: string;
  gitLink?: string;
}

export default function Card({
  picture,
  title,
  description,
  stacks,
  link,
  gitLink,
}: ICard) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`w-full rounded-2xl std-backdrop-blur bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] grid grid-cols-1 items-start lg:grid-cols-12 xl:flex gap-5 xl:gap-10 p-3 duration-700 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <Image
        src={picture}
        alt="img"
        width={500}
        height={700}
        className="rounded-2xl w-full lg:w-fit"
      />
      <div className="space-y-6">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
          <div className="flex items-center gap-4">
            <Link href={link}>
              <BsLink size={20} />
            </Link>

            {gitLink && (
              <Link href={gitLink}>
                <BsGithub size={20} />
              </Link>
            )}
          </div>
        </div>
        <p>{description}</p>
        <div className="flex gap-3 md:gap-4 flex-wrap ">
          {stacks.map((stack, index: number) => (
            <div
              className="uppercase whitespace-nowrap bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] px-2 py-[6px] md:py-[6px] md:px-3 rounded-[4px] font-medium md:font-bold text-base"
              key={index}
            >
              {stack}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
