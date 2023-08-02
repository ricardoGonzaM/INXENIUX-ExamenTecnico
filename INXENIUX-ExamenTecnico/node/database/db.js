//Conexion de la base de datos
const mysql = require('mysql2');

const  db = new mysql.createPool({
        host: process.env.DB_HOST, 
        user: process.env.DB_USERNAME, 
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DBNAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
})

db.getConnection((err, conn) => {
        if(err) console.log(err)
        console.log("conexion exitosa")
})

module.exports = db.promise()