import Link from "next/link";

import Container from "@/components/Container";
import ImageGallery from "@/components/Products/Detail/ImageGallery";
import ProductInfoLeft from "@/components/Products/Detail/ProductInfoLeft";
import ProductInfoRight from "@/components/Products/Detail/ProductInfoRight";

const ProductDetailPage = () => {
  return (
    <section className="bg-background">
      <Container>
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="mr-2 text-sm font-medium text-mutedForeground hover:text-primary"
                  >
                    Trang chủ
                  </Link>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-mutedForeground"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Link
                    href="/products"
                    className="mr-2 text-sm font-medium text-mutedForeground hover:text-primary"
                  >
                    Quần áo
                  </Link>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-mutedForeground"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li className="text-sm">
                <Link
                  href="#"
                  aria-current="page"
                  className="font-medium text-mutedForeground hover:text-primary"
                >
                  Basic Tee 6-Pack
                </Link>
              </li>
            </ol>
          </nav>

          <ImageGallery />

          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-secondary lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Basic Tee 6-Pack
              </h1>
            </div>

            <ProductInfoRight />

            <ProductInfoLeft />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetailPage;
