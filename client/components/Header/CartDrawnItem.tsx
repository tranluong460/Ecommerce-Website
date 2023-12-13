import Image from "next/image";
import Link from "next/link";

type CartDrawnItemProps = {
  cart: any;
};

const CartDrawnItem = ({ cart }: CartDrawnItemProps) => {
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-secondary">
        <Image
          width={100}
          height={100}
          src={cart.product.images[0].url}
          alt={cart.product.images[0].url}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-mutedForeground">
            <h3 className="hover:text-primary">
              <Link href={`/products/${cart.product._id}`}>
                {cart.product.name}
              </Link>
            </h3>
            <p className="ml-4">${cart.product.price}</p>
          </div>

          <div className="flex text-sm items-center">
            <p className="text-mutedForeground">{cart.color}</p>

            {cart.size ? (
              <p className="ml-4 border-l dark:border-secondary pl-4 text-mutedForeground">
                {cart.size}
              </p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-mutedForeground">Số lượng: {cart.quantity}</p>

          <div className="flex">
            <button className="font-medium text-primary hover:text-primary/80">
              <svg
                width="15"
                height="15"
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
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartDrawnItem;
