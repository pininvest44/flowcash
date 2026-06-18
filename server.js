require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const stkRoute = require("./routes/stk");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use("/api/stk", stkRoute);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public/index.html")
  );
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
