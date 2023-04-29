import React,{useState} from 'react';

const ContactContainer = () => {
  const [ values, setValues ] = useState({
    nombre:"",
    telefono: "",
    email:"",
    mensaje:"",
    _captcha: false
  })

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
          telefono: "",
          email:"",
          mensaje:"",
          _captcha: false
        })
      }
    })
    .catch(error => {
      alert("ocurrió un error al enviar tu consulta, intenta nuevamente por favor!")
      console.log(error);
    });
  }

  return (
    <div className='contactContainer'>
      <div className='contactDetailsContainer'>
        <div className='contactTextContainer'>
          <h2 className='contactTitle'>Contacto</h2>
          <p className='contactText'>Puedes enviar tu consulta y/o coordinar tu primera sesión de acompañamiento completando el formulario y me comunicaré lo antes posible contigo.</p>
        </div>
      </div>
      <div className='contactFormContainer'>
        <form className='formFlex' action="#">
          <input 
            type="text" 
            name='nombre' 
            placeholder='Nombre y Apellido' 
            value={values.nombre}
            onChange={handleInputChange}
            required
            />
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
      </div>
    </div>
  )
}

export default ContactContainer