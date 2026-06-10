const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Request Logger
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();

  const ip =
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress;

  console.log(
    JSON.stringify({
      level: "INFO",
      timestamp,
      ip,
      method: req.method,
      path: req.originalUrl,
      message: "Incoming Request"
    })
  );

  next();
});

// Home
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "express-loki-demo",
    timestamp: new Date().toISOString()
  });
});

// Success Log
app.get("/success", (req, res) => {
  console.log(
    JSON.stringify({
      level: "SUCCESS",
      timestamp: new Date().toISOString(),
      message: "Operation completed successfully"
    })
  );

  res.json({ success: true });
});

// Warning Log
app.get("/warning", (req, res) => {
  console.log(
    JSON.stringify({
      level: "WARNING",
      timestamp: new Date().toISOString(),
      message: "Potential issue detected"
    })
  );

  res.json({ warning: true });
});

// Error Log
app.get("/error", (req, res) => {
  console.error(
    JSON.stringify({
      level: "ERROR",
      timestamp: new Date().toISOString(),
      message: "Simulated error occurred"
    })
  );

  res.status(500).json({
    error: "Something went wrong"
  });
});

// CPU Stress Endpoint
app.get("/cpu-stress", (req, res) => {
  const seconds = Number(req.query.seconds || 10);

  const end = Date.now() + seconds * 1000;

  while (Date.now() < end) {
    Math.sqrt(Math.random() * 1000000);
  }

  console.log(
    JSON.stringify({
      level: "WARNING",
      timestamp: new Date().toISOString(),
      message: `CPU stressed for ${seconds} seconds`
    })
  );

  res.json({
    message: `CPU stressed for ${seconds} seconds`
  });
});

// Random Log Generator
const logLevels = [
  "INFO",
  "SUCCESS",
  "WARNING",
  "ERROR"
];

const messages = [
  "User logged in",
  "Database connection established",
  "Cache miss detected",
  "Slow response observed",
  "File uploaded",
  "Background job completed",
  "Payment processed",
  "API rate limit warning",
  "Unexpected exception",
  "Service health check passed"
];

setInterval(() => {
  const level =
    logLevels[Math.floor(Math.random() * logLevels.length)];

  const message =
    messages[Math.floor(Math.random() * messages.length)];

  console.log(
    JSON.stringify({
      level,
      timestamp: new Date().toISOString(),
      message
    })
  );
}, 3000);

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    JSON.stringify({
      level: "INFO",
      timestamp: new Date().toISOString(),
      message: `Server started on port ${PORT}`
    })
  );
});