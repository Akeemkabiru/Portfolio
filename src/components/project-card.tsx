import Image from "next/image";

import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { BsGithub, BsLink } from "react-icons/bs";

export default function Card({
  picture,
  title,
  description,
  stacks,
  link,
  gitLink,
}: {
  picture: string;
  title: string;
  description: string;
  stacks: string[];
  link: string;
  gitLink: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`w-full rounded-[20px] std-backdrop-blur bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] grid grid-cols-1 items-start lg:grid-cols-12 xl:flex gap-5 xl:gap-10 p-6 duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <Image src={picture} alt="img" width={500} height={300} />
      <div>
        <div>
          <h2>{title}</h2>
          <Link href={link}>
            <BsLink />
          </Link>

          <Link href={gitLink}>
            <BsGithub size={32} />
          </Link>
        </div>
        <p>{description}</p>
        <div>
          {stacks.map((stack, index: number) => (
            <div key={index}>{stack}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
