import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/interface/products";

type ProductItemProps = {
  product: IProduct;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-secondary lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          width={1000}
          height={100}
          src={product.images_attributes[0].color_images[0].url}
          alt={product.images_attributes[0].color}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <h3 className="text-sm text-foreground">
          <Link href={`/products/${product._id}`}>{product.name}</Link>
        </h3>

        <p className="text-sm font-medium text-mutedForeground">
          {product.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
