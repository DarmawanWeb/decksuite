import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prismaClientSingleton = () => {
  return new PrismaClient({ adapter });
};
declare global {
  var prismaGlobal: ReturnType<typeof prismaClientSingleton>;
}
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}
export default prisma;
