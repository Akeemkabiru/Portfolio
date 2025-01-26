import { ABOUT } from "@/utils/constant";

export default function About() {
  return (
    <section id="about" className="pt-32 space-y-8 ">
      <p
        className={`uppercase text-4xl lg:text-5xl font-bold w-[70%] leading-[72px]`}
      >
        Building Scalable Software and Intuitive Interfaces
      </p>
      <div className="space-y-8">
        {ABOUT.map(({ text, secondText }, index: number) => {
          return (
            <div key={index} className="flex  justify-between w-full">
              <div className="w-[60%]">{text}</div>
              {secondText && (
                <div className="w-[30%]">{secondText.join(", ")}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
