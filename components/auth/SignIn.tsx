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
      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 p-2 shadow-md">
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
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-600 p-2 shadow-md hover:scale-105">
          <Image src={src} alt="user avatar" fill />
        </div>
      </button>
    );
  }

  return (
    <button onClick={() => signIn('google', { redirect: true, callbackUrl: '/' })}>
      <RiGoogleFill />
      <p>Sign in with Google</p>
    </button>
  );
}
