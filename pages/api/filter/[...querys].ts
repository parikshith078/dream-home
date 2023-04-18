import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import { decodePriceRange } from "../../../data/dataQuery";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { querys } = req.query;
  if (typeof querys !== "undefined") {
    const branch: fetchQueryType = querys[0];
    const type: fetchQueryType = querys[1];
    const price: fetchQueryType = querys[2];
    const info = [branch, type, price];
    /* const filter: any[] = []; */

    // Loop through the parameters and add conditions to the filter object    // info.forEach((param: any, index: any) => {
    //   if (param !== "all") {
    //     // Use dynamic object keys to add the condition to the filter object
    //     filter[index] = param;
    //   }
    // });

    // Use the filter object in the Prisma query
    const data = await prisma.property.findMany({
      where: {
        type: filterType(type),
        rent: decodePriceRange(price),
        branch: branchFilter(branch),
      },
    });

    res.status(200).json({ data });
  }
}

type fetchQueryType = string;
function filterType(input: string): string | {} {
  if (input === "all") {
    return {};
  } else {
    return input;
  }
}

function branchFilter(input: string): { b_add: string } | {} {
  if (input === "all") {
    return {};
  } else {
    return { loc: input };
  }
}
