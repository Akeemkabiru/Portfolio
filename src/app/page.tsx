import Button from "@/components/button";
import { SKILLS_ITEM } from "@/utils/constant";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full space-y-12">
      <div className="space-y-4">
        <h2 className="text-primary text-xl">Hi, my name is</h2>
        <h2 className="font-semibold text-6xl">Kabby</h2>
        <h1 className="font-medium text-3xl">Software Engineer</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ullam
          incidunt quisquam, nisi laboriosam cupiditate culpa, similique impedit
          atque tenetur totam rem fugit debitis natus inventore molestias
          tempora magni. Sunt.
        </p>
      </div>

      <div className="w-full justify-between grid grid-cols-5 gap-8">
        {SKILLS_ITEM.map(({ skill, icon }, index: number) => {
          return (
            <div key={index} className="flex flex-col  items-center gap-4">
              <Image src={icon} alt={skill} width={50} height={50} />
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-8 justify-center">
        <Button>Contact me</Button>
        <Button>Projects</Button>
      </div>
    </main>
  );
}
