import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Time to get to it
app.use(bodyParser.json());

// server static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  console.log("[GET ROUTE]");
  res.sendFile(path.join(__dirname, "public", "index.html")); // Send the index.html file
});

app.listen(PORT, () =>
  console.log(`Server running on port: https://localhost:${PORT}`)
);
