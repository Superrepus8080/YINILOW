export type WorldId = 'fashion' | 'home'

export interface NavItem {
  label: string
  href: string
  badge?: string
}

export interface WorldConfig {
  id: WorldId
  label: string
  shortLabel: string
  path: string
  searchPlaceholder: string
  nav: NavItem[]
}

export const WORLDS: Record<WorldId, WorldConfig> = {
  fashion: {
    id: 'fashion',
    label: 'Clothing & Accessories',
    shortLabel: 'FASHION',
    path: '/fashion',
    searchPlaceholder: 'Search clothing, shoes and accessories...',
    nav: [
      { label: 'Home', href: '/fashion' },
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
    shortLabel: 'HOME + TECH',
    path: '/home',
    searchPlaceholder: 'Search appliances, decor & electronics...',
    nav: [
      { label: 'Home', href: '/home' },
      { label: 'Living', href: '/home/living' },
      { label: 'Tech', href: '/home/tech' },
      { label: 'Categories', href: '/home/categories' },
      { label: 'Energy Smart', href: '/home/energy-smart', badge: 'New' },
      { label: 'Stock Drops', href: '/home/stock-drops', badge: 'New' },
      { label: 'Find My Match', href: '/home/find-my-match' },
    ],
  },
}

export interface ProductSeed {
  id: string
  title: string
  priceGhc: number
  image: string
  badge?: string
  rating?: number
  reviews?: number
}

/** Seed catalog matching mockup product names / price points */
export const FASHION_PRODUCTS: ProductSeed[] = [
  {
    id: 'f1',
    title: 'Vintage leather jacket',
    priceGhc: 150,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'f2',
    title: 'Camo cargo pants',
    priceGhc: 60,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'f3',
    title: 'Air Jordan 1 Chicago (used)',
    priceGhc: 290,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'f4',
    title: 'Y2K shoulder bag',
    priceGhc: 75,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'f5',
    title: 'Flame graphic tee',
    priceGhc: 45,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'f6',
    title: 'Distressed denim jeans',
    priceGhc: 85,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1542272454315-7f6b2403de6e?auto=format&fit=crop&w=600&q=80',
  },
]

export const HOME_PRODUCTS: ProductSeed[] = [
  {
    id: 'h1',
    title: 'Solar Power Station 600W',
    priceGhc: 2490,
    badge: 'ENERGY SMART',
    rating: 4.8,
    reviews: 126,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'h2',
    title: 'Inverter AC 1.5HP',
    priceGhc: 3899,
    badge: 'ENERGY SMART',
    rating: 4.6,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1631545806609-5b0c5a1b8f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'h3',
    title: 'Smart LED Ceiling Fan',
    priceGhc: 620,
    rating: 4.5,
    reviews: 204,
    image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'h4',
    title: 'Energy Star Fridge 200L',
    priceGhc: 2750,
    badge: 'NEW',
    rating: 4.7,
    reviews: 61,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80',
  },
]

export const HOME_CATEGORIES = [
  { label: 'Kitchen', icon: '🍳' },
  { label: 'Small Appliances', icon: '🔌' },
  { label: 'Cooling & Fans', icon: '❄️' },
  { label: 'Home Décor', icon: '🛋️' },
  { label: 'Laundry', icon: '🧺' },
  { label: 'Entertainment', icon: '📺' },
  { label: 'Power & Energy', icon: '⚡' },
  { label: 'Smart Home', icon: '🏠' },
]

export function formatGhc(amount: number): string {
  return `GHC${amount.toLocaleString('en-GH')}`
}
