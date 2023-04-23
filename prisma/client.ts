import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global { }
  }
}

interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

// declare const global: CustomNodeJsGlobal;

const prisma = new PrismaClient();

export default prisma;
