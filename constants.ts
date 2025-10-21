
import { Product, StrainType } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Pretoria Purple',
    category: 'Flower',
    strain: StrainType.Indica,
    prices: [
      { weight: '1g', price: 100 },
      { weight: '3.5g', price: 300 },
      { weight: '7g', price: 550 },
    ],
    description: 'A relaxing indica strain known for its sweet grape aroma and calming effects. Perfect for unwinding.',
    imageUrl: 'https://picsum.photos/seed/pretoria/400/400',
  },
  {
    id: 2,
    name: 'Midrand Dream',
    category: 'Flower',
    strain: StrainType.Sativa,
    prices: [
      { weight: '1g', price: 120 },
      { weight: '3.5g', price: 350 },
      { weight: '7g', price: 600 },
    ],
    description: 'An uplifting sativa that boosts creativity and energy. Features a citrusy, earthy flavor profile.',
    imageUrl: 'https://picsum.photos/seed/midrand/400/400',
  },
  {
    id: 3,
    name: 'Gauteng Gold',
    category: 'Flower',
    strain: StrainType.Hybrid,
    prices: [
      { weight: '1g', price: 110 },
      { weight: '3.5g', price: 320 },
      { weight: '7g', price: 580 },
    ],
    description: 'A balanced hybrid offering the best of both worlds. Delivers a euphoric rush followed by gentle relaxation.',
    imageUrl: 'https://picsum.photos/seed/gauteng/400/400',
  },
  {
    id: 4,
    name: 'RAW Classic Papers',
    category: 'Accessories',
    price: 30,
    description: 'King size rolling papers made from natural, unrefined plant fibers for a smooth, clean smoke.',
    imageUrl: 'https://picsum.photos/seed/raw/400/400',
  },
  {
    id: 5,
    name: 'GreenEats Grinder',
    category: 'Accessories',
    price: 250,
    description: 'A durable 4-piece metal grinder for a perfect, consistent grind every time. Features a kief catcher.',
    imageUrl: 'https://picsum.photos/seed/grinder/400/400',
  },
  {
    id: 6,
    name: 'Glass Bong "The Chief"',
    category: 'Accessories',
    price: 750,
    description: 'A classic 12-inch beaker bong made from thick borosilicate glass for cool, filtered hits.',
    imageUrl: 'https://picsum.photos/seed/bong/400/400',
  },
  {
    id: 7,
    name: 'Auto-flowering Seeds',
    category: 'Seeds',
    price: 400,
    description: 'A pack of 5 auto-flowering hybrid seeds. Easy to grow for beginners and experts alike.',
    imageUrl: 'https://picsum.photos/seed/seeds1/400/400',
  },
  {
    id: 8,
    name: 'Feminized Indica Seeds',
    category: 'Seeds',
    price: 550,
    description: 'A pack of 5 premium feminized indica seeds, guaranteeing a harvest of potent buds.',
    imageUrl: 'https://picsum.photos/seed/seeds2/400/400',
  },
];
