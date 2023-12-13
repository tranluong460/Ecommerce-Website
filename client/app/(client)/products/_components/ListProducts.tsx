import ProductItem from "./ProductItem";

type ListProductsProps = {
  products: any;
};

const ListProducts = ({ products }: ListProductsProps) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products && products.length > 0 ? (
        products.map((product: any) => (
          <ProductItem key={product._id} product={product} />
        ))
      ) : (
        <div className="flex items-center justify-center">
          <span className="text-lg py-5 text-mutedForeground">
            Không có sản phẩm trong giỏ hàng
          </span>
        </div>
      )}
    </div>
  );
};

export default ListProducts;
