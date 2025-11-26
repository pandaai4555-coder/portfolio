import { Category, MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Coffee
  {
    id: 'c1',
    name: 'Espresso Romano',
    description: 'Rich espresso with a twist of lemon zest.',
    price: '$4.50',
    category: Category.COFFEE,
    image: 'https://picsum.photos/seed/espresso/400/300',
    featured: true
  },
  {
    id: 'c2',
    name: 'Hazelnut Latte',
    description: 'Smooth steamed milk with hazelnut syrup.',
    price: '$5.50',
    category: Category.COFFEE,
    image: 'https://picsum.photos/seed/latte/400/300'
  },
  {
    id: 'c3',
    name: 'Cold Brew Reserve',
    description: 'Steeped for 18 hours for maximum smoothness.',
    price: '$6.00',
    category: Category.COFFEE,
    image: 'https://picsum.photos/seed/coldbrew/400/300',
    featured: true
  },
  
  // Snacks
  {
    id: 's1',
    name: 'Avocado Toast',
    description: 'Sourdough, smashed avocado, chili flakes.',
    price: '$8.50',
    category: Category.SNACKS,
    image: 'https://picsum.photos/seed/avocado/400/300'
  },
  {
    id: 's2',
    name: 'Truffle Fries',
    description: 'Crispy fries tossed in truffle oil and parmesan.',
    price: '$7.00',
    category: Category.SNACKS,
    image: 'https://picsum.photos/seed/fries/400/300',
    featured: true
  },

  // Desserts
  {
    id: 'd1',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers.',
    price: '$9.00',
    category: Category.DESSERTS,
    image: 'https://picsum.photos/seed/tiramisu/400/300'
  },
  {
    id: 'd2',
    name: 'Dark Chocolate Tart',
    description: '70% cocoa ganache on a buttery crust.',
    price: '$8.00',
    category: Category.DESSERTS,
    image: 'https://picsum.photos/seed/tart/400/300',
    featured: true
  },

  // Beverages
  {
    id: 'b1',
    name: 'Matcha Lemonade',
    description: 'Ceremonial grade matcha with fresh lemon.',
    price: '$6.50',
    category: Category.BEVERAGES,
    image: 'https://picsum.photos/seed/matcha/400/300'
  },
  {
    id: 'b2',
    name: 'Berry Hibiscus Iced Tea',
    description: 'Refreshing herbal tea infused with mixed berries.',
    price: '$5.00',
    category: Category.BEVERAGES,
    image: 'https://picsum.photos/seed/hibiscus/400/300'
  }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/cafe1/600/800',
  'https://picsum.photos/seed/cafe2/600/400',
  'https://picsum.photos/seed/cafe3/600/400',
  'https://picsum.photos/seed/cafe4/600/800',
  'https://picsum.photos/seed/cafe5/600/400',
  'https://picsum.photos/seed/cafe6/600/400',
];