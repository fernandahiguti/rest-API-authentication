import express from 'express';
import http from "http";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server running on port 8080");
})

const MONGO_URL=process.env.MONGO_URL

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));
