"use client";

import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

const Favorite = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className="group cursor-pointer outline-none duration-300 border rounded-full p-2"
    >
      {active ? (
        <FaHeart size={25} className="text-rose-500" />
      ) : (
        <CiHeart size={25} className="group-hover:text-rose-500" />
      )}
    </div>
  );
};

export default Favorite;
