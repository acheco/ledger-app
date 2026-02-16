import MobileNav from '@/components/mobile-nav';
import Sidebar from '@/components/sidebar';
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
import React, { useState } from 'react';
import { cn } from '../../lib/utils';

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
  const appName = usePage<{ name: string }>().props.name;

  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[1fr_52px] bg-beige-100 md:grid-rows-[1fr_74px] lg:grid-rows-1">
      <div
        className={cn(
          'grid',
          isMinimized ? 'grid-cols-[80px_1fr]' : 'grid-cols-[300px_1fr]',
        )}
      >
        <Sidebar
          appName={appName}
          navigationItems={navigationItems}
          url={url}
          isMinimized={isMinimized}
          setIsMinimized={setIsMinimized}
        />

        <main className="px-10 py-8">{children}</main>
      </div>
      <footer className="grid content-end bg-grey-900 sm:px-2 md:px-5 lg:hidden">
        <MobileNav navItems={navigationItems} currentPath={url} />
      </footer>
    </div>
  );
}
