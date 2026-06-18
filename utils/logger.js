const fs = require("fs");

function logTransaction(entry) {
  const line =
    `[${new Date().toISOString()}] ` +
    JSON.stringify(entry) +
    "\n";

  fs.appendFileSync("logs/transactions.log", line);
}

module.exports = { logTransaction };
