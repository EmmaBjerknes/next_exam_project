export interface CartProduct {
  id: string;
  name: string;
  productimage: string;
  price: number;
  campaign_discount_percent: number | null;
  discountPrice?: number;
  quantity: number;
}

export interface CartContextValue {
  cart: CartProduct[];
  addToCart: (product: IProduct) => void;
  subtractFromCart: (product: CartProduct) => void;
  removeProductFromCart: (prduct: CartProduct) => void;
}
