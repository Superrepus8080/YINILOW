export type WorldId = 'fashion' | 'home'

export interface NavItem {
  label: string
  href: string
  badge?: string
  icon?: string
}

export interface WorldConfig {
  id: WorldId
  label: string
  path: string
  searchPlaceholder: string
  yellow: string
  nav: NavItem[]
}

export const WORLDS: Record<WorldId, WorldConfig> = {
  fashion: {
    id: 'fashion',
    label: 'Clothing & Accessories',
    path: '/fashion',
    searchPlaceholder: 'Search clothing, shoes and accessories...',
    yellow: '#f8d465',
    nav: [
      { label: 'New Drop', href: '/fashion/new-drop' },
      { label: 'Women', href: '/fashion/women' },
      { label: 'Men', href: '/fashion/men' },
      { label: 'Children', href: '/fashion/children' },
      { label: 'Shoes', href: '/fashion/shoes' },
      { label: 'Bags & Accessories', href: '/fashion/bags' },
      { label: 'Dig the Pile', href: '/fashion/dig-the-pile' },
      { label: 'Stock Drop', href: '/fashion/stock-drop', badge: 'New' },
    ],
  },
  home: {
    id: 'home',
    label: 'Home & Electronics',
    path: '/home',
    searchPlaceholder: 'Search appliances, decor & electronics...',
    yellow: '#ffcc00',
    nav: [
      { label: 'Home', href: '/home', icon: 'home' },
      { label: 'Categories', href: '/home/categories', icon: 'grid' },
      { label: 'Energy Smart', href: '/home/energy-smart', badge: 'New' },
      { label: 'Stock Drops', href: '/home/stock-drops', badge: 'New' },
      { label: 'Find My Match', href: '/home/find-my-match', icon: 'sparkle' },
    ],
  },
}

export interface ProductSeed {
  id: string
  title: string
  price: number
  image: string
  rating?: number
  reviews?: number
}

export const FASHION_PRODUCTS: ProductSeed[] = [
  { id: 'f1', title: 'Vintage Leather Jacket', price: 150, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
  { id: 'f2', title: 'Camo Cargo Pants', price: 60, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80' },
  { id: 'f3', title: 'Air Jordan 1 Chicago', price: 290, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80' },
  { id: 'f4', title: 'Y2K Shoulder Bag', price: 75, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80' },
  { id: 'f5', title: 'Blue Windbreaker', price: 95, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80' },
  { id: 'f6', title: 'Striped Rugby Shirt', price: 55, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80' },
  { id: 'f7', title: 'Flame Graphic Tee', price: 45, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80' },
  { id: 'f8', title: 'Retro Sunglasses', price: 35, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80' },
]

export const HOME_PRODUCTS: ProductSeed[] = [
  { id: 'h1', title: 'Solar Power Station 600W', price: 5490, rating: 4.8, reviews: 126, image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80' },
  { id: 'h2', title: 'Inverter AC 1.5HP', price: 3899, rating: 4.6, reviews: 88, image: 'https://images.unsplash.com/photo-1585338107529-13afc5595a1d?auto=format&fit=crop&w=600&q=80' },
  { id: 'h3', title: 'Smart LED Ceiling Fan', price: 620, rating: 4.5, reviews: 204, image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=600&q=80' },
  { id: 'h4', title: 'Energy Star Fridge 200L', price: 2750, rating: 4.7, reviews: 61, image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80' },
]

export const HOME_CATEGORIES = [
  'Kitchen',
  'Small Appliances',
  'Cooling & Fans',
  'Home Décor',
  'Laundry',
  'Entertainment',
  'Power & Energy',
  'Smart Home',
]

export function formatFashionPrice(amount: number): string {
  return `GHC${amount}`
}

export function formatHomePrice(amount: number): string {
  return `GHS ${amount.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}
