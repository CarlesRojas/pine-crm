import SignIn from '@/components/auth/SignIn';
import { requireAuth } from '@/lib/auth/utils';
import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  await requireAuth();

  return (
    <>
      <SignIn />
      {children}
    </>
  );
}
