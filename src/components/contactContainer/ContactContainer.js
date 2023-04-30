import React,{useState} from 'react';
import Loading from '../loading/Loading';

const ContactContainer = () => {
  const [loading, setLoading] = useState(false);
  const [ values, setValues ] = useState({
    nombre:"",
    apellido:"",
    telefono: "",
    email:"",
    mensaje:"",
    _captcha: false
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
        :<div className='contactContainer'>
        <div className='contactTitleContainer' >
          <h2 className='contactTitle'>Contacto</h2>
        </div>
        <div className='contactFormContainer'>
          <form className='formFlex' action="#">
            <div className='nameSurnameContainer'>
              <input 
                type="text" 
                name='nombre' 
                placeholder='Nombre' 
                value={values.nombre}
                onChange={handleInputChange}
                required
                />
              <input 
                type="text" 
                name='apellido' 
                placeholder='Apellido' 
                value={values.apellido}
                onChange={handleInputChange}
                required
                />
            </div>
            <input 
              type="tel" 
              name='telefono' 
              placeholder='Teléfono' 
              value={values.telefono}
              onChange={handleInputChange}
              required/>
            <input 
              type="email" 
              name='email' 
              placeholder='Email' 
              value={values.email}
              onChange={handleInputChange}
              required/>
            <textarea 
              type="textarea" 
              name='mensaje' 
              placeholder='Mensaje' 
              value={values.mensaje}
              onChange={handleInputChange}
              required/>
            <button type='submit' className='buttonSubmit' onClick={handleSubmit}>Enviar Consulta</button>
          </form>
          <p className='contactDescription'>Se enviará un email con su mensaje, luego recibirá una respuesta en su email o teléfono</p>
        </div>
      </div>
      }
    </>
    
    
  )
}

export default ContactContainer