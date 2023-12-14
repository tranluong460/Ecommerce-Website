import Link from "next/link";
import CartDrawnItem from "./CartDrawnItem";
import { carts } from "@/data/carts";

type CartDrawnProps = {
  showCartDrawn: boolean;
  setShowCartDrawn: () => void;
};

const CartDrawn = ({ showCartDrawn, setShowCartDrawn }: CartDrawnProps) => {
  return (
    <div className={`relative z-10 ${showCartDrawn ? "" : "invisible"}`}>
      <div
        className={`fixed inset-0 bg-black/70 bg-opacity-75 ease-in-out duration-500 transition-opacity ${
          showCartDrawn ? "opacity-70" : "opacity-0"
        }`}
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div
              className={`pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 ${
                showCartDrawn ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-background shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <Link href="/cart">
                      <h2 className="text-lg font-medium text-foreground hover:underline hover:text-primary">
                        Giỏ hàng
                      </h2>
                    </Link>

                    <div className="ml-3 flex h-7 items-center">
                      <button
                        onClick={setShowCartDrawn}
                        className="relative -m-2 p-2 text-mutedForeground hover:text-primary"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Đóng</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="-mx-1 my-1 mt-3 h-px bg-muted" />

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-secondary">
                        {carts &&
                        carts.products &&
                        carts.products.length > 0 ? (
                          <CartDrawnItem products={carts.products} />
                        ) : (
                          <div className="flex items-center justify-center">
                            <span className="text-lg py-5 text-mutedForeground">
                              Không có sản phẩm trong giỏ hàng
                            </span>
                          </div>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t dark:border-secondary px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-foreground">
                    <p>Tổng phụ</p>
                    <p>$262.00</p>
                  </div>

                  <p className="mt-0.5 text-sm text-mutedForeground">
                    Shipping and taxes calculated at checkout.
                  </p>

                  <div className="mt-6">
                    <Link
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-ring px-6 py-3 text-base font-medium text-background dark:text-foreground shadow-sm hover:bg-ring/80"
                    >
                      Thanh toán
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawn;
