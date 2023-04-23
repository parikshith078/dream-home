// Require and initialize outside of your main handler
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "database-1.cdpq8ovfuj4r.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Expelliarmus2003",
  database: "dreamhome",
  port: "3306",
});

// Main handler function

export default db;
