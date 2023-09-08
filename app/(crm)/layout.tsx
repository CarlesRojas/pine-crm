import Header from '@/components/layout/Header';
import { requireAuth } from '@/lib/auth/utils';
import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  await requireAuth();

  return (
    <>
      <Header />
      {children}
    </>
  );
}
