import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../data/mysql";
import { OwnerFormType } from "../../../components/OwnerForm";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: OwnerFormType = JSON.parse(req.body);
  const query1 = `INSERT INTO owner(oid ,oname, addr) VALUES ('${data.oid}','${data.ownerName}', '${data.address}')`;

  await db.query(query1, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err, message: "error" });
    } else {
      console.log(result);
      res.status(200).json({ result, query1 });
    }
  });
  // res.status(500).json({ message: "error" });
}
