import AppLogoIcon from '@/components/app-logo-icon';
import { dashboard } from '@/routes';
import { Link } from '@inertiajs/react';
import {
  ArrowFatLinesLeftIcon,
  ArrowFatLinesRightIcon,
  Icon,
} from '@phosphor-icons/react';
import { cn, isSameUrl } from '../../lib/utils';

type SidebarProps = {
  appName: string;
  navigationItems: {
    name: string;
    href: string;
    icon: Icon;
  }[];
  url: string;
  isMinimized: boolean;
  setIsMinimized: (isMinimized: boolean) => void;
};

export default function Sidebar({
  appName,
  navigationItems,
  url,
  isMinimized,
  setIsMinimized,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        'hidden rounded-r-2xl bg-grey-900 transition-all duration-300 lg:grid lg:grid-rows-[101px_1fr_163px]',
        isMinimized ? 'w-20' : 'w-75',
      )}
    >
      <Link
        href={dashboard()}
        className={cn(
          'flex items-center gap-2 py-10',
          isMinimized ? 'justify-center' : 'px-8',
        )}
      >
        <AppLogoIcon fill="hsl(0, 0%, 70%)" />
        {!isMinimized && (
          <span className="text-2xl font-bold text-grey-300">{appName}</span>
        )}
      </Link>
      <nav className="flex flex-col gap-2">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'flex h-14 items-center gap-2 rounded-r-lg text-grey-300 transition-all',
              isSameUrl(url, item.href) && 'bg-beige-100 text-grey-900',
              isMinimized ? 'w-16' : 'w-69',
            )}
          >
            <div
              className={cn(
                'mr-4 h-full w-1.5',
                isSameUrl(url, item.href) && 'bg-green-custom',
              )}
            />
            <item.icon
              weight="fill"
              color={cn(
                isSameUrl(url, item.href)
                  ? 'hsl(177, 52%, 32%)'
                  : 'hsl(0, 0%, 70%)',
              )}
              className={cn('h-6 w-6')}
            />
            {!isMinimized && (
              <span className="text-[16px] font-bold">{item.name}</span>
            )}
          </Link>
        ))}
      </nav>
      <div
        className={cn(
          'flex cursor-pointer items-center gap-2 py-4 transition-all',
          isMinimized ? 'justify-center' : 'px-8',
        )}
        onClick={() => setIsMinimized(!isMinimized)}
      >
        {isMinimized ? (
          <ArrowFatLinesRightIcon
            size={24}
            weight="fill"
            color="hsl(0, 0%, 70%)"
          />
        ) : (
          <ArrowFatLinesLeftIcon
            size={24}
            weight="fill"
            color="hsl(0, 0%, 70%)"
          />
        )}

        {!isMinimized && (
          <span className="text-[16px] text-grey-300">Minimize Menu</span>
        )}
      </div>
    </aside>
  );
}
