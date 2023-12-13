"use client";

import Link from "next/link";
import { useState } from "react";

type TopProps = { setShowModal: () => void };

const Top = ({ setShowModal }: TopProps) => {
  const [show, setShow] = useState(false);

  const sort = [
    { url: "#", label: "Mới nhất" },
    { url: "#", label: "Giá từ thấp đến cao" },
    { url: "#", label: "Giá từ cao đến thấp" },
  ];

  return (
    <div className="flex items-baseline justify-between border-b dark:border-secondary pb-6 pt-4">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Danh sách sản phẩm
      </h1>

      <div className="flex items-center">
        <div className="relative inline-block text-left">
          <div onClick={() => setShow(!show)}>
            <button
              type="button"
              className="group inline-flex justify-center text-sm font-medium text-mutedForeground hover:text-primary"
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Sắp xếp
              <svg
                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-mutedForeground group-hover:text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <ul
            className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border dark:border-secondary bg-popover p-1 text-popover-foreground shadow-md w-56 ${
              show ? "" : "hidden"
            }`}
          >
            <div className="py-1" role="none">
              {sort.map((item) => (
                <Link
                  key={item.label}
                  href="#"
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent text-mutedForeground hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </ul>
        </div>

        <button
          type="button"
          className="-m-2 ml-5 p-2 text-mutedForeground hover:text-primary sm:ml-7"
        >
          <span className="sr-only">Xem lưới</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          onClick={setShowModal}
          className="-m-2 ml-4 p-2 text-mutedForeground hover:text-primary sm:ml-6 lg:hidden"
        >
          <span className="sr-only">Lọc</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Top;
