import { PrismaClient } from '@prisma/client';

import { events } from '../src/utils/data.json';

const prisma = new PrismaClient();

export async function main() {
  try {
    console.log(`Start seeding ...`);
    await prisma.event.createMany({ data: events });
    console.log(`Seeding finished.`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
main();
