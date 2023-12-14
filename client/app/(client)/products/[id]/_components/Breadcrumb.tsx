import Link from "next/link";
import React from "react";

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
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-4 text-muted-foreground"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
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
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-4 text-muted-foreground"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
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
