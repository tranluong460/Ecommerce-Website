import Container from "@/components/Container";
import carts from "@/data/carts";
import CartItem from "@/components/Cart/CartItem";

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

            <CartItem carts={carts} />
          </div>

          <div className="mt-16 rounded-lg bg-secondary px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-foreground">Tóm tắt</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-mutedForeground">Tổng phụ</div>
                <div className="text-sm font-medium text-mutedForeground">
                  $99.00
                </div>
              </div>

              <div className="flex items-center justify-between border-t dark:border-mutedForeground pt-4">
                <div className="flex items-center text-sm text-mutedForeground">
                  <span>Phí vận chuyển</span>
                </div>

                <div className="text-sm font-medium text-mutedForeground">
                  $5.00
                </div>
              </div>

              <div className="flex items-center justify-between border-t dark:border-mutedForeground pt-4">
                <div className="flex text-sm text-mutedForeground">
                  <span>Thuế</span>
                </div>

                <div className="text-sm font-medium text-mutedForeground">
                  $8.32
                </div>
              </div>

              <div className="flex items-center justify-between border-t dark:border-mutedForeground pt-4">
                <div className="text-base font-medium text-mutedForeground">
                  Tổng
                </div>

                <div className="text-base font-medium text-mutedForeground">
                  $112.32
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full rounded-md border border-transparent bg-primary dark:text-foreground px-4 py-3 text-base font-medium text-muted shadow-sm hover:opacity-70 focus:outline-none">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CartPage;
