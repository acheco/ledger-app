import MobileNav from '@/components/mobile-nav';
import { dashboard } from '@/routes';
import { usePage } from '@inertiajs/react';
import {
  ArrowsDownUpIcon,
  ChartDonutIcon,
  GearIcon,
  HouseIcon,
  ReceiptIcon,
  TipJarIcon,
} from '@phosphor-icons/react';
import React from 'react';

const navigationItems = [
  {
    name: 'Overview',
    href: dashboard().url,
    icon: HouseIcon,
  },
  {
    name: 'Transactions',
    href: '#',
    icon: ArrowsDownUpIcon,
  },
  {
    name: 'Budgets',
    href: '#',
    icon: ChartDonutIcon,
  },
  {
    name: 'Pots',
    href: '#',
    icon: TipJarIcon,
  },
  {
    name: 'Recurring Bills',
    href: '#',
    icon: ReceiptIcon,
  },
  {
    name: 'Settings',
    href: '#',
    icon: GearIcon,
  },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { url } = usePage();

  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[1fr_52px] bg-beige-100 md:grid-rows-[1fr_74px]">
      <main className="">{children}</main>
      <footer className="grid content-end bg-grey-900 sm:px-2 md:px-5 lg:hidden">
        <MobileNav navItems={navigationItems} currentPath={url} />
      </footer>
    </div>
  );
}
