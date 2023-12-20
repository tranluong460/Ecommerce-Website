import Link from "next/link";
import Product from "./Product";
import { SlashIcon } from "@radix-ui/react-icons";
import { IProduct } from "@/interface/products";
import { getOneProduct } from "@/libs/products";

type ProductDetailProps = {
  id: string;
};

const ProductDetail = async ({ id }: ProductDetailProps) => {
  const product: IProduct = await getOneProduct(id);

  return (
    <>
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

      <Product product={product} />
    </>
  );
};

export default ProductDetail;
