const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env.development") });
const ConcernRoutes = require("../routes/concerns-routes");
const AuthRoutes = require("../routes/auth-routes");
const cors = require("cors");
const compression = require("compression");
const imageRoutes = require("../routes/image-routes");

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const APIKey = process.env.OPENROUTER_API_KEY;

console.log("OpenAI API Key:", APIKey ? "Loaded" : "Missing");

app.use("/", ConcernRoutes);
app.use("/", AuthRoutes);
app.use("/", imageRoutes);

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
  console.log("Server is Awake!");
});

app.use(compression());
app.use(express.static(path.resolve(__dirname, "dist")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
