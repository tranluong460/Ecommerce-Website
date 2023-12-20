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
        <div className="cd-div-1 group">
          <svg
            className="cd-svg group-hover:text-primary"
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
            <Link className="cd-link-1" href="/cart">
              Giỏ hàng
            </Link>
            <Separator className="cd-sr" />
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="cd-sa">
          <div className="cd-div-2">
            {carts && carts.products ? (
              carts.products.map((product) => {
                const images = product.product.attributes.find(
                  (item) => item.color === product.color
                );

                return (
                  <div
                    key={`${product.product._id}-${product.color}-${product.size}`}
                    className="cd-div-3"
                  >
                    <div className="cd-div-4">
                      {images && (
                        <Image
                          width={100}
                          height={100}
                          src={images.color_images[0].url}
                          alt={images.color_images[0].url}
                          className="cd-image"
                        />
                      )}
                    </div>

                    <div className="cd-div-5">
                      <div className="cd-div-6">
                        <div className="cd-div-6 cd-div-7">
                          <Link
                            href={`/products/${product.product._id}`}
                            className="group"
                          >
                            <Label className="cd-label-1 group-hover:text-primary">
                              {product.product.name}
                            </Label>
                          </Link>

                          <Label className="cd-label-2">
                            {priceFormatted(product.product.price)}
                          </Label>
                        </div>

                        <div className="cd-div-8">
                          <span
                            aria-hidden="true"
                            className="cd-span-1"
                            style={{ backgroundColor: `#${product.color}` }}
                          />

                          <p className="cd-p-1">{product.size}</p>
                        </div>
                      </div>

                      <div className="cd-div-9">
                        <Label className="cd-label-3">
                          Số lượng: {product.quantity}
                        </Label>

                        <div className="cd-div-10 group">
                          <Button variant="link">
                            <TrashIcon className="cd-icon group-hover:text-primary/80" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="cd-div-11">
                <span className="cd-span-2">
                  Không có sản phẩm trong giỏ hàng
                </span>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="cd-div-12">
          <div className="cd-div-13">
            <p>Tổng phụ</p>
            <p>{calculateCartTotalPrice(carts)}</p>
          </div>

          <p className="cd-p-2">Đã bao gồm phí vận chuyển và thuế</p>

          <div className="cd-div-14">
            <Button className="cd-button" size="lg">
              Thanh toán
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawn;
