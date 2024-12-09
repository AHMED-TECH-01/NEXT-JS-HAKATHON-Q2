export const products = [
  {
    id: '1',
    name: 'Modern Velvet Sofa',
    description: 'Elegant velvet sofa with gold-finished metal legs',
    price: 899.99,
    category: 'sofas',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 125,
    colors: ['#2B4555', '#C5A491', '#535353'],
    material: 'Velvet',
    dimensions: {
      width: 88,
      height: 34,
      depth: 38
    }
  },
  {
    id: '2',
    name: 'Scandinavian Dining Table',
    description: 'Minimalist oak dining table perfect for modern homes',
    price: 599.99,
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 84,
    material: 'Oak',
    isNew: true
  },
  {
    id: '3',
    name: 'Ceramic Table Lamp',
    description: 'Handcrafted ceramic lamp with linen shade',
    price: 129.99,
    category: 'lighting',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop',
    rating: 4.7,
    reviews: 56,
    discount: 15
  }
];

export const categories = [
  {
    id: '1',
    name: 'Living Room',
    description: 'Sofas, coffee tables, and more',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop',
    itemCount: 124
  },
  {
    id: '2',
    name: 'Bedroom',
    description: 'Beds, nightstands, and dressers',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop',
    itemCount: 86
  },
  {
    id: '3',
    name: 'Dining Room',
    description: 'Tables, chairs, and storage',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop',
    itemCount: 78
  },
  {
    id: '4',
    name: 'Lighting',
    description: 'Floor lamps, table lamps, and pendants',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop',
    itemCount: 93
  }
];

export const featuredCollections = [
  {
    id: '1',
    name: 'Scandinavian Collection',
    description: 'Clean lines and natural materials',
    image: 'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Modern Luxe',
    description: 'Contemporary pieces with a luxurious touch',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop'
  }
];