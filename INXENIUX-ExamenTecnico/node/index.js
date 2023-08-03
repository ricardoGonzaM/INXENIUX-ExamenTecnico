//import blogRoutes from "./routes/routes.js";
import cors from "cors";
import dba from "../database/db.js";


const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.listen(port);
//app.use("/blogs", blogRoutes);

app.get("/", (req, res)=>{
  res.send("La pagina de inicio");
});

dba.getConnection((err, conn) => {
  if(err) console.log(err)
  console.log("conexion exitosa")
})

console.log(`Listen on Port ${port}`);
