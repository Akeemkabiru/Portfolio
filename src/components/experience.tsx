import { EXPERIENCE } from "@/utils/constant";
import Image from "next/image";
import { BsFillTriangleFill } from "react-icons/bs";

export default function Experience() {
  return (
    <section id="experience" className="pt-32">
      <p className={`uppercase text-4xl lg:text-5xl font-bold`}>
        Work experience
      </p>

      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />
        <div className="space-y-8">
          {EXPERIENCE.map(
            (
              { logo, companyName, role, date, experience, type },
              index: number
            ) => {
              return (
                <div key={index} className="flex gap-4">
                  <Image
                    src={logo}
                    alt={`${companyName}-logo`}
                    width={80}
                    height={80}
                    className="rounded-2xl h-fit"
                  />
                  <div>
                    <h2 className="text-2xl sm:text-[2rem] font-bold">
                      {role}
                    </h2>
                    <h3 className="text-base sm:text-lg font-bold my-2 sm:my-3">
                      {companyName} - {type}
                    </h3>
                    <p className="text-base sm:text-lg text-white/60 my-3">
                      {date}
                    </p>

                    <ul className="space-y-4">
                      {experience.map((text: string, index: number) => {
                        return (
                          <li key={index} className="flex items-center gap-2">
                            <div className="h-fit">
                              <BsFillTriangleFill
                                style={{
                                  fontSize: "12px",
                                  color: "gray",
                                  transform: "rotate(90deg)",
                                }}
                                size={10}
                              />{" "}
                            </div>
                            <p> {text}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
