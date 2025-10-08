import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});