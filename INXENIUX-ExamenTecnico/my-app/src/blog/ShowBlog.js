import axios from "axios"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import CompCreateBlog from "./CreateBlog"

const URI = 'http://localhost:8000/blogs/'


const CompShowBlogs = () => {

  const [isFormOpen, setFormOpen] = useState(false);

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  const [blogs, setBlog] = useState([])
  useEffect( () => {
    getBlogs()
  },[])

  //procedimiento para mostrar todos los datos de blogs
  const getBlogs = async () => {
    const res = await axios.get(URI)
    setBlog(res.data)
  }
  //procedimiento para eliminar un dato del blog
  const deleteBlog = async (id) => {
    await axios.delete(`${URI}${id}`)
    getBlogs()
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <table className='table table-dark table-striped mt-4 mb-4'>
            <thead className='table-primary'>
              <tr>
                <th>title</th>
                <th>content</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              { blogs.map ( (blog) => (
                <tr key={ blog.id}>
                  <td>{ blog.title }</td>
                  <td>{ blog.content }</td>
                  <td>
                        <Link to={'/edit/${blog.id}'} className='btn btn-info'><i className="fa-solid fa-pen"></i></Link>
                        <button onClick={ ()=>deleteBlog(blog.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className='btn btn-primary mt-2 mb-2' onClick={openForm}><i className="fa-solid fa-plus"></i> Nuevo </button>
          {isFormOpen && <CompCreateBlog isOpen={isFormOpen} onClose={closeForm}></CompCreateBlog>}
        </div>
      </div>
    </div>
  )
}

export default CompShowBlogs;
