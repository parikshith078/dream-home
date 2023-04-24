import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../data/mysql";
import { StaffFormType } from "../../../components/StaffForm";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: StaffFormType = JSON.parse(req.body);
  const query1 = `INSERT INTO staff(sid ,name, sex, dob, position, salary, ssid, mid) VALUES ('${data.sid}','${data.name}', '${data.gender}', '${data.dob}', '${data.position}', '${data.salary}', '${data.ssid}', '${data.mid}')`;

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
