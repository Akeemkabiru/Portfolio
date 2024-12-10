import { SKILLS_ITEM } from "@/utils/constant";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full space-y-6">
      <div className="space-y-6">
        <h2>Hi, my name is</h2>
        <h2 className="font-semibold text-5xl text-primary">Kabby</h2>
        <h1 className="font-semibold text-xl">Software Engineer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ullam
          incidunt quisquam, nisi laboriosam cupiditate culpa, similique impedit
          atque tenetur totam rem fugit debitis natus inventore molestias
          tempora magni. Sunt.
        </p>
      </div>

      <div className="md:flex w-full justify-between flex-wrap grid grid-cols-5 gap-8">
        {SKILLS_ITEM.map(({ skill, icon }, index: number) => {
          return (
            <div key={index} className="flex flex-col  items-center gap-4">
              <span className="text-xs hidden md:block">{skill}</span>
              <Image src={icon} alt={skill} width={50} height={50} />
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-8">
        <button className="hover:bg-gradient-to-r text-sm transition-all duration-500 from-cyan-500 to-teal-500 bg-cyan-500 text-primary px-6 py-3 rounded-md bg-opacity-0 hover:bg-opacity-100 border-2 border-primary">
          Contact me
        </button>

        <button className="hover:bg-gradient-to-r text-sm transition-all duration-500 from-cyan-500 to-teal-500 bg-cyan-500 px-6 py-3 rounded-md bg-opacity-0 hover:bg-opacity-100 border-2 border-primary text-primary">
          Projects
        </button>
      </div>
    </main>
  );
}
