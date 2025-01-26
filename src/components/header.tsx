"use client";

import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";
import { NAVBAR_ITEMS } from "@/utils/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineX } from "react-icons/ai";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { push } = useRouter();

  const socialHandles = [
    {
      icon: <AiOutlineLinkedin size={25} />,
      href: "https://www.linkedin.com/in/akeemkabiru/",
    },
    {
      icon: <AiOutlineGithub size={25} />,
      href: "https://github.com/Akeemkabiru",
    },
    { icon: <AiOutlineX size={23} />, href: "https://x.com/kabby_10" },
  ];

  const handleMenuSwitch = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <div className="fixed w-full top-4 md:top-6 z-10 px-6 md:px-12 lg:px-16 flex  flex-col gap-4 items-center justify-center">
      {/* desktop menu */}
      <div className="flex justify-between w-full items-center px-6 py-4 rounded-2xl bg-gradient-to-r from-[#d9d9d91f]  to-[#7373731f] backdrop-blur-md std-backdrop-blur">
        <Image src="/logo.png" alt="logo" width={45} height={45} />

        <div className="md:flex hidden lg:gap-8 gap-4 items-center">
          {NAVBAR_ITEMS.map(({ title, id }, index: number) => {
            return (
              <Link key={index} href={id}>
                {title}
              </Link>
            );
          })}
        </div>
        <div className="md:flex gap-4 hidden">
          {socialHandles.map(({ icon, href }, index: number) => {
            return (
              <Link key={index} href={href} target="_blank">
                {icon}
              </Link>
            );
          })}
        </div>

        <div className="md:hidden block">
          {isOpenMenu ? (
            <RiCloseFill size={25} onClick={handleMenuSwitch} />
          ) : (
            <RiMenu3Line size={25} onClick={handleMenuSwitch} />
          )}
        </div>
      </div>

      {/* mobile  menu*/}
      <div
        className={`w-full rounded-2xl bg-gradient-to-r from-[#d9d9d91f]  to-[#7373731f] backdrop-blur-md shadow-md transform transition-transform duration-500 ease-in-out flex justify-between std-backdrop-blur items-center p-3 ${
          isOpenMenu ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <div className="space-y-4 font-semibold">
          {NAVBAR_ITEMS.map(({ title, id }, index: number) => {
            return (
              <div
                key={index}
                onClick={() => {
                  push(id);
                  setIsOpenMenu(false);
                }}
              >
                {title}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 items-center gap-8">
          {socialHandles.map(({ icon, href }, index: number) => {
            return (
              <Link key={index} href={href} target="_blank">
                {icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
