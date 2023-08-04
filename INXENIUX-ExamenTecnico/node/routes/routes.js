//rutas del sistema
const express = require("express")
const router = express.Router();
const BlogController = require ("../controllers/BlogController.js");

//Rutas de General
router.get("/gene", BlogController.getAll);
router.get("/gene/:id", BlogController.getById);
router.post("/gene", BlogController.create);
router.delete("/gene/:id", BlogController.delete);
router.put("/gene/:id", BlogController.update);

//Rutas de Direccion
router.get("/dire", BlogController.getAllDireccions);
router.get("/dire/:id", BlogController.getByIdDireccions);
router.post("/dire", BlogController.createDireccions);
router.delete("/dire/:id", BlogController.deleteDireccions);
router.put("/dire/:id", BlogController.updateDireccions);

//Rutas de Particulares
router.get("/part", BlogController.getAllParticulares);
router.get("/part/:id", BlogController.getByIdParticulares);
router.post("/part", BlogController.createParticulares);
router.delete("/part/:id", BlogController.deleteParticulares);
router.put("/part/:id", BlogController.updateParticulares);



module.exports = router
