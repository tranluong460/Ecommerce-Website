import type { Metadata } from "next";

import Container from "@/components/Container";
import ProductDetail from "./_components/ProductDetail";
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

  return (
    <section className="bg-background">
      <Container>
        <ProductDetail product={product} />
      </Container>
    </section>
  );
};

export default ProductDetailPage;
