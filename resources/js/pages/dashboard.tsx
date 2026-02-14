import { logout } from '@/routes';
import { Link } from '@inertiajs/react';

export default function dashboard({}) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href={logout()}>Logout</Link>
    </div>
  );
}
