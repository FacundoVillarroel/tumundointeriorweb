import React, { useState } from "react";
import Loading from "../loading/Loading";

const BookingContainer = ({ toggleSidebar }) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    Nombre: "",
    Apellido: "",
    Telefono: "",
    Email: "",
    Mensaje: "",
    Profesional: "",
    Hora: "",
    _captcha: false,
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const error = (values) => {
    const requiredFields = [
      "Nombre",
      "Apellido",
      "Telefono",
      "Email",
      "Profesional",
      "Hora",
    ];
    for (const field of requiredFields) {
      if (!values[field]) {
        alert(`${field} no puede estar vacío`);
        return true;
      }
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error(values)) return null;
    setLoading(true);
    fetch("https://formsubmit.co/ajax/facu.villarroel96@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "true") {
          alert("Tu consulta fue enviada correctamente!");
          toggleSidebar();
          setValues({
            Nombre: "",
            Apellido: "",
            Telefono: "",
            Email: "",
            Mensaje: "",
            _captcha: false,
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        alert(
          "ocurrió un error al enviar tu consulta, intenta nuevamente por favor!"
        );
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <Loading text="Enviando..." color="#e7d7c9" />
      ) : (
        <div className="sidebarContainer">
          <div className="sidebarTitleContainer">
            <h2 className="sidebarTitle">Agenda tu Hora</h2>
            <h3 className="sidebarSubTitle">Tu Mundo Interior</h3>
          </div>
          <div className="sidebarFormContainer">
            <form className="formFlex" action="#">
              <div className="nameSurnameContainer">
                <input
                  type="text"
                  name="Nombre"
                  placeholder="Nombre*"
                  value={values.Nombre}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="Apellido"
                  placeholder="Apellido*"
                  value={values.Apellido}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="tel"
                name="Telefono"
                placeholder="Teléfono*"
                value={values.Telefono}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Email*"
                value={values.Email}
                onChange={handleInputChange}
                required
              />
              <textarea
                type="textarea"
                name="Mensaje"
                placeholder="Mensaje (opcional)"
                value={values.Mensaje}
                onChange={handleInputChange}
                required
              />
              <select
                name="Profesional"
                id="Profesional"
                onChange={handleInputChange}
              >
                <option value="" hidden>
                  Seleccione Profesional de preferencia
                </option>
                <option value="Rosende">Jorge Rosende</option>
                <option value="Pinedo">Magdalena Pinedo</option>
                <option value="Rosende">Matías Vinot</option>
              </select>
              <select name="Hora" id="Hora" onChange={handleInputChange}>
                <option value="" hidden>
                  Seleccione preferencia Horaria
                </option>
                <option value="A.M.">A.M.</option>
                <option value="P.M.">P.M.</option>
                <option value="Horario Flexible">Horario Flexible</option>
              </select>
              <button
                type="submit"
                className="buttonSubmit buttonSubmitSidebar"
                onClick={handleSubmit}
              >
                Enviar Solicitud
              </button>
            </form>
            <p className="sidebarDescription">
              Recibirá una respuesta en un rango de 24hrs hábiles.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingContainer;
