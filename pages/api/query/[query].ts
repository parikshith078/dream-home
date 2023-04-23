import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../data/mysql";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;

  db.query(query, (err, result) => {
    if (err) {
      console.log("error");
      console.log(err);
      res.status(500).json({ error: err, message: "error" });
    } else {
      console.log(result);
      res.status(200).json({ result, query });
    }
  });
}
