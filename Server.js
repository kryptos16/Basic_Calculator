const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {
  try {
    const { expression } = req.body;
    const result = eval(expression); // Evaluates the expression (simple logic)
    res.json({ result });
  } catch (error) {
    res.status(400).json({ result: "Error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
