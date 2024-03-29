import { db } from '@/lib/db';
import { ComputerId, NewComputer, computerIdSchema, computers, insertComputerSchema } from '@/lib/db/schema/computers';
import { eq } from 'drizzle-orm';

export const createComputer = async (computer: NewComputer) => {
  const newComputer = insertComputerSchema.parse(computer);
  try {
    const [c] = await db.insert(computers).values(newComputer).returning();
    return { computer: c };
  } catch (err) {
    return { error: (err as Error).message ?? 'Error, please try again' };
  }
};

export const updateComputer = async (id: ComputerId, computer: NewComputer) => {
  const { id: computerId } = computerIdSchema.parse({ id });
  const newComputer = insertComputerSchema.parse(computer);
  try {
    const [c] = await db.update(computers).set(newComputer).where(eq(computers.id, computerId!)).returning();
    return { computer: c };
  } catch (err) {
    return { error: (err as Error).message ?? 'Error, please try again' };
  }
};

export const deleteComputer = async (id: ComputerId) => {
  const { id: computerId } = computerIdSchema.parse({ id });
  try {
    const [c] = await db.delete(computers).where(eq(computers.id, computerId!)).returning();
    return { computer: c };
  } catch (err) {
    return { error: (err as Error).message ?? 'Error, please try again' };
  }
};
