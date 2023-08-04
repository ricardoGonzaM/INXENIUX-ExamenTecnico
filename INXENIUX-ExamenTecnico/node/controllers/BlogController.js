//importamos el modelo que se hizo
const db = require("../database/db.js")

//General
/**
 * Vizualizar los datos de la base de datos
 * @param req es un objeto que contiene información sobre la petición HTTP que ha provocado el evento.
 * @param res para devolver la respuesta HTTP deseada.
 */
const BlogController = {
//Vizualizar los datos de la base de datos
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await db.query("select * from generales")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
//Vizualizar un registro
    getById: async (req, res) => {
    try {
        const { id } = req.params
        const [rows, fields] = await db.query("select * from generales where id = ?", [id])
        res.json({
            data: rows
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "error"
        })
    }
    },
//Crear un registro
    create: async (req, res) => {
    try {
        const { Nombre, Ap_Paterno, Ap_Materno, Edad, Sexo} = req.body
        const sql = "insert into generales (Nombre, Ap_Paterno, Ap_Materno, Edad, Sexo) values (?, ?, ?, ?, ?)"
        const [rows, fields] = await db.query(sql, [Nombre, Ap_Paterno, Ap_Materno, Edad, Sexo])
        res.json({
            data: rows
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "error"
        })
    }
    },
//Borrar algun dato de la base de datos
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await db.query("delete from generales where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
//Editar algun dato en la base de datos
    update: async (req, res) => {
        try {
            const { Nombre, Ap_Paterno, Ap_Materno, Edad, Sexo } = req.body
            const { id } = req.params
            const sql = "update generales set Nombre = ?, Ap_Paterno = ?, Ap_Materno = ?, Edad = ?, Sexo = ? where id = ?"
            const [rows, fields] = await db.query(sql, [Nombre, Ap_Paterno, Ap_Materno, Edad, Sexo, id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

//Direccion
//Vizualizar los datos de la base de datos
    getAllDireccions: async (req, res) => {
        try {
            const [rows, fields] = await db.query("select * from direccions")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
//Vizualizar un registro
    getByIdDireccions: async (req, res) => {
    try {
        const { id } = req.params
        const [rows, fields] = await db.query("select * from direccions where id = ?", [id])
        res.json({
            data: rows
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "error"
        })
    }
    },
//Crear un registro
    createDireccions: async (req, res) => {
    try {
        const { Calle, N_Int, N_Ext, Colonia, Municipio, Estado} = req.body
        const sql = "insert into direccions (Calle, N_Int, N_Ext, Colonia, Municipio, Estado) values (?, ?, ?, ?, ?, ?)"
        const [rows, fields] = await db.query(sql, [Calle, N_Int, N_Ext, Colonia, Municipio, Estado])
        res.json({
            data: rows
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "error"
        })
    }
    },
//Borrar algun dato de la base de datos
    deleteDireccions: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await db.query("delete from direccions where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
//Editar algun dato en la base de datos
    updateDireccions: async (req, res) => {
        try {
            const { Calle, N_Int, N_Ext, Colonia, Municipio, Estado } = req.body
            const { id } = req.params
            const sql = "update direccions set Calle = ?, N_Int = ?, N_Ext = ?, Colonia = ?, Municipio = ?, Estado = ? where id = ?"
            const [rows, fields] = await db.query(sql, [Calle, N_Int, N_Ext, Colonia, Municipio, Estado, id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

//Particulares
//Vizualizar los datos de la base de datos
    getAllParticulares: async (req, res) => {
        try {
            const [rows, fields] = await db.query("select * from particulares")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
//Vizualizar un registro
    getByIdParticulares: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await db.query("select * from particulares where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
//Crear un registro
    createParticulares: async (req, res) => {
        try {
            const { I_pers, D_Pref, T_Hab, I_Mens, V_año, Libros} = req.body
            const sql = "insert into particulares (I_pers, D_Pref, T_Hab, I_Mens, V_año, Libros) values (?, ?, ?, ?, ?, ?)"
            const [rows, fields] = await db.query(sql, [I_pers, D_Pref, T_Hab, I_Mens, V_año, Libros])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
//Borrar algun dato de la base de datos
    deleteParticulares: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await db.query("delete from particulares where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
//Editar algun dato en la base de datos
    updateParticulares: async (req, res) => {
        try {
            const { I_pers, D_Pref, T_Hab, I_Mens, V_año, Libros } = req.body
            const { id } = req.params
            const sql = "update particulares set I_pers = ?, D_Pref = ?, T_Hab = ?, I_Mens = ?, V_año = ?, Libros = ? where id = ?"
            const [rows, fields] = await db.query(sql, [I_pers, D_Pref, T_Hab, I_Mens, V_año, Libros, id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

}

module.exports = BlogController