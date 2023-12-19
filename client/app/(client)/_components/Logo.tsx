import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="font-semibold text-2xl text-foreground">
      <Link href="/">
        <Image
          width={1000}
          height={1000}
          src="/logo.png"
          alt="Logo"
          className="w-20 h-14"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
