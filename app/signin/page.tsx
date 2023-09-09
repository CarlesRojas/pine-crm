import SignIn from '@/components/auth/SignIn';
import { requireNotAuth } from '@/lib/auth/utils';
import Image from 'next/image';

export default async function Signin() {
  await requireNotAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <Image className="w-24 rounded-full" src="/logo512.png" alt="pinecrm logo" width={512} height={512} priority />
      <h2 className="text-3xl font-semibold mb-6">PineCRM</h2>

      <SignIn />
    </main>
  );
}
