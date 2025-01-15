import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <Link href={'/'}>
        <h1 className="header__logo">VT</h1>
      </Link>
      <nav className="header__nav">
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/portfolio'}>Portfolio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
