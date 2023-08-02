import express from "express";
import cors from "cors";
// importacion de la base de datos

import blogRoutes from "./routes/routes.js";
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/blogs", blogRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("Server Up running ");
});
