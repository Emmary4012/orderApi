import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from  './routes/auth.js';
import hotelsRoute from  './routes/hotels.js';
import roomsRoute from  './routes/rooms.js';
import usersRoute from  './routes/users.js';
import cookieParser from "cookie-parser";
import productsRoute from "./routes/product.js";

const app = express();
dotenv.config();
app.use(
  cors({
  origin:"*",
})
);

const connect = async () => {
    
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.")
  } catch (error) {
    throw error;
  }
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/products", productsRoute);
app.use("/api/rooms", roomsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    connect()
})
