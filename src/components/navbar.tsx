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
    <main className="w-full">
      {/* mobile */}
      <div
        className={`bg-background absolute h-[100vh] z-10 top-0 right-0 left-0 ${
          isOpenMenu ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center w-full bg-background px-8 py-4">
          <Logo />
          <RiCloseLine size={25} onClick={() => setIsOpenMenu(false)} />
        </div>
        <div className="flex flex-col justify-center items-center gap-8 pt-8">
          <div className="text-center space-y-8 font-medium">
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
          <ResumeBtn />
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
      </div>
    </main>
  );
}

//  {
//    /* mobile nav */
//  }
//  <div className="flex items-center justify-between lg:px-16 px-8 py-4 bg-black">
//    <h2 className="text-2xl border font-bold rounded-md px-2">K</h2>
//    <RiMenu3Line size={25} onClick={() => handleMenuSwitch()} />
//  </div>;

//  {
//    /* desktop nav */
//  }
//  <div>
//    <nav className="md:flex hidden lg:gap-x-8 bg-white/30 rounded-lg shadow-2xl backdrop-blur-[16.4px] border border-white/30 py-4 px-8">
//      <h2 className="text-2xl border font-bold rounded-md px-2">K</h2>
//      {NAVBAR_ITEMS.map(({ value, route }, index: number) => {
//        const isActive = pathName.endsWith(route);

//        return (
//          <h3
//            key={index}
//            onClick={() => push(route)}
//            className={`cursor-pointer font-medium hover:text-primary text-sm transition-all duration-500 ${
//              isActive ? "text-primary " : ""
//            }`}
//          >
//            {value}
//          </h3>
//        );
//      })}
//      <button className="bg-gradient-to-r text-sm from-cyan-500 to-teal-500 bg-cyan-500 px-4 py-2 rounded-md hidden md:block">
//        Download CV
//      </button>
//    </nav>
//  </div>;
