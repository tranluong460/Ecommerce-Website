import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/interface/products";
import { priceFormatted } from "@/libs/formatted";

type ProductsListProps = {
  products: IProduct[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="lg:col-span-3">
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id} className="group relative">
              <Link href={`/products/${product._id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-secondary lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    width={1000}
                    height={100}
                    src={product.attributes[0].color_images[0].url}
                    alt={product.attributes[0].color}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  <h3 className="text-sm text-foreground">{product.name}</h3>

                  <p className="text-sm font-medium text-muted-foreground">
                    {priceFormatted(product?.price)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="text-lg py-5 text-muted-foreground">
            Không có sản phẩm
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
