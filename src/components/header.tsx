"use client";

import { RiMenu3Line } from "react-icons/ri";
import NavBar from "./navbar";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="flex items-center justify-center">
      {/* mobile */}
      <div className="flex justify-between items-center w-[90%] backdrop-blur-sm bg-white/20  p-4 shadow-md fixed rounded-[20px] top-4">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <RiMenu3Line size={25} onClick={() => setIsOpenMenu(true)} />
      </div>
      {/* mobile nav */}
      <NavBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </header>
  );
}
