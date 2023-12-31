import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import newsletterRoute from "./routes/newsletterRoute.js";
import reservationRoute from "./routes/reservationRoute.js";
import myBookingRoute from "./routes/myBookingRoute.js";
import serverless from "serverless-http";

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
app.use("/", myBookingRoute);
app.use("/", newsletterRoute);
app.use("/", reservationRoute);

app.get("/", (req, res) => {
  res.send("Hello from Deluxe server!");
});

// CONNECT TO SERVER
export const handler = serverless(app)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
