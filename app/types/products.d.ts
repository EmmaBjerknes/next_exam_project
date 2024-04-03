export interface IProducts {
  name: string;
  description: string;
  productImage: string;
  price: number;
  category: string;
  campaign_discount_percent: number | null;
  campaign_name: string | null;
}
