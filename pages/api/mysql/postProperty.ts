import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../data/mysql";
import { PropertyFormType } from "../../../components/PropertyForm";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: PropertyFormType = JSON.parse(req.body);
  const query1 = `INSERT INTO property (pid, type, rooms, rent, prop_addr, oid, reg_by, reg_at, reg_date) VALUES ('${data.pid}', '${data.propertyType}','${data.noOfRooms}' , '${data.rentPrice}', '${data.address}', '${data.ownerId}', '${data.regBy}', '${data.regAt}', '${data.date}');`;

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
