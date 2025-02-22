"use client";

import { NAVBAR_ITEMS } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

export default function NavBar() {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

  const toggleMenu = () => setIsOpenNav((prev) => !prev);

  return (
    <>
      {/* mobile navbar */}
      <nav className="fixed w-full p-4">
        <div className="flex items-center justify-between bg-white/10 px-4 py-2 rounded-2xl">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          {isOpenNav ? (
            <FiX onClick={toggleMenu} size={20} />
          ) : (
            <FiMenu onClick={toggleMenu} size={20} />
          )}
        </div>

        {/* drop down */}

        {isOpenNav ? (
          <div className="bg-white/10 px-4 py-2  mt-4 rounded-2xl">
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
        ) : null}
      </nav>
    </>
  );
}
