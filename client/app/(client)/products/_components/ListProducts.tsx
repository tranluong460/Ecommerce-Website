import ProductItem from "./ProductItem";
import { IProduct } from "@/interface/products";

type ListProductsProps = {
  products: IProduct[];
};

const ListProducts = ({ products }: ListProductsProps) => {
  return (
    <div className="lg:col-span-3">
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductItem key={product._id} product={product} />
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

export default ListProducts;
