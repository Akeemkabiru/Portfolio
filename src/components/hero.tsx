import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full lg:h-[100vh] h-fit flex justify-center items-center">
      <div className="flex md:flex-row flex-col justify-between gap-6">
        <div className="lg:space-y-8 space-y-4 lg:w-[60%] w-full">
          <div className="flex gap-2 items-center">
            <p className="text-white/60 text-xl lg:text-3xl"> Hey, there </p>
            <Image src="/hand-wave.svg" alt="hand" width={30} height={30} />
          </div>

          <h1 className="text-[32px]  md:text-5xl lg:text-6xl font-bold">
            <div className="mb-3">
              <p className="text-white/60 inline">I&apos;m </p>
              <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
                Kabiru Akeem
              </span>
            </div>
            <p>a Software Engineer</p>
          </h1>

          <p className="text-white/40 text-xl lg:text-3xl ">
            Specialize in building intuitive, high-performance web and mobile
            applications with modern frameworks.
          </p>
        </div>
        <Image
          src="/kabby.jpeg"
          alt="my-img"
          width={350}
          height={350}
          className="rounded-2xl w-full md:w-fit"
        />
      </div>
    </section>
  );
}
