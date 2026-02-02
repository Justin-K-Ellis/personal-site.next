import { Link } from "@/i18n/navigation";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="p-3 md:p-6 flex justify-between items-center mb-6 shadow">
      <h1 className="md:text-3xl text-2xl font-bold">
        <Link href="/">Justin Klitgaard</Link>
      </h1>
      <Navbar />
    </header>
  );
}
