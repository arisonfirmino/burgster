import { db } from "@/app/lib/prisma";

export const getUser = async (email: string | undefined) => {
  if (!email) return null;

  const user = await db.user.findUnique({ where: { email } });

  return JSON.parse(JSON.stringify(user));
};
