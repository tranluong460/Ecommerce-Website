import Image from "next/image";
import Link from "next/link";
import { IProductCart } from "@/interface/carts";
import { priceFormatted } from "@/libs/formatted";

type CartItemProps = {
  products: IProductCart[];
};

const CartItem = ({ products }: CartItemProps) => {
  const images = products.map((item) =>
    item.product.images_attributes.find((image) => item.color === image.color)
  );

  return (
    <>
      {products.map((item) => (
        <div key={item.product._id} className="flex py-6 sm:py-10">
          <div className="flex-shrink-0">
            {images[0]?.color_images[0].url && (
              <Image
                width={1000}
                height={100}
                src={images[0]?.color_images[0].url}
                alt={images[0]?.color_images[0].url}
                className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
              />
            )}
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link
                      href={`/products/${item.product._id}`}
                      className="font-medium text-foreground hover:underline hover:text-primary"
                    >
                      {item.product.name}
                    </Link>
                  </h3>
                </div>

                <div className="mt-1 flex items-center text-sm">
                  <span
                    aria-hidden="true"
                    className="h-3 w-3 border dark:border-secondary"
                    style={{ backgroundColor: `#${item.color}` }}
                  />

                  <p className="ml-4 border-l dark:border-secondary pl-4 text-mutedForeground">
                    {item.size}
                  </p>
                </div>

                <p className="mt-1 text-sm font-medium text-mutedForeground">
                  {priceFormatted(item.product.price)}
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label
                  htmlFor={`quantity-${item.product._id}`}
                  className="sr-only"
                >
                  Số lượng, {item.quantity}
                </label>

                <div className="relative flex items-center max-w-[8rem]">
                  <button className="group bg-secondary dark:border-secondary hover:bg-opacity-80 border rounded-s-lg p-3 h-11 focus:outline-none hover:bg-primary hover:text-foreground">
                    <svg
                      className="w-3 h-3 text-mutedForeground group-hover:text-background group-hover:dark:text-foreground"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>

                  <input
                    className="bg-secondary/50 border-x-0 dark:border-secondary h-11 text-center text-mutedForeground text-sm block w-full py-2.5 outline-none"
                    defaultValue={item.quantity}
                    required
                  />

                  <button className="group bg-secondary dark:border-secondary hover:bg-opacity-80 border rounded-e-lg p-3 h-11 focus:outline-none hover:bg-primary hover:text-foreground">
                    <svg
                      className="w-3 h-3 text-mutedForeground group-hover:text-background group-hover:dark:text-foreground"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>

                <div className="absolute right-0 top-0">
                  <button className="-m-2 inline-flex p-2 text-foreground hover:text-primary">
                    <span className="sr-only">Xóa</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
