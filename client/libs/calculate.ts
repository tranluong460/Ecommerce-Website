import { ICart } from "@/interface/carts";
import { priceFormatted } from "./formatted";

export const calculateCartTotalPrice = (carts: ICart) => {
  let totalPrice = 0;

  carts.products.forEach((cartItem) => {
    const productPrice = cartItem.product.price;
    const quantity = cartItem.quantity;

    totalPrice += productPrice * quantity;
  });

  return priceFormatted(totalPrice);
};
