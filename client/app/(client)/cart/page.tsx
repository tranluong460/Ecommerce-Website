import Container from "@/components/Container";
import CartItem from "./_components/CartItem";
import { carts } from "@/data/carts";
import { calculateCartTotalPrice } from "@/libs/calculate";
import { priceFormatted } from "@/libs/formatted";
import { Button } from "@/components/ui/button";

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

          <div className="mt-16 rounded-lg bg-secondary px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-foreground">Tóm tắt</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Tổng phụ</div>
                <div className="text-sm font-medium text-muted-foreground">
                  {calculateCartTotalPrice(carts)}
                </div>
              </div>

              <div className="flex items-center justify-between border-t dark:border-muted-foreground pt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>Phí vận chuyển</span>
                </div>

                <div className="text-sm font-medium text-muted-foreground">
                  {priceFormatted(0)}
                </div>
              </div>

              <div className="flex items-center justify-between border-t dark:border-muted-foreground pt-4">
                <div className="flex text-sm text-muted-foreground">
                  <span>Thuế</span>
                </div>

                <div className="text-sm font-medium text-muted-foreground">
                  {priceFormatted(0)}
                </div>
              </div>

              <div className="flex items-center justify-between border-t dark:border-muted-foreground pt-4">
                <div className="text-base font-medium text-muted-foreground">
                  Tổng
                </div>

                <div className="text-base font-medium text-muted-foreground">
                  {calculateCartTotalPrice(carts)}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full" size="lg">
                Thanh toán
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CartPage;
