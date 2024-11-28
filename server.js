const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());

// Import routes
const booksRoute = require("./routes/booksRoute");

// Startup path
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

// Use routes
app.use("/api", booksRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});