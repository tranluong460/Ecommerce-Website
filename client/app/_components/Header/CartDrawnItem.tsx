import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { IProductCart } from "@/interface/carts";
import { priceFormatted } from "@/libs/formatted";

type CartDrawnItemProps = {
  product: IProductCart;
};

const CartDrawnItem = ({ product }: CartDrawnItemProps) => {
  const images = product.product.attributes.find(
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

          <div className="flex group">
            <Button variant="link">
              <TrashIcon className="w-5 h-5 group-hover:text-primary/80" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawnItem;
