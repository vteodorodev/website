'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  function isRouteActive(route: string): boolean {
    return pathname === route;
  }

  return (
    <header className="header">
      <Link href={'/'}>
        <h1 className="header__logo">VT</h1>
      </Link>
      <nav className="header__nav">
        <ul>
          <li>
            <Link href={'/'} className={isRouteActive('/') ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/about'}
              className={isRouteActive('/about') ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={'/portfolio'}
              className={isRouteActive('/portfolio') ? 'active' : ''}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
