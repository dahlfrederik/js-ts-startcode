import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const app = express();

//app.use('/static', express.static('public'))
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/demo", (req, res) => {
  let a = 134;
  console.log(a);
  res.send("Server is up");
});

export default app;
