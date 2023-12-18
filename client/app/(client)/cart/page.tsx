import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Cross1Icon, PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import { priceFormatted } from "@/libs/formatted";
import { calculateCartTotalPrice } from "@/libs/calculate";
import { carts } from "@/data/carts";

const CartPage = () => {
  return (
    <section className="mx-auto px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Giỏ hàng
        </h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          {/* Cart Item */}
          <div className="lg:col-span-7">
            <h2 className="sr-only">Sản phẩm trong giỏ hàng</h2>

            <div className="divide-y divide-secondary border-b border-t dark:border-secondary">
              {carts && carts.products.length > 0 ? (
                carts.products.map((product) => {
                  const images = product.product.attributes.find(
                    (item) => item.color === product.color
                  );

                  return (
                    <div
                      key={`${product.product._id}-${product.color}-${product.size}`}
                      className="flex py-6 sm:py-10"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          width={1000}
                          height={100}
                          src={images?.color_images[0].url || ""}
                          alt={images?.color_images[0].url || ""}
                          className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <Link
                                  href={`/products/${product.product._id}`}
                                  className="font-medium text-foreground hover:underline hover:text-primary"
                                >
                                  {product.product.name}
                                </Link>
                              </h3>
                            </div>

                            <div className="mt-1 flex items-center text-sm">
                              <span
                                aria-hidden="true"
                                className="h-3 w-3 border dark:border-secondary"
                                style={{ backgroundColor: `#${product.color}` }}
                              />

                              <p className="ml-4 border-l dark:border-secondary pl-4 text-muted-foreground">
                                {product.size}
                              </p>
                            </div>

                            <p className="mt-1 text-sm font-medium text-muted-foreground">
                              {priceFormatted(product.product.price)}
                            </p>
                          </div>

                          <div className="mt-4 sm:mt-0 sm:pr-9">
                            <label
                              htmlFor={`quantity-${product.product._id}`}
                              className="sr-only"
                            >
                              Số lượng, {product.quantity}
                            </label>

                            <div className="relative flex items-center max-w-[8rem]">
                              <button className="group bg-secondary dark:border-secondary hover:bg-opacity-80 border rounded-s-lg p-3 h-11 focus:outline-none hover:bg-primary hover:text-foreground">
                                <MinusIcon className="w-3 h-3 text-muted-foreground group-hover:text-background group-hover:dark:text-foreground" />
                              </button>

                              <input
                                className="bg-secondary/50 border-x-0 dark:border-secondary h-11 text-center text-muted-foreground text-sm block w-full py-2.5 outline-none"
                                defaultValue={product.quantity}
                                required
                              />

                              <button className="group bg-secondary dark:border-secondary hover:bg-opacity-80 border rounded-e-lg p-3 h-11 focus:outline-none hover:bg-primary hover:text-foreground">
                                <PlusIcon className="w-3 h-3 text-muted-foreground group-hover:text-background group-hover:dark:text-foreground" />
                              </button>
                            </div>

                            <div className="absolute right-0 top-0">
                              <button className="-m-2 inline-flex p-2 text-foreground hover:text-primary">
                                <Cross1Icon className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex items-center justify-center">
                  <span className="text-lg py-5 text-muted-foreground">
                    Không có sản phẩm trong giỏ hàng
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* End Cart Item */}

          {/* Cart Summary */}
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
          {/* End Cart Summary */}
        </div>
      </Container>
    </section>
  );
};

export default CartPage;
