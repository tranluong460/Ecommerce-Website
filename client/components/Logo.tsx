import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="font-semibold text-2xl text-foreground">
      <Link href="/">
        <Image
          src="/logo.png"
          width={1000}
          height={100}
          alt="Logo"
          className="w-20 h-14"
        />
      </Link>
    </div>
  );
};

export default Logo;
