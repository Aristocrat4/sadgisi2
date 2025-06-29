export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  description_long: string;
  additional_info: string;
  quantity_in_stock: number;
  images: string[];
  colors: string[];
  favorite?: boolean;
}
