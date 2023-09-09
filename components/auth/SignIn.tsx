'use client';
import Identicon from 'identicon.js';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { RiGoogleFill, RiLoader3Fill } from 'react-icons/ri';
import randomWithSeed from 'seed-random';

const random = (min: number, max: number, random: () => number) => Math.floor(random() * (max - min + 1)) + min;

export default function SignIn() {
  const { data: session, status } = useSession();

  if (status === 'loading')
    return (
      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-700 p-2 shadow-md">
        <RiLoader3Fill className="animate-spin w-full h-full" />
      </div>
    );

  if (session) {
    const getRandom = randomWithSeed(session.user.id);

    const src =
      session.user.image ??
      `data:image/png;base64,${new Identicon(session.user.id, {
        foreground: [random(0, 255, getRandom), random(0, 255, getRandom), random(0, 255, getRandom), 128],
        background: [255, 255, 255, 255],
        margin: 0,
        size: 300
      }).toString()}`;

    return (
      <button onClick={() => signOut()}>
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-300 dark:bg-zinc-600 p-2 shadow-md hover:scale-105">
          <Image src={src} alt="user avatar" fill priority />
        </div>
      </button>
    );
  }

  return (
    <button
      className="relative dark:bg-zinc-50 bg-zinc-950 dark:text-zinc-950 text-zinc-50 rounded-full px-6 h-12 flex items-center gap-4 shadow-md hover:scale-105"
      onClick={() => signIn('google', { redirect: true, callbackUrl: '/' })}
    >
      <RiGoogleFill className="w-6 h-6" />
      <p className="font-semibold">Sign in with Google</p>
    </button>
  );
}
