import axios from "axios";
import { useState } from "react";
import "./createBlog.css";

const URI = "http://localhost:8000/blogs/gene";

const FormModal = (edit, create) => {
  const [formData, setFormData] = useState({
    Nombre: "",
    Ap_Paterno: "",
    Ap_Materno: "",
    Edad: "",
    Sexo: "",
    Calle: "",
    N_Int: "",
    N_Ext: "",
    Colonia: "",
    Municipio: "",
    Estado: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const history = useHistory();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      const postGeneral = await axios.post(URI, {
        Nombre: formData.Nombre,
        Ap_Paterno: formData.Ap_Paterno,
        Ap_Materno: formData.Ap_Materno,
        Edad: formData.Edad,
        Sexo: formData.Sexo,
      });

      const postDirec = await axios.post("http://localhost:8000/blogs/dire", {
        Calle: formData.Calle,
        N_Int: formData.N_Int,
        N_Ext: formData.N_Ext,
        Colonia: formData.Colonia,
        Municipio: formData.Municipio,
        Estado: formData.Estado,
      });

      // Handle the response as needed
      console.log("POST request successful:", formData);

      setLoading(false);
      window.location.reload();
    } catch (err) {
      setLoading(false);
      setError("An error occurred while making the request.");
      console.error(err);
    }
  };

  // Actualizar
  /*
  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI+id, {title: title, content: content})
    navigate('/')
}
*/

  return (
    <div>
      <button
        type="button"
        className="shadow__btn"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <i className="fa-solid fa-plus"> Nuevo Usuario</i>
      </button>
      <div
        className="modal fade modal-lg"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title center" id="exampleModalLabel">
                AGREGAR NUEVO USUARIO
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Generales */}
                <fieldset className="field-container row form-group">
                  <legend>Generales</legend>
                  {/* Name */}
                  <div className="input-group mb-3 ">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="Nombre">
                        Nombre
                      </span>
                    </div>
                    <input
                      className="form-control"
                      type="text"
                      aria-describedby="basic-addon1"
                      value={formData.Nombre}
                      name="Nombre"
                      onChange={handleChange}
                    />
                  </div>
                  {/* Ap. Paterno */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="Ap_Paterno">
                        Ap. Paterno
                      </span>
                    </div>
                    <input
                      type="text"
                      aria-describedby="basic-addon1"
                      name="Ap_Paterno"
                      value={formData.Ap_Paterno}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  {/* Ap. Materno */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="Ap_Materno">
                        Ap. Materno
                      </span>
                    </div>
                    <input
                      type="text"
                      aria-describedby="basic-addon1"
                      className="form-control"
                      name="Ap_Materno"
                      value={formData.Ap_Materno}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Edad & sexo */}
                  <div className="nested-field">
                    <div className="input-group mb-3 nested-input">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="Edad">
                          Edad
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="Edad"
                        value={formData.Edad}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="sexo_id">
                          Sexo
                        </label>
                      </div>
                      <select
                        className="form-select"
                        id="sexo_id"
                        name="Sexo"
                        value={formData.Sexo}
                        onChange={handleChange}
                      >
                        <option value="Seleccionar">Seleccionar el sexo</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                      </select>
                    </div>

                  </div>
                </fieldset>
                {/* Direccion */}
                <fieldset className="field-container row form-group">
                  <legend>Direccion</legend>
                  {/* Calle */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        Calle
                      </span>
                    </div>
                    <input
                      type="text"
                      aria-describedby="basic-addon1"
                      className="form-control"
                      name="Calle"
                      value={formData.Calle}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Num. Int */}
                  <div className="nested-field">
                    <div className="input-group mb-3 nested-input">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Num. Int
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="N_Int"
                        value={formData.N_Int}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Num. Exit */}
                    <div className="input-group mb-3 ">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Num. Exit
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="N_Ext"
                        value={formData.N_Ext}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* Colonia */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        Colonia
                      </span>
                    </div>
                    <input
                      type="text"
                      aria-describedby="basic-addon1"
                      className="form-control"
                      name="Colonia"
                      value={formData.Colonia}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Municipio */}
                  <div className="nested-field">
                    <div className="input-group mb-3 nested-input">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Municipio
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="Municipio"
                        value={formData.Municipio}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Estado */}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          Estado
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        name="Estado"
                        value={formData.Estado}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </fieldset>
                {/* Particulares */}
                <fieldset className="field-container row form-group">
                  <legend>Particulares</legend>
                  {/* Inters pers */}
                  <div className="input-group mb-1">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        Inters pers.:
                      </span>
                    </div>
                    <br />
                    <div className="radio-buttons-container m-lg-2">
                      {/*Opciones de interes pers*/}
                      <div className="form-check">
                        <input
                          name="radio-group"
                          id="radio2"
                          className="radio-button__input"
                          type="radio"
                          value=""
                        />
                        <label for="radio2" className="radio-button__label">
                          <span className="radio-button__custom"></span>
                          Musica
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          name="radio-group"
                          id="radio1"
                          className="radio-button__input"
                          type="radio"
                          value=""
                        />
                        <label for="radio1" className="radio-button__label">
                          <span className="radio-button__custom"></span>
                          Cine
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          name="radio-group"
                          id="radio3"
                          className="radio-button__input"
                          type="radio"
                          value=""
                        />
                        <label for="radio3" className="radio-button__label">
                          <span className="radio-button__custom"></span>
                          Modelado
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          name="radio-group"
                          id="radio4"
                          className="radio-button__input"
                          type="radio"
                          value=""
                        />
                        <label for="radio4" className="radio-button__label">
                          <span className="radio-button__custom"></span>
                          Compras
                        </label>
                      </div>
                    </div>
                    {/*Opciones de interes pers*/}
                  </div>
                  {/* Dest. Pref */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        Desti. Pref.:
                      </span>
                    </div>
                    <div className="radio-buttons-container m-lg-2">
                      {/*Opciones de Dest. Pref*/}
                      <div className="radio-button">
                        <input
                          name="radio-group"
                          id="rad1"
                          className="radio-button__input"
                          type="radio"
                          value=""
                        />
                        <label for="rad1" className="radio-button__label">
                          <span className="radio-button__custom"></span>
                          Desierto
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          name="radio-group"
                          id="rad2"
                          className="radio-button__input"
                          type="radio"
                          value=""
                        />
                        <label for="rad2" className="radio-button__label">
                          <span className="radio-button__custom"></span>
                          Playa
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          name="radio-group"
                          id="rad3"
                          className="radio-button__input"
                          type="radio"
                          value=""
                        />
                        <label for="rad3" className="radio-button__label">
                          <span className="radio-button__custom"></span>
                          Ciudad
                        </label>
                      </div>
                      <div className="radio-button">
                        <input
                          name="radio-group"
                          id="rad4"
                          className="radio-button__input"
                          type="radio"
                          value=""
                        />
                        <label for="rad4" className="radio-button__label">
                          <span className="radio-button__custom"></span>
                          Montaña
                        </label>
                      </div>
                    </div>
                    {/*Opciones de Dest. Pref*/}
                  </div>
                  {/* Tipo Hab & Ingrs. Mens */}
                  <div className="nested-field">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect01"
                        >
                          Tipo Hab:
                        </label>
                      </div>
                      <select
                        defaultValue="Seleccion..."
                        className="form-select"
                        id="inputGroupSelect01"
                      >
                        <option value="Seleccionar">Seleccionar su habitacion</option>
                        <option value="Casa propia">Casa propia</option>
                        <option value="Departamento">Departamento</option>
                        <option value="Hombre">Renta</option>
                      </select>
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect01"
                        >
                          Ingrs. Mens:
                        </label>
                      </div>
                      <select
                        defaultValue="Seleccion..."
                        className="form-select"
                        id="inputGroupSelect01"
                      >
                        <option value="Seleccionar">Seleccionar su ingr mensual</option>
                        <option value="2,500 – 5,000">2,500 – 5,000</option>
                        <option value="5,001 – 7,000">5,001 – 7,000</option>
                        <option value="7,001 – 10,000">7,001 – 10,000</option>
                      </select>
                    </div>
                  </div>
                  {/* Viajes al año & Libros */}
                  <div className="nested-field">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect01"
                        >
                          Viajes al año:
                        </label>
                      </div>
                      <select
                        defaultValue="Seleccion..."
                        className="form-select"
                        id="inputGroupSelect01"
                      >
                        <option value="Seleccionar">Seleccionar sus V por año</option>
                        <option value="1 – 3">1 – 3</option>
                        <option value="4 – 6">4 – 6</option>
                        <option value="7 – 10">7 – 10</option>
                      </select>
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect01"
                        >
                          Libro:
                        </label>
                      </div>
                      <select
                        defaultValue="Seleccion..."
                        className="form-select"
                        id="inputGroupSelect01"
                      >
                        <option value="Seleccionar">Seleccionar su Libro</option>
                        <option value="Romance">Romance</option>
                        <option value="Novela">Novela</option>
                        <option value="Fantasía">Fantasía</option>
                        <option value="Política">Política</option>
                        <option value="Científicos">Científicos</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                <button type="submit" className="btn btn-primary buttons ">
                  <strong>Guardar</strong>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary buttons"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
