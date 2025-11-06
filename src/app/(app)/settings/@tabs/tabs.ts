type Tab = { id: number; value: string; label: string; href: string }

export const TABS: Tab[] = [
  { id: 1, value: 'account', label: 'Account', href: '/account' },
  {
    id: 2,
    value: 'organization',
    label: 'Organization',
    href: '/organization',
  },
  { id: 3, value: 'billing', label: 'Billing', href: '/billing' },
  {
    id: 4,
    value: 'notification',
    label: 'Notification',
    href: '/notification',
  },
]
