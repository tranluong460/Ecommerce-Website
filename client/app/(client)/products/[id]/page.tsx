import { Suspense } from "react";
import type { Metadata } from "next";
import Container from "@/components/Container";
import ProductDetail from "./_components/ProductDetail";
import ProductSkeleton from "./_components/ProductSkeleton";
import ProductsList from "../_components/ProductsList";
import ProductsSkeleton from "../_components/ProductsSkeleton";
import { getOneProduct } from "@/libs/products";

type ParamsProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({
  params,
}: ParamsProps): Promise<Metadata> => {
  const product = await getOneProduct(params.id);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm",
      description:
        "Xin lỗi, chúng tôi không thể tìm thấy thông tin cho sản phẩm này.",
    };
  }

  return {
    title: product?.name,
    description: product?.short_description,
  };
};

const ProductDetailPage = ({ params, searchParams }: ParamsProps) => {
  return (
    <section className="bg-background">
      <Container>
        <div className="py-6">
          <Suspense fallback={<ProductSkeleton />}>
            <ProductDetail id={params.id} />
          </Suspense>

          <div className="grid grid-cols-1 gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Sản phẩm cùng loại
            </h1>

            <Suspense fallback={<ProductsSkeleton />}>
              <ProductsList />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetailPage;
