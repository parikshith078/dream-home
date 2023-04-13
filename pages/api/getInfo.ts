import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../prisma/client";

export default async function getInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const info = await prisma.branch.findMany();
      res.status(200).json(info);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
