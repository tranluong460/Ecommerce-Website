import Link from "next/link";
import React from "react";
import { SlashIcon } from "@radix-ui/react-icons";

type BreadcrumbProps = {
  _id: string | undefined;
  name: string | undefined;
};

const Breadcrumb = ({ _id, name }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <ul className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div className="flex items-center">
            <Link
              href="/"
              className="mr-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Trang chủ
            </Link>
            <SlashIcon className="h-5 w-4 text-muted-foreground" />
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <Link
              href="/products"
              className="mr-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Sản phẩm
            </Link>
            <SlashIcon className="h-5 w-4 text-muted-foreground" />
          </div>
        </li>

        <li className="text-sm">
          <Link
            href={`/products/${_id}`}
            aria-current="page"
            className="font-medium text-muted-foreground hover:text-primary"
          >
            {name}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
