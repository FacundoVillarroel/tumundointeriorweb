import React,{useState} from 'react';
import Loading from '../loading/Loading';

const BookingContainer = () => {
  const [loading, setLoading] = useState(false);
  const [ values, setValues ] = useState({
    nombre:"",
    apellido:"",
    telefono: "",
    email:"",
    mensaje:"",
    profesional:"",
    hora:"",
    _captcha: false
  });
  
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const error = (values) => {
    const requiredFields = ['nombre', 'apellido', 'telefono', 'email', 'profesional', 'hora'];
    for (const field of requiredFields) {
      if (!values[field]) {
        alert(`${field} no puede estar vacío`);
        return true;
      }
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (error(values)) return null
    setLoading(true);
    fetch("https://formsubmit.co/ajax/facu.villarroel96@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => response.json())
    .then((data) => {
      if(data.success === "true"){
        alert("Tu consulta fue enviada correctamente!")
        setValues({
          nombre:"",
          apellido:"",
          telefono: "",
          email:"",
          mensaje:"",
          _captcha: false
        })
        setLoading(false)
      }
    })
    .catch(error => {
      alert("ocurrió un error al enviar tu consulta, intenta nuevamente por favor!")
      console.log(error);
      setLoading(false)
    });
  }

  return (
    <>
      {loading 
        ? <Loading text="Enviando..." color="#e7d7c9"/>
        :<div className='sidebarContainer'>
          <div className='sidebarTitleContainer'>
            <h2 className='sidebarTitle'>Agenda tu hora</h2>
            <h3 className='sidebarSubTitle'>Tu Mundo Interior</h3>
          </div>
          <div className='sidebarFormContainer'>
            <form className='formFlex' action="#">
              <div className='nameSurnameContainer'>
                <input 
                  type="text" 
                  name='nombre' 
                  placeholder='Nombre *' 
                  value={values.nombre}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="text" 
                  name='apellido' 
                  placeholder='Apellido *' 
                  value={values.apellido}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input 
                type="tel" 
                name='telefono' 
                placeholder='Teléfono *' 
                value={values.telefono}
                onChange={handleInputChange}
                required
              />
              <input 
                type="email" 
                name='email' 
                placeholder='Email *' 
                value={values.email}
                onChange={handleInputChange}
                required
              />
              <textarea 
                type="textarea" 
                name='mensaje' 
                placeholder='Mensaje (opcional)' 
                value={values.mensaje}
                onChange={handleInputChange}
                required
              />
              <select name="profesional" id="profesional" onChange={handleInputChange}>
                <option value="" hidden>Seleccione profesional de preferencia</option>
                <option value="Pinedo">Magdalena Pinedo</option>
                <option value="Rosende">Jorge Rosende</option>
              </select>
              <select name="hora" id="hora" onChange={handleInputChange}>
                <option value="" hidden>Seleccione preferencia horaria</option>
                <option value="A.M.">A.M.</option>
                <option value="P.M.">P.M.</option>
                <option value="Ambos">Ambos</option>
              </select>
              <button type='submit' className='buttonSubmit' onClick={handleSubmit}>Enviar Petición</button>
            </form>
            <p className='sidebarDescription'>Se enviará la solicitud, recibirá una respuesta en su email o teléfono</p>
          </div>
        </div>
      }
    </>
    
    
  )
}

export default BookingContainer