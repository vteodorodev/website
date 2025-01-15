import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';

//TODO: Add description
export const metadata = {
  title: 'Vasco Teodoro',
  description: 'The personal website of Vasco Teodoro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        {/* <footer>© 2025 Vasco Teodoro • Built with NextJS</footer> */}
      </body>
    </html>
  );
}
