import express from "express";

const app = express(); // library express initialized

const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Dilla mniez",
  });
});

// Catch all undefined routes
app.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

// start the server
app.listen(PORT, () => {
  console.log(`Server started, listening on port ${PORT}`);
});
