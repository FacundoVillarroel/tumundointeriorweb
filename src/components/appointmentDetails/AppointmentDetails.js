import React, { useState } from 'react'
import Loading from '../loading/Loading'

const AppointmentDetails = ({appointmentSelected}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [fullName, setFullName] = useState("")

  const getAppointmentDate = () => {
    if(appointmentSelected){
      const date = new Date(appointmentSelected.start.dateTime)
      const formattedAppointment = date.toLocaleDateString("es-ES", {
        weekday: 'long',   // Día de la semana
        day: 'numeric',    // Día del mes
        month: 'long'      // Nombre completo del mes
      })
      return formattedAppointment
    } 
  }

  const getAppointmentTime = () => {
    if(appointmentSelected){
      const date = new Date(appointmentSelected.start.dateTime)
      const formattedAppointmentHour = date.toLocaleTimeString("es-ES",{
        hour: '2-digit',
        minute: '2-digit'
      })
      return formattedAppointmentHour
    }
  }

  const handleSubmit = () => {
    if (!fullName) {
      window.alert("Debes ingresar nombre del paciente para la reserva.")
    } else {
      const confirmAction = window.confirm(`¿Seguro quieres reservar esta cita para ${fullName}?`);
      
      if (confirmAction) {
        sendBooking()
      } 
    }
  }

  const sendBooking = () => {
    setIsLoading(true) 
    //enviar mail a psicologo
    //almacenar en db la cita
    setIsLoading(false)
    //si todo es correcto invitar al usuario a enviar whatsapp al psicologo
  }

  return (
    <>
    {isLoading 
      ?
        <Loading/>
      :
      <div className='detailsContainer'>
        <h3>Detalles de la reserva</h3>
        <hr></hr>
        {appointmentSelected 
          ? <>
              <p>Psicólogo Jorge Rosende.</p>
              <p>{getAppointmentDate()}</p>
              <p>{getAppointmentTime()}</p>
              <hr></hr>
              <div className='inputContainer'>
                <label htmlFor='name'>Nombre del paciente: </label>
                <input type={"text"} name="fullName" onChange={e => setFullName(e.target.value)} value={fullName}/>
              </div>
              <hr></hr>
              <button className='button' onClick={handleSubmit}>Reservar.</button>  
            </>
          : <p>No hay cita seleccionada.</p>      
        }
      </div>
    }
    </>
    
  )
}

export default AppointmentDetails