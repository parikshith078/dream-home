import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;
  if (req.method === "GET") {
    try {
      const resources = ["branch", "owner", "staff", "property", "client"];
      const queryIndex = resources.indexOf(query + "");
      const resource = queryIndex !== -1 ? resources[queryIndex] : "branch";

      const info = await prisma[resource].findMany();
      res.status(200).json(info);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
