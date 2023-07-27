import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createBlog.css"

const URI = "http://localhost:8000/blogs/";

const CompCreateBlog = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();


  //Procedimiento para guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { title: title, content: content });
    navigate("/");
  };

  return (
    <div className={`form-container ${isOpen ? 'open' : ''}`}>
      <div className="form-content">
        <h3>Crear nuevo usuario</h3>
        <form onSubmit={store}>
            <div className="mb-3">
            <label className="form-label">Title</label>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                className="form-control"
            />
            </div>
            <button type="submit" className="btn btn-primary">
            store
            </button>
        </form>
      </div>
    </div>
  );
};

export default CompCreateBlog;
