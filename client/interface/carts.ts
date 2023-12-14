export interface ICart {
  _id: string;
  product: IProductCart;
  color: string;
  size: string;
  quantity: number;
}

export interface IProductCart {
  _id: string;
  name: string;
  price: number;
  images: IImageCart[];
}

export interface IImageCart {
  url: string;
}
