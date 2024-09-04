import express from "express";
import { exec } from "child_process";
import { writeFileSync } from "fs";
import cors from "cors"; // Import the cors middleware

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Python Code Execution API" });
});

app.post("/run-python", (req, res) => {
  const { code } = req.body;

  // Save the Python code to a temporary file
  const tempFileName = "temp.py";
  writeFileSync(tempFileName, code);

  // Execute the Python code
  exec(`python ${tempFileName}`, (error, stdout, stderr) => {
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
