import { ICart } from "@/interface/carts";
import { ICommentProduct } from "@/interface/products";
import { priceFormatted } from "./formatted";

export const calculateCartTotalPrice = (carts: ICart) => {
  const totalPrice = carts.products.reduce((acc, cartItem) => {
    const productPrice = cartItem.product.price;
    const quantity = cartItem.quantity;

    return acc + productPrice * quantity;
  }, 0);

  return priceFormatted(totalPrice);
};

export const calculateAverageRating = (comments: ICommentProduct[]) => {
  const averageRating =
    comments.reduce((sum, comment) => sum + comment.rate, 0) / comments.length;

  return averageRating;
};
