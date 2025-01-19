"use client";

import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";
import { NAVBAR_ITEMS } from "@/utils/constant";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BsGithub, BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { ResumeBtn } from "./button";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathName = usePathname();
  const { push } = useRouter();

  const socialHandles = [
    { icon: <BsLinkedin size={22} />, href: "" },
    { icon: <BsGithub size={22} />, href: "" },
    { icon: <BsWhatsapp size={22} />, href: "" },
    { icon: <BsTwitterX size={22} />, href: "" },
  ];

  const handleMenuSwitch = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <div className="fixed w-full top-4  flex  flex-col gap-4 items-center justify-center">
      <div className="flex justify-between items-center w-[90%] backdrop-blur-sm bg-white/20 md:px-4 md:py-3  px-4 py-2 shadow-md  rounded-[20px] md:rounded-[10px] ">
        <Image src="/logo.png" alt="logo" width={45} height={45} />

        <div className="md:flex hidden lg:gap-8 gap-4 items-center">
          {NAVBAR_ITEMS.map(({ value, route }, index: number) => {
            const isActive = pathName.endsWith(route);

            return (
              <Link
                key={index}
                href={route}
                className={`cursor-pointer font-semibold ${
                  isActive ? "text-primary" : "text-gray-500 "
                }`}
              >
                {value}
              </Link>
            );
          })}
        </div>
        <div className="md:flex gap-4 hidden">
          {socialHandles.map(({ icon, href }, index: number) => {
            return (
              <Link key={index} href={href}>
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

      <div
        className={`w-[90%] bg-white/30 rounded-[20px] backdrop-blur-md shadow-md transform transition-transform duration-500 ease-in-out flex justify-between items-center p-4 ${
          isOpenMenu ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <div className="space-y-4 font-semibold">
          {NAVBAR_ITEMS.map(({ value, route }, index: number) => {
            const isActive = pathName.endsWith(route);

            return (
              <div
                key={index}
                onClick={() => {
                  push(route);
                  setIsOpenMenu(false);
                }}
                className={`cursor-pointer ${isActive ? "text-primary" : ""}`}
              >
                {value}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 items-center gap-8">
          {socialHandles.map(({ icon, href }, index: number) => {
            return (
              <Link key={index} href={href}>
                {icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
