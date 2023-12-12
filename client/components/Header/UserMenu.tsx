"use client";

import { useState } from "react";
import Link from "next/link";

import Avatar from "./Avatar";

const UserMenu = () => {
  const [show, setShow] = useState(false);
  const isLogin = false;

  return (
    <div onClick={() => setShow(!show)} className="relative cursor-pointer">
      <div className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground relative h-10 w-10 rounded-full">
        <Avatar />
      </div>

      <ul
        className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border dark:border-secondary bg-popover p-1 text-popover-foreground shadow-md w-56 ${
          show ? "" : "hidden"
        }`}
      >
        {isLogin ? (
          <>
            <Link
              href="/information"
              className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accentForeground hover:bg-accent text-mutedForeground"
            >
              Thông tin cá nhân
            </Link>

            <Link
              href="/order"
              className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accentForeground hover:bg-accent text-mutedForeground"
            >
              Đơn hàng
            </Link>

            <div className="-mx-1 my-1 h-px bg-muted" />

            <button className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accentForeground hover:bg-accent text-mutedForeground">
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accentForeground hover:bg-accent text-mutedForeground"
            >
              Đăng nhập
            </Link>

            <Link
              href="/register"
              className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:text-accentForeground hover:bg-accent text-mutedForeground"
            >
              Đăng ký
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default UserMenu;
