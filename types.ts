export enum Category {
  COFFEE = 'Coffee',
  SNACKS = 'Snacks',
  DESSERTS = 'Desserts',
  BEVERAGES = 'Beverages'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  name: string;
  comment: string;
  rating: number;
}