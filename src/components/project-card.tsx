"use client";

import Image from "next/image";

import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { IconType } from "react-icons";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

export interface ICard {
  picture: string;
  title: string;
  description: string;
  stacks: Array<{ icon: IconType; name: string }>;
  link: string;
  gitLink?: string;
}

export default function Card({
  picture,
  title,
  description,
  stacks,
  gitLink,
  link,
}: ICard) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`w-fit h-fit md:h-full rounded-2xl std-backdrop-blur bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] flex flex-col  p-5 duration-700 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <Image
        src={picture}
        alt="img"
        width={700}
        height={700}
        className="w-full md:h-[180px] h-[150px] rounded-2xl"
      />
      <div className="space-y-5 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between w-full mt-6 mb-4">
            <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
            <div className="flex items-center gap-x-4">
              {gitLink && (
                <Link href={gitLink}>
                  <SiGithub size={18} />
                </Link>
              )}
              <Link href={link}>
                <HiOutlineExternalLink size={18} />
              </Link>
            </div>
          </div>
          <p>{description}</p>
        </div>
        <div className="flex gap-3 md:gap-4 flex-wrap justify-between items-center  ">
          {stacks.map(({ name, icon }, i: number) => {
            const Icon = icon;

            return (
              <div
                className="uppercase whitespace-nowrap bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] px-2 py-[6px] md:py-[6px] md:px-3 rounded-[4px] font-medium md:font-bold text-base"
                key={name}
              >
                <Icon key={i} title={name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
