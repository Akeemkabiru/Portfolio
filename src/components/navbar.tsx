"use client";

import { NAVBAR_ITEMS, SOCIALS } from "@/utils/constant";
import { usePathname, useRouter } from "next/navigation";
import { RiCloseLine } from "react-icons/ri";
import Logo from "./logo";
import { ResumeBtn } from "./button";
import Image from "next/image";
import Link from "next/link";

type NavBarTypes = {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
};

export default function NavBar({ isOpenMenu, setIsOpenMenu }: NavBarTypes) {
  const pathName = usePathname();
  const { push } = useRouter();

  return (
    <div className="flex justify-between items-center bg-white/30 rounded-[20px] backdrop-blur-sm fixed w-[90%]">
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
      <div className="flex gap-8 mt-8 ">
        {SOCIALS.map(({ icon, link }, index: number) => {
          return (
            <Link key={index} href={link} target="_blank">
              <Image alt={icon} width={30} height={30} src={icon} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
