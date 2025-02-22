"use client";

import { NAVBAR_ITEMS } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* mobile navbar */}
      <nav className="fixed w-full p-4 ">
        <div className="flex items-center justify-between bg-white/20 backdrop-blur-lg p-4 rounded-2xl">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          {isOpen ? (
            <FiX className="cursor-pointer" onClick={toggleMenu} size={24} />
          ) : (
            <FiMenu className="cursor-pointer" onClick={toggleMenu} size={24} />
          )}
        </div>

        {/* drop down */}

        <div
          className={`bg-white/20 backdrop-blur-lg px-4 py-3  mt-4 rounded-2xl transition-all duration-300 ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          {/* navigations  list*/}
          <div className="flex flex-col gap-4">
            {NAVBAR_ITEMS.map(({ title, id }) => {
              return (
                <Link href={id} key={id}>
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
