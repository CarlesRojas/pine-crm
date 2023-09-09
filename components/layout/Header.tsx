import Image from 'next/image';
import SignIn from '../auth/SignIn';

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-2">
      <div className="flex gap-3 items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-300 dark:bg-zinc-600 p-2 shadow-md hover:scale-105">
          <Image src="/logo512.png" fill priority alt="pinecrm logo" />
        </div>
        <h1 className="text-lg font-semibold">PineCRM</h1>
      </div>

      <SignIn />
    </header>
  );
}
