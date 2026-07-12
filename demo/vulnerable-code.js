// demo/vulnerable-code.js
   // Intentionally insecure — for Vorpal demo purposes only.

   const { exec } = require("child_process");
   const crypto = require("crypto");
   const fs = require("fs");

   function getUserByName(db, req) {
     const query = "SELECT * FROM users WHERE username = '" + req.body.username + "'";
     return db.query(query);
   }

   function listUserDirectory(req, res) {
     exec("ls -la " + req.query.dir, (err, stdout) => {
       res.send(stdout);
     });
   }

   function runUserExpression(req) {
     return eval(req.body.expression);
   }

   function hashPassword(password) {
     return crypto.createHash("md5").update(password).digest("hex");
   }

   function readUserFile(req, res) {
     const filePath = "./uploads/" + req.params.filename;
     fs.readFile(filePath, (err, data) => {
       res.send(data);
     });
   }

   module.exports = {
     getUserByName,
     listUserDirectory,
     runUserExpression,
     hashPassword,
     readUserFile,
   };
