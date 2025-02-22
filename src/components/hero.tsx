import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex md:flex-row flex-col justify-between gap-6">
      <div className="space-y-4">
        <div className="flex gap-3 items-center">
          <span className="text-white/60 text-xl smm:text-2xl lg:text-3xl">
            Hey, there
          </span>
          <Image src="/hand-wave.svg" alt="hand" width={30} height={30} />
        </div>

        <div className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold">
          <div>
            <span className="text-white/60 inline">I&apos;m </span>
            <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
              Kabiru Akeem
            </span>
          </div>

          <h1>a Software Engineer</h1>
        </div>

        <p className="text-white/40  text-xl smm:text-2xl lg:text-3xl xl:text-4xl">
          Specialize in building intuitive, high-performance web and mobile
          applications.
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <Image
          src="/kabby.jpeg"
          alt="my-img"
          width={350}
          height={350}
          className="rounded-2xl w-[90%] md:w-fit"
        />
      </div>
    </section>
  );
}
