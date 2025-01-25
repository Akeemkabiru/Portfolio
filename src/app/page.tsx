import Card from "@/components/project-card";
import { EXPERIENCE } from "@/utils/constant";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className="w-full flex justify-center items-center">
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

      {/* work exprience and projects */}
      <section id="projects" className="pt-28 space-y-8 md:space-y-12">
        <p className={`uppercase text-4xl lg:text-5xl font-bold`}>Projects</p>
        {EXPERIENCE.map(
          (
            { picture, title, description, stacks, link, gitLink },
            index: number
          ) => {
            return (
              <Card
                key={index}
                picture={picture}
                title={title}
                description={description}
                stacks={stacks}
                link={link}
                gitLink={gitLink}
              />
            );
          }
        )}
      </section>

      {/* about section */}

      <section id="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio
        officia accusamus illo alias vel commodi veniam, laboriosam velit
        mollitia unde placeat, odit, officiis possimus ex tempore. Natus dolore
        nihil totam minus inventore debitis repellat temporibus? Iste earum
        illum, aliquid incidunt provident eum omnis porro et, tempora, vitae
        eveniet aspernatur! Veniam rem voluptatibus, sint natus officiis magnam
        ipsum exercitationem itaque hic expedita nesciunt ipsa ducimus. Expedita
        assumenda incidunt tempora in eius numquam laboriosam maxime dolor ex,
        vel amet quo deserunt impedit repudiandae corporis nemo quia a suscipit
        ea, ratione quisquam tempore. Molestiae nam, atque consectetur amet sunt
        expedita aperiam distinctio architecto porro, possimus iste ea unde vel
        deserunt alias dolores id illo. Sed doloremque, ipsa inventore autem
        natus corporis tempore incidunt, quidem nesciunt reiciendis odio
        pariatur quia id maxime labore ea qui cum. Distinctio quos reprehenderit
        debitis neque et sint recusandae quas placeat, ab architecto quia porro
        dolore quibusdam. Consequatur delectus, obcaecati officiis natus eum
        aspernatur quia eius voluptatem dignissimos possimus debitis aut
        adipisci quae dolores exercitationem quasi ut similique illo facilis
        facere nobis! Provident reprehenderit omnis, recusandae architecto,
        ullam, consectetur id maiores tempora possimus odio esse aut enim. Nihil
        excepturi repellat cum dolores, aliquam assumenda. Ab necessitatibus,
        dicta atque minima quas libero, in a porro, ex animi itaque ducimus
        nostrum tempora delectus? Odio perspiciatis beatae vero mollitia dolorum
        libero, nostrum ad nam modi totam accusamus dolor minima a provident
        eligendi non voluptatem, itaque vel quae voluptate doloremque.
        Dignissimos quaerat vel perferendis quibusdam nemo officia pariatur eum
        vero eligendi suscipit minima molestias velit provident error
        reprehenderit rerum dolor dolore, expedita voluptatum doloribus unde!
        Quos, necessitatibus dignissimos dolor nemo, quis harum, suscipit
        officiis itaque aperiam temporibus labore modi aspernatur beatae quae
        sed sint. Debitis impedit in repellat dolor nihil assumenda harum
        consequatur! Harum, labore. Esse ipsum consequuntur cupiditate modi,
        doloremque provident libero eum ut fugiat ex pariatur atque dolore ipsam
        sed aperiam, porro vero dolorem. Magni velit aspernatur reprehenderit
        accusantium cumque impedit quaerat ducimus necessitatibus laboriosam
        rerum cupiditate, architecto sapiente ipsa alias dignissimos assumenda
        voluptatibus quae quisquam. Quas architecto consequuntur nihil quae,
        pariatur, illo eos corrupti explicabo alias officia ducimus adipisci
        fuga a. Deserunt est ex, soluta dolorem tempore quam provident
        assumenda? Nisi consequuntur ducimus praesentium error eveniet sequi
        voluptatibus quo aut quia voluptas minus beatae minima ipsum, numquam
        dolor aperiam molestiae voluptate porro deleniti in ad amet. Assumenda
        maiores numquam neque excepturi voluptatibus est optio nulla, dolore,
        accusamus maxime molestias? Omnis consequuntur ipsam doloremque natus
        excepturi sequi ad, vitae suscipit accusamus ipsum. Voluptate, mollitia,
        dicta debitis at nisi quod aliquam repellendus blanditiis, doloremque ea
        ullam ipsam? Molestiae ullam, mollitia, cupiditate, corporis nemo omnis
        voluptate enim asperiores culpa delectus nulla accusamus corrupti
        quisquam consequuntur porro quas? Eum explicabo iure, dicta illum
        accusamus neque. Voluptatibus placeat ullam incidunt aperiam! Facere
        reprehenderit non quisquam, at odio earum sunt aliquid inventore error
        voluptas recusandae labore quasi, tenetur sed. Ad soluta voluptates ab
        provident beatae dolore pariatur facere reiciendis vitae ducimus.
        Veritatis ullam cupiditate illum nam, sunt aliquam cumque quae itaque
        consequatur, eligendi neque error!
      </section>

      {/* contact me section */}

      <section id="contact"></section>
    </>
  );
}
