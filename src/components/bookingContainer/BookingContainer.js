import React,{useState} from 'react';
import Loading from '../loading/Loading';
import InputDateTime from '../inputDataTime/InputDataTime';

const BookingContainer = () => {
  const [loading, setLoading] = useState(false);
  const [ values, setValues ] = useState({
    nombre:"",
    apellido:"",
    telefono: "",
    email:"",
    mensaje:"",
    fecha:"",
    _captcha: false
  });
  
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const error = (values) => {
    const requiredFields = ['nombre', 'apellido', 'telefono', 'email', 'fecha'];

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
          fecha:"",
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
        :<div className='bookingContainer'>
        <div className='bookingTitleContainer' >
          <h2 className='bookingTitle'>Agenda tu hora</h2>
        </div>
        <div className='bookingFormContainer'>
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
              required/>
            <input 
              type="email" 
              name='email' 
              placeholder='Email *' 
              value={values.email}
              onChange={handleInputChange}
              required/>
            <textarea 
              type="textarea" 
              name='mensaje' 
              placeholder='Mensaje (opcional)' 
              value={values.mensaje}
              onChange={handleInputChange}
              required/>
            <InputDateTime 
              handleInputChange={handleInputChange}
            />
            <button type='submit' className='buttonSubmit' onClick={handleSubmit}>Enviar Petición</button>
          </form>
          <p className='bookingDescription'>Se envía una solicitud para la hora que usted elija, recibirá una respuesta en su email o teléfono</p>
        </div>
      </div>
      }
    </>
    
    
  )
}

export default BookingContainer