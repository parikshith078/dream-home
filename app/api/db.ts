import mysqlDb from "../../lib/connection";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  mysqlDb.query("SELECT * FROM branch", function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  });
  res.status(200).json({ name: "John Doe" });
}
