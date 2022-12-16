import { PrismaClient, type User } from '@prisma/client';
import type { PageServerLoad } from './$types'

type OutputType = { users: Array<User>, session: any }

const prisma = new PrismaClient();

export const load = (async ({ params, locals }): Promise<OutputType> => {
  return {
    users: await prisma.user.findMany(),
    session: await locals.getSession(),
  };
}) satisfies PageServerLoad;
