import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className=" w-[70%]">
      <section className="text-sm flex gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
            About me
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            assumenda incidunt at quibusdam voluptatibus sit accusantium,
            dolores excepturi id veritatis accusamus aspernatur. Odit sunt
            distinctio optio earum ut? Ratione, optio. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Illo odit explicabo optio vitae,
            autem quo architecto fugit aut totam doloremque corporis deleniti
            adipisci, ut impedit ipsa accusantium, saepe aperiam magnam? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            dolores dignissimos voluptas aperiam assumenda fuga! Vitae
            blanditiis nostrum similique cum voluptates ex! Explicabo et
            voluptatibus ut vero! Sunt, pariatur aliquid? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Culpa aliquid ducimus facilis sed
            expedita ipsa perferendis doloremque? Id eveniet saepe cupiditate,
            dolorem possimus quaerat amet aperiam eaque asperiores quo eligendi!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis temporibus distinctio veniam excepturi, repudiandae amet
            fuga tempore vero? Maiores, minima.
          </p>
        </div>
        <Image
          src="/me.jpg"
          alt="img"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </section>
    </main>
  );
}
