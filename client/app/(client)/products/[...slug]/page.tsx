import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import Container from "@/components/Container";
import ProductDetail from "./_components/ProductDetail";
import ListProducts from "../_components/ListProducts";
import { SlashIcon } from "@radix-ui/react-icons";
import { products } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const product = products.find((prod) => prod._id === params.slug[0]);

  return {
    title: product?.name,
    description: product?.short_description,
  };
}

const ProductDetailPage = ({ params }: { params: { slug: string[] } }) => {
  const product = products.find((prod) => prod._id === params.slug[0]);
  const colorParam = params.slug[1];
  const sizeParam = params.slug[2];

  return (
    <section className="bg-background">
      <Container>
        <div className="py-6">
          <nav aria-label="Breadcrumb">
            <ul className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="mr-2 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  Trang chủ
                </Link>
                <SlashIcon className="h-5 w-4 text-muted-foreground" />
              </li>

              <li className="flex items-center">
                <Link
                  href="/products"
                  className="mr-2 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  Sản phẩm
                </Link>
                <SlashIcon className="h-5 w-4 text-muted-foreground" />
              </li>

              <li className="text-sm">
                <Link
                  href={`/products/${product?._id}`}
                  aria-current="page"
                  className="font-medium text-muted-foreground hover:text-primary"
                >
                  {product?.name}
                </Link>
              </li>
            </ul>
          </nav>

          <ProductDetail
            product={product}
            colorParam={colorParam}
            sizeParam={sizeParam}
          />

          <div className="grid grid-cols-1 gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Sản phẩm cùng loại
            </h1>

            <ListProducts products={products} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetailPage;
