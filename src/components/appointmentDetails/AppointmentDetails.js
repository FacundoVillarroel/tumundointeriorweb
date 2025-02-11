import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import Loading from '../loading/Loading'
import { db } from '../../firebase/config'

const AppointmentDetails = ({appointmentSelected, setSelectedDate, setAppointmentSelected}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [fullName, setFullName] = useState("")

  const getAppointmentDate = () => {
    if(appointmentSelected){
      const date = new Date(appointmentSelected.start.dateTime)
      const formattedAppointment = date.toLocaleDateString("es-ES", {
        weekday: 'long',  
        day: 'numeric',   
        month: 'long'     
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

  const sendBooking = async () => {
    try {
      setIsLoading(true)
      const appointment = {
        Fecha: getAppointmentDate(),
        Hora: getAppointmentTime(),
        Paciente: fullName
      } 
      console.log(appointment);
      const appointmentsRef = collection(db, "appointments");
      await addDoc(appointmentsRef, {
        eventId:appointmentSelected.id,
        start:appointmentSelected.start.dateTime,
        end:appointmentSelected.end.dateTime,
        updated: new Date().toLocaleString(),
        takenBy: fullName
      })
      //Send email to Professional
      setIsLoading(false)
      setSelectedDate(new Date())
      setAppointmentSelected(null)
      window.alert("La cita fue reservada correctamente!")
      //if no errors invite user to wsp link
    } catch (error) {
      console.log("ERROR BOOKING: ",error);
      alert("Ocurrió un error al reservar la cita, por favor recargue la página e intentelo nuevamente.")
    }
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