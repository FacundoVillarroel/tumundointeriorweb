import React from 'react'

const AppointmentDetails = ({appointmentSelected, sendBooking}) => {

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
    const confirmAction = window.confirm("¿Seguro quieres reservar esta cita?");
    
    if (confirmAction) {
      sendBooking()
    } else {
      console.log("Acción cancelada");
    }
  }

  return (
    <div className='detailsContainer'>
      <h3>Detalles de la reserva</h3>
      <hr></hr>
      {appointmentSelected 
        ? <>
            <p>Psicólogo Jorge Rosende.</p>
            <p>{getAppointmentDate()}</p>
            <p>{getAppointmentTime()}</p>
            <hr></hr>
            <button className='button' onClick={handleSubmit}>Reservar.</button>  
          </>
        : <p>No hay cita seleccionada.</p>      
      }
    </div>
  )
}

export default AppointmentDetails