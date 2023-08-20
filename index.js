import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import newsletterRoute from "./routes/newsletterRoute.js";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// ROUTES
app.post("/newsletter", newsletterRoute);

// CONNECT TO SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});