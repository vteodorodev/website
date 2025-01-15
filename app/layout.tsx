import './globals.css';
import Header from '@/components/header';

import NoiseBackground from '@/public/img-noise-361x370.png';
import Image from 'next/image';

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
      {/* TODO: Find way to put background in css. NextJS isn't locating the file */}
      <body style={{ backgroundImage: `url(${NoiseBackground.src})` }}>
        <Header />
        <main>{children}</main>
        {/* <footer>© 2025 Vasco Teodoro • Built with NextJS</footer> */}
      </body>
    </html>
  );
}
