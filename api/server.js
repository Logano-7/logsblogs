import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import config from "./config/index.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(cookieParser());

const upload = multer({ dest: "./uploads/" });

app.post("/api/upload", upload.single('file'), function (req, res) {
  console.log(req.file);
  res.status(200).json('File uploaded successfully');
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.listen(config.port, () => {
  console.log(`running on port ${config.port}`);
});
