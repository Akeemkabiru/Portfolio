"use client";

import { NAVBAR_ITEMS } from "@/utils/constant";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

export default function SideBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function handleMenuSwitch() {
    setIsOpenMenu((prev) => !prev);
  }
  const pathName = usePathname();
  const { push } = useRouter();

  return (
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
  );
}
