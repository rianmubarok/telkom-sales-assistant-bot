const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "../data/logs.json");

function logQuestion(username, message) {
  const logEntry = {
    user: username || "unknown",
    message,
    time: new Date().toISOString(),
  };

  let logs = [];

  if (fs.existsSync(logPath)) {
    logs = JSON.parse(fs.readFileSync(logPath));
  }

  logs.push(logEntry);

  fs.writeFileSync(logPath, JSON.stringify(logs, null, 2));
}

module.exports = { logQuestion };
