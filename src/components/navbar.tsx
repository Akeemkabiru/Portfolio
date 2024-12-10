"use client";

import { NAVBAR_ITEMS } from "@/utils/constant";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

export default function NavBar() {
  const pathName = usePathname();
  const { push } = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleMenuSwitch() {
    setIsOpenMenu((prev) => !prev);
  }

  return (
    <main className="w-full flex items-center justify-between lg:px-16 px-8 py-4 fixed">
      <h2 className="lg:text-3xl text-xl border font-bold rounded-md px-2">
        K
      </h2>

      {/* desktop and tablet */}
      <nav className="md:flex hidden lg:gap-x-8 bg-white/30 rounded-lg shadow-2xl backdrop-blur-[16.4px] border border-white/30 py-4 px-8">
        {NAVBAR_ITEMS.map(({ value, route }, index: number) => {
          const isActive = pathName.endsWith(route);

          return (
            <h3
              key={index}
              onClick={() => push(route)}
              className={`cursor-pointer font-medium hover:text-primary text-sm transition-all duration-500 ${
                isActive ? "text-primary " : ""
              }`}
            >
              {value}
            </h3>
          );
        })}
      </nav>

      {/* mobile */}

      <nav
        className={`${
          isOpenMenu ? "absolute" : "hidden"
        } left-0 bg-black right-0 h-[100vh] top-0 transition-all duration-300`}
      >
        <div className="flex justify-between items-center px-8 py-4">
          <h2 className="text-2xl border font-bold rounded-md px-2">K</h2>
          <RiCloseLine size={25} onClick={handleMenuSwitch} />
        </div>
        <section className="text-center space-y-12 pt-20">
          {NAVBAR_ITEMS.map(({ value, route }, index: number) => {
            const isActive = pathName.endsWith(route);

            return (
              <h3
                key={index}
                onClick={() => {
                  push(route);
                  setIsOpenMenu(false);
                }}
                className={`cursor-pointer font-medium hover:text-primary text-sm transition-all duration-500 ${
                  isActive ? "text-primary " : ""
                }`}
              >
                {value}
              </h3>
            );
          })}
        </section>
      </nav>
      <button className="bg-gradient-to-r text-sm from-cyan-500 to-teal-500 bg-cyan-500 px-4 py-2 rounded-md hidden md:block">
        Download CV
      </button>
      <div className="md:hidden">
        <RiMenu3Line size={25} onClick={handleMenuSwitch} />
      </div>
    </main>
  );
}
