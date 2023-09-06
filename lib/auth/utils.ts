import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './options';

export const getUserAuth = async () => {
  const session = await getServerSession(authOptions);
  return { session };
};

export const requireAuth = async () => {
  const { session } = await getUserAuth();
  if (!session) redirect('/api/auth/signin');
};

export const requireNotAuth = async () => {
  const { session } = await getUserAuth();
  if (session) redirect('/');
};
