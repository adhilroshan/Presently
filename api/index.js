import express from "express";
import { exec } from "child_process";
import { writeFileSync } from "fs";
import cors from "cors";
import path from "path";
import os from "os";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Python Code Execution API" });
});

const tempFileName = "temp.py";
const tempFilePath = path.join(os.tmpdir(), tempFileName); // Use a temporary directory

app.post("/run-python", (req, res) => {
  const { code } = req.body;

  // Save the Python code to a temporary file
  writeFileSync(tempFilePath, code);

  // Execute the Python code
  exec(`python ${tempFilePath}`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr });
    }
    res.json({ output: stdout });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
