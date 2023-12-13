import Image from "next/image";
import Link from "next/link";

const ProductItem = () => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-secondary lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          width={1000}
          height={100}
          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-foreground">
            <Link href="/products/1">
              <span aria-hidden="true" className="absolute inset-0"></span>
              Basic Tee
            </Link>
          </h3>
          <p className="mt-1 text-sm text-mutedForeground">Black</p>
        </div>

        <p className="text-sm font-medium text-mutedForeground">$35</p>
      </div>
    </div>
  );
};

export default ProductItem;
