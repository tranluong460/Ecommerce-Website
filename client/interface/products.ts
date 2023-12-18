export interface IProduct {
  _id: string;
  name: string;
  price: number;
  original_price: number;
  attributes: IAttributesProduct[];
  highlights: IHighlightProduct[];
  short_description: string;
  description: string;
  comments: ICommentProduct[];
}

export interface IAttributesProduct {
  color: string;
  sizes: ISizeProduct[];
  color_images: IImageProduct[];
}

export interface ISizeProduct {
  name: string;
  quantity: number;
}

export interface IImageProduct {
  url: string;
}

export interface IHighlightProduct {
  name: string;
}

export interface ICommentProduct {
  id_user: string;
  comment: string;
  rate: number;
}
