import SignIn from '@/components/auth/SignIn';
import { requireNotAuth } from '@/lib/auth/utils';
import Image from 'next/image';

export default async function Signin() {
  await requireNotAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/logo512.png" alt="pine crm logo" width={512} height={512} priority />

      <p>Log in to start using Pine CRM</p>

      <SignIn />
    </main>
  );
}
