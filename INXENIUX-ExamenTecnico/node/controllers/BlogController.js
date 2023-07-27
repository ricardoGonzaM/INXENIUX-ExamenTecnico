//importamos el modelo que se hizo
import Blogmodel from "../models/BlogModel.js";

//Vizualizar los datos de la base de datos
export const  getAllBlogs = async (req, res)=> {
    try {
           const blogs = await Blogmodel.findAll()
           res.json(blogs)
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Vizualizar un registro
export const getBlog = async (req, res)=> {
        try {
           const  blog = await Blogmodel.findAll({
                where: { id: req.params.id}
            })
            res.json(blog[0])
        } catch (error) {
            res.json({ error: error.message })
        }
}
//Crear un registro
export const createBlog = async (req, res)=> {
    try {
        await Blogmodel.create( req.body )
        res.json({"message": "!!Los datos han sido guardados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Borrar algun dato de la base de datos
export const deleteBlog = async (req,res)=> {
    try {
       await Blogmodel.destroy({
            where: { id: req.params.id}
        })
        res.json({"message": "!!Los datos han sido Eliminados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Editar algun dato en la base de datos
export const updateBlog = async (req, res)=> {
    try {
        await Blogmodel.update( req.body, {
            where: { id: req.params.id}
        })
        res.json({"message": "!!Los datos han sido Actualizados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}