import type { NextApiRequest, NextApiResponse } from "next";
import { BranchFormType } from "../../../components/BranchForm";
import db from "../../../data/mysql";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: BranchFormType = JSON.parse(req.body);
  try {
    const query1 = `insert into branch(bid, b_add, mid, loc) values('${data.branchId}', '${data.address}', '${data.mid}', '${data.location}')`;
    const query2 = `insert into manager (mid, start_date, bonus, bid) values( '${data.mid}', '${data.managerStartDate}', '${data.bonus}', '${data.branchId}')`;
    const query3 = `insert into staff (sid, name, sex, position, salary, ssid, mid, dob) values( '${data.sid}', '${data.managerName}', '${data.managerGender}', '${data.position}', '${data.managerSalary}','${data.ssid}' , '${data.mid}', '${data.managerDOB}')`;
    const query4 = `insert into telephone_branch( bid, phone_number) values('${data.branchId}', '${data.telephone}')`;
    console.log(data);

    await db.query(query1);
    await db.query(query2);
    await db.query(query3, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: err, message: "error" });
      } else {
        console.log(result);
        res.status(200).json({ result, query3 });
      }
    });
    await db.query(query4);

    res.status(200).json({ message: "Queries executed successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error, message: "Error executing queries" });
  }
  // res.status(500).json({ message: "error" });
}
