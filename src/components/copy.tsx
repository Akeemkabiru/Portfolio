import Link from "next/link";

export default function Copyright() {
  const curYear = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="my-6 sm:my-8 text-sm sm:text-base lg:text-lg flex md:justify-between justify-center"
    >
      <p>
        <span className="text-xl sm:text-2xl">&copy;</span> {curYear} . KABIRU
        AKEEM . ALL RIGHTS RESERVED
      </p>
      <Link
        className="md:flex hidden items-center gap-1 leading-tight"
        href="#home"
        data-blobity-offset-x="2"
        data-blobity-offset-y="0"
      >
        <p className="underline leading-tight">SCROLL TO TOP</p>
      </Link>
    </section>
  );
}
