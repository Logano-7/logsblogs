import express from 'express';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import config from './config/index.js';
import cookieParser from 'cookie-parser';
import cors from "cors";


const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);


app.listen(config.port, () => {
    console.log(`running on port ${config.port}`);
    });