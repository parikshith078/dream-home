import mysql from "mysql";

const mysqlDb = mysql.createConnection({
  host: "database-1.cdpq8ovfuj4r.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Expelliarmus2003",
  database: "dremhome",
});

mysqlDb.connect(function (err: any) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + mysqlDb.threadId);
});

export default mysqlDb;
