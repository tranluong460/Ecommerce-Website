import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import CartDrawnItem from "./CartDrawnItem";
import { carts } from "@/data/carts";
import { calculateCartTotalPrice } from "@/libs/calculate";

const CartDrawn = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="group -m-2 flex items-center p-2 cursor-pointer">
          <svg
            className="h-6 w-6 flex-shrink-0 text-muted-foreground group-hover:text-primary"
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
          </SheetTitle>
        </SheetHeader>

        <div>
          <ScrollArea className="h-[70vh] w-full">
            <div className="divide-y">
              {carts && carts.products ? (
                carts.products.map((product) => (
                  <CartDrawnItem
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
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawn;
