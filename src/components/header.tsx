"use client";

import { RiMenu3Line } from "react-icons/ri";
import Logo from "./logo";
import NavBar from "./navbar";
import { useState } from "react";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header>
      {/* mobile */}
      <div className="flex justify-between items-center w-full bg-background px-8 py-4 shadow-md shadow-gray-900 fixed top-0">
        <Logo />
        <RiMenu3Line size={25} onClick={() => setIsOpenMenu(true)} />
      </div>
      {/* mobile nav */}
      <NavBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </header>
  );
}
