import Image from "next/image";
import Link from "next/link";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { IProductCart } from "@/interface/carts";
import { priceFormatted } from "@/libs/formatted";

type CartDrawnItemProps = {
  product: IProductCart;
};

const CartDrawnItem = ({ product }: CartDrawnItemProps) => {
  const images = product.product.images_attributes.find(
    (item) => item.color === product.color
  );

  return (
    <div className="flex py-5 mr-3">
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
            <Link href={`/products/${product.product._id}`} className="group">
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

          <div className="flex">
            <Button variant="link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawnItem;
