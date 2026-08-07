export type WorldId = 'fashion' | 'home'

export interface WorldConfig {
  id: WorldId
  label: string
  shortLabel: string
  path: string
  searchPlaceholder: string
  nav: { label: string; href: string; badge?: string }[]
}

export const WORLDS: Record<WorldId, WorldConfig> = {
  fashion: {
    id: 'fashion',
    label: 'Clothing & Accessories',
    shortLabel: 'Fashion',
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
    shortLabel: 'Home + Tech',
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
