import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sponsorship Decision Engine',
  description: 'Sponsorship tooling dashboard',
};

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/opportunities', label: 'Opportunities' },
  { href: '/reports', label: 'Reports' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link className="text-lg font-semibold text-slate-900" href="/">
              Sponsorship Decision Engine
            </Link>
            <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-slate-900" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
