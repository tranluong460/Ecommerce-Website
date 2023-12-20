import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { TrashIcon } from "@radix-ui/react-icons";
import { carts } from "@/data/carts";
import { priceFormatted } from "@/libs/formatted";
import { calculateCartTotalPrice } from "@/libs/calculate";

const CartDrawn = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="group -m-2 flex items-center p-2 cursor-pointer">
          <svg
            className="h-7 w-7 flex-shrink-0 text-muted-foreground group-hover:text-primary"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link className="hover:text-primary hover:underline" href="/cart">
              Giỏ hàng
            </Link>
            <Separator className="mt-2" />
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-[70vh] w-full">
          <div className="divide-y">
            {carts && carts.products ? (
              carts.products.map((product) => {
                const images = product.product.attributes.find(
                  (item) => item.color === product.color
                );

                return (
                  <div
                    key={`${product.product._id}-${product.color}-${product.size}`}
                    className="flex py-5 mr-3"
                  >
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border dark:border-secondary">
                      {images && (
                        <Image
                          width={100}
                          height={100}
                          src={images.color_images[0].url}
                          alt={images.color_images[0].url}
                          className="h-full w-full object-cover object-center"
                        />
                      )}
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex flex-col">
                        <div className="flex flex-col gap-1 justify-between">
                          <Link
                            href={`/products/${product.product._id}`}
                            className="group"
                          >
                            <Label className="group-hover:text-primary text-sm font-medium cursor-pointer">
                              {product.product.name}
                            </Label>
                          </Link>

                          <Label className="text-sm font-medium">
                            {priceFormatted(product.product.price)}
                          </Label>
                        </div>

                        <div className="flex text-sm items-center mt-1">
                          <span
                            aria-hidden="true"
                            className="h-3 w-3 border dark:border-secondary"
                            style={{ backgroundColor: `#${product.color}` }}
                          />

                          <p className="ml-4 border-l dark:border-secondary pl-4 text-muted-foreground">
                            {product.size}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-1 justify-between text-sm">
                        <Label className="text-muted-foreground font-normal mt-2">
                          Số lượng: {product.quantity}
                        </Label>

                        <div className="flex group">
                          <Button variant="link">
                            <TrashIcon className="w-5 h-5 group-hover:text-primary/80" />
                          </Button>
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
        </ScrollArea>

        <div className="border-t dark:border-secondary py-6">
          <div className="flex justify-between text-base font-medium text-foreground">
            <p>Tổng phụ</p>
            <p>{calculateCartTotalPrice(carts)}</p>
          </div>

          <p className="mt-0.5 text-sm text-muted-foreground">
            Đã bao gồm phí vận chuyển và thuế
          </p>

          <div className="mt-6">
            <Button className="w-full" size="lg">
              Thanh toán
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawn;
