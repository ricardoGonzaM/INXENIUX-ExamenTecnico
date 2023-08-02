//Conexion de la base de datos
import { Sequelize } from "sequelize";

const  db = new Sequelize({
        host: process.env.DB_HOST, 
        user: process.env.DB_USERNAME, 
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DBNAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
})

export default db