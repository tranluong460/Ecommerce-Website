import { IProduct } from "./products";

export interface ICart {
  _id: string;
  id_user: string;
  products: IProductCart[];
}

export interface IProductCart {
  product: IProduct;
  color: string;
  size: string;
  quantity: number;
}
