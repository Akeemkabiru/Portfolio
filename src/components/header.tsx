"use client";

import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";
import { NAVBAR_ITEMS } from "@/utils/constant";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BsGithub, BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathName = usePathname();
  const { push } = useRouter();

  const socialHandles = [
    { icon: <BsLinkedin size={25} />, href: "" },
    { icon: <BsGithub size={25} />, href: "" },
    { icon: <BsWhatsapp size={25} />, href: "" },
    { icon: <BsTwitterX size={25} />, href: "" },
  ];

  const handleMenuSwitch = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <div className="fixed w-full top-4  flex  flex-col gap-4 items-center justify-center">
      <div className="flex justify-between items-center w-[90%] backdrop-blur-sm bg-white/20  px-4 py-2 shadow-md  rounded-[20px] ">
        <Image src="/logo.png" alt="logo" width={45} height={45} />

        {isOpenMenu ? (
          <RiCloseFill size={25} onClick={handleMenuSwitch} />
        ) : (
          <RiMenu3Line size={25} onClick={handleMenuSwitch} />
        )}
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
          {socialHandles.map(({ icon, href }) => {
            return <Link href={href}>{icon}</Link>;
          })}
        </div>
      </div>
    </div>
  );
}
