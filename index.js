const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;
const corsAllowOrigin = (process.env.CORS_ALLOW_ORIGIN ?? []).split(",");
console.log(corsAllowOrigin);

app.use(
  cors({
    origin: corsAllowOrigin,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("test");
});

app.post("/", upload.single("file"), (req, res) => {
  console.log(1, req.file);
  res.end();
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
