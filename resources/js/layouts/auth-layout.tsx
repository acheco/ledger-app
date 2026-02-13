export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-rows-[69.76px_1fr] bg-beige-100">
      <header className="rounded-b-lg bg-grey-900 px-10 py-4 text-center text-3xl font-bold text-white lg:hidden">
        Ledger
      </header>

      <div className="h-full">
        <aside className="hidden"></aside>

        <main className="flex h-full w-full flex-col justify-center px-4">
          {children}
        </main>
      </div>
    </div>
  );
}
