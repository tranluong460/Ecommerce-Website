import Image from "next/image";
import Link from "next/link";
import "@/styles/other/components.css";

const Logo = () => {
  return (
    <div className="lo-div">
      <Link href="/">
        <Image
          width={1000}
          height={1000}
          src="/logo.png"
          alt="Logo"
          className="lo-image"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
