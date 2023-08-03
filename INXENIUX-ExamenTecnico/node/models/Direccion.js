//Importacion de la base de datos de datos de Destinos
import db from "../database/db.cjs";

import { DataTypes } from "sequelize";

const Direccion = db.sequelize.define('direccions', {
    
    Calle:{type: DataTypes.STRING},
    N_Int:{type: DataTypes.NUMBER},
    N_Ext:{type: DataTypes.NUMBER},
    Colonia:{type: DataTypes.STRING},
    Municipio:{type: DataTypes.STRING},
    Estado:{type: DataTypes.STRING},
})

export default Direccion 