import { PrismaClient, type User } from '@prisma/client';
import type { PageServerLoad } from './$types'

type OutputType = { product: Array<User> }

const prisma = new PrismaClient();

export const load: PageServerLoad<OutputType> = async ({ params, locals }) => {
  return {
    users: await prisma.user.findMany()
  };
}