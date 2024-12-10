import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main>
      <section className="text-sm items-center gap-8 flex flex-col-reverse">
        <div className=" space-y-2 text-center">
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
            voluptatibus ut vero! Sunt, pariatur aliquid?
          </p>
        </div>

        <Image
          src="/me.jpg"
          alt="img"
          width={200}
          height={150}
          className="rounded-lg"
        />
      </section>
    </main>
  );
}
