import Image from "next/image";
import Link from "next/link";

type ProductItemProps = {
  product: any;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-secondary lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          width={1000}
          height={100}
          src={product.images[0].url}
          alt={product.images[0].url}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-foreground">
            <Link href={`/products/${product._id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.name}
            </Link>
          </h3>
        </div>

        <p className="text-sm font-medium text-mutedForeground">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
