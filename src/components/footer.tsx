import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <section>
      <div className="flex items-center justify-center gap-8">
        <FaArrowLeftLong size={25} />
        <FaArrowRightLong size={25} />
      </div>
      <div></div>
    </section>
  );
}
