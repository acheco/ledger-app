import AppLogo from '@/components/app-logo';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-rows-[69.76px_1fr] bg-beige-100 lg:grid-rows-1">
      <header className="rounded-b-lg bg-grey-900 px-10 py-4 text-center text-3xl font-bold text-white lg:hidden">
        <h1>Ledger</h1>
      </header>

      <div className="h-full lg:grid lg:grid-cols-2 xl:grid-cols-[560px_1fr]">
        <div className="lg:p-5">
          <aside className="hidden lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-between lg:rounded-md lg:bg-grey-900 lg:p-10">
            <div>
              <Link
                href={home()}
                className="flex items-center gap-3 text-white"
              >
                <AppLogoIcon fill="#ffffff" />
                <h1 className="text-2xl font-bold">Ledger</h1>
              </Link>
            </div>

            <div>
              <AppLogo className="w-full" />
            </div>

            <div>
              <p className="leading-1.2 mb-4 text-[32px] font-bold tracking-normal text-white">
                Keep track of your money <br /> and save for your future
              </p>
              <p className="text-sm leading-normal tracking-normal text-white">
                Personal finance app puts you in control of your spending. Track
              </p>
              <p className="text-sm leading-normal tracking-normal text-white">
                transactions, set budgets, and add to savings pots easily.
              </p>
            </div>
          </aside>
        </div>

        <main className="flex h-full w-full items-center justify-center px-4">
          {children}
        </main>
      </div>
    </div>
  );
}
