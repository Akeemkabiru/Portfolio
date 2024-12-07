import TypingComponent from "@/helper/text-write";
import { SKILLS_ITEM } from "@/utils/constant";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[80%] space-y-8">
      <div className="space-y-4">
        <TypingComponent textToType="Hi, my name is Kabby" />

        <h1 className="from-cyan-500 to-teal-500 bg-clip-text text-transparent bg-gradient-to-r font-semibold">
          Software Engineer
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ullam
          incidunt quisquam, nisi laboriosam cupiditate culpa, similique impedit
          atque tenetur totam rem fugit debitis natus inventore molestias
          tempora magni. Sunt.
        </p>
      </div>

      <div className="flex w-full justify-between flex-wrap">
        {SKILLS_ITEM.map(({ skill, icon }, index: number) => {
          return (
            <div key={index} className="flex flex-col items-center gap-4">
              <span className="text-xs">{skill}</span>
              <Image src={icon} alt={skill} width={50} height={50} />
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-8">
        <button className="hover:bg-gradient-to-r text-sm transition-all duration-500 from-cyan-500 to-teal-500 bg-cyan-500 text-white px-6 py-2 rounded-md bg-opacity-0 hover:bg-opacity-100 border-2">
          Contact me
        </button>

        <button className="hover:bg-gradient-to-r text-sm transition-all duration-500 from-cyan-500 to-teal-500 bg-cyan-500 text-white px-6 py-2 rounded-md bg-opacity-0 hover:bg-opacity-100 border-2">
          Projects
        </button>
      </div>
    </main>
  );
}
