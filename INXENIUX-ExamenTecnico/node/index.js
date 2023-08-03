import blogRoutes from "./routes/routes.js";
import cors from "cors";


const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.listen(port);
app.use("/blogs", blogRoutes);

app.get("/", (req, res)=>{
  res.send("La pagina de inicio");
});

console.log(`Listen on Port ${port}`);
