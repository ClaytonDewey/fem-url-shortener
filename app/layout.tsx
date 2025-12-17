import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './sass/style.scss';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Shortly URL shortening API Challenge',
  description:
    'Shorten links, customize URLs, and track clicks instantly with our secure, easy-to-use URL shortener.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
