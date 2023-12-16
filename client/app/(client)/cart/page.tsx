import Container from "@/components/Container";
import CartItem from "./_components/CartItem";
import SummaryCart from "./_components/SummaryCart";
import { carts } from "@/data/carts";

const CartPage = () => {
  return (
    <section className="mx-auto px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Giỏ hàng
        </h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-7">
            <h2 className="sr-only">Sản phẩm trong giỏ hàng</h2>

            <div className="divide-y divide-secondary border-b border-t dark:border-secondary">
              {carts && carts.products ? (
                carts.products.map((product) => (
                  <CartItem
                    key={`${product.product._id}-${product.color}-${product.size}`}
                    product={product}
                  />
                ))
              ) : (
                <div className="flex items-center justify-center">
                  <span className="text-lg py-5 text-muted-foreground">
                    Không có sản phẩm trong giỏ hàng
                  </span>
                </div>
              )}
            </div>
          </div>

          <SummaryCart carts={carts} />
        </div>
      </Container>
    </section>
  );
};

export default CartPage;
