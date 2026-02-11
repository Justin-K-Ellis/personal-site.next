import Link from "next/link";
import Title from "./Title";
import SubTitle from "./SubTitle";

export default function Contact() {
  return (
    <section id="contact">
      <Title text="Contact" />
      <h3 className="font-bold text-center text-xl md:text-3xl mt-1 mb-4">
        Get in touch with me{" "}
        <Link href="/contact" className="text-blue-700">
          here
        </Link>
        .
      </h3>
    </section>
  );
}
