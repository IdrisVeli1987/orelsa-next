export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  discount_price: number;
  photos: string[];
  new: { isNew: boolean };
  active: boolean;
}

export interface IProductById {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  discount_price: number;
  photos: string[];
}
