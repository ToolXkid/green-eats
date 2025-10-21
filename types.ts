
export enum StrainType {
  Sativa = 'Sativa',
  Indica = 'Indica',
  Hybrid = 'Hybrid',
}

export type ProductCategory = 'Flower' | 'Seeds' | 'Accessories';

export interface ProductPrice {
  weight: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  strain?: StrainType;
  prices?: ProductPrice[];
  price?: number; // for items with a single price
  description: string;
  imageUrl: string;
}

export interface CartItem {
  cartItemId: string; // Composite key, e.g., "1-3.5g"
  productId: number;
  name: string;
  quantity: number;
  selectedPrice: ProductPrice;
  imageUrl: string;
}
