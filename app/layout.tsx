import NextAuthProvider from '@/lib/auth/Provider';
import { checkAuth } from '@/lib/auth/utils';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pine CRM',
  description: 'Manage customer related objects.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  checkAuth();

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
