import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Eventry"
              className="h-[45px]"
              height={80}
              width={120}
            />
          </Link>
        </div>
        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
