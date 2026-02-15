import AppLayout from '@/layouts/app-layout';
import { logout } from '@/routes';
import { Link } from '@inertiajs/react';

export default function dashboard({}) {
  return (
    <AppLayout>
      <h1>Dashboard</h1>
      <Link href={logout()}>Logout</Link>
    </AppLayout>
  );
}
