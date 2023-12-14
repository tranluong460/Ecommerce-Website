export interface IProduct {
  _id: string;
  name: string;
  price: number;
  original_price: number;
  in_stock: number;
  images_attributes: IImageProduct[];
  sizes: ISizeProduct[];
  highlights: IHighlightProduct[];
  short_description: string;
  description: string;
  comments: ICommentProduct[];
}

export interface IImageProduct {
  color: string;
  color_images: IColorImageProduct[];
}

export interface IColorImageProduct {
  url: string;
}

export interface ISizeProduct {
  name: string;
  quantity: number;
}

export interface IHighlightProduct {
  name: string;
}

export interface ICommentProduct {
  id_user: string;
  comment: string;
  rate: number;
}
