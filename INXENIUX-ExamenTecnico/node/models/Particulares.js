//Importacion de la base de datos de datos de Particulares
import db from "../database/db.cjs";
import { DataTypes } from "sequelize";

const Particulares = db.sequelize.define('particulares', {
    
    I_pers:{ type: DataTypes.STRING},
    D_Pref:{type: DataTypes.STRING},
    T_Hab:{type: DataTypes.STRING},
    I_Mens:{type: DataTypes.STRING},
    V_año:{type: DataTypes.STRING},
    Libros:{type: DataTypes.STRING},
})

export default Particulares 