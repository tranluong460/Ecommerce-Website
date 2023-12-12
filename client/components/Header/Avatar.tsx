import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      width={100}
      height={100}
      src="/user.jpg"
      className="w-[35px] h-[35px] rounded-full object-cover"
      alt="User"
    />
  );
};

export default Avatar;
