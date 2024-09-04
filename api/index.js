import express from "express";
import { exec } from "child_process";
import { writeFileSync, unlinkSync } from "fs";
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
  try {
    writeFileSync(tempFileName, code);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Failed to write to the temporary file" });
  }

  // Execute the Python code
  exec(`python ${tempFileName}`, (error, stdout, stderr) => {
    // Delete the temporary file after execution
    unlinkSync(tempFileName);

    if (error) {
      // Return the error as a JSON response
      return res.json({ error: stderr });
    }

    res.json({ output: stdout });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
