"use client";

import { SIDENAV_ITEMS } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function SideNav({ children }: { children: React.ReactNode }) {
  const { back, forward } = useRouter();
  const pathName = usePathname();

  return (
    <section className="flex w-full justify-between px-2 pt-20">
      <div className="flex flex-col gap-4">
        {SIDENAV_ITEMS.map(({ link, icon }, index: number) => {
          return (
            <Link key={index} href={link} className="text-primary ">
              <Image src={icon} alt="icon" width={20} height={20} />
            </Link>
          );
        })}
      </div>
      {children}
      <div className="text-right flex flex-col gap-4">
        <button
          className="bg-none border-none"
          disabled={pathName.endsWith("/")}
          onClick={() => back()}
        >
          <AiOutlineArrowUp size={25} />
        </button>
        <button
          className="bg-none border-none"
          disabled={pathName.endsWith("/contact")}
          onClick={() => forward()}
        >
          <AiOutlineArrowDown size={25} />
        </button>
      </div>
    </section>
  );
}
