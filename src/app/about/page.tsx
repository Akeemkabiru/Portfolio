import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main>
      <section className="grid grid-cols-1 gap-6">
        <div className="flex items-center justify-center">
          <Image
            src="/me.jpg"
            alt="img"
            width={200}
            height={1}
            className="rounded-lg"
          />
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary mb-2">About me</h2>

          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            assumenda . Lorem ipsum dolor sit
            abo et
            voluptatibus ut vero! Sunt, pariatur aliquid?
          </p>
        </div>
      </section>
    </main>
  );
}
