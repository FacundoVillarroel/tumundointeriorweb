import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import Loading from '../loading/Loading'
import { db } from '../../firebase/config'
import WhatsAppModal from '../modalWhatsapp/ModalWhatsapp'

const AppointmentDetails = ({appointmentSelected, setSelectedDate, setAppointmentSelected, addSavedAppointment}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState("")

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

  const sendConfirmationEmail = async() => {
    const values = {
      Paciente: fullName,
      Fecha:getAppointmentDate(),
      Hora:getAppointmentTime()
    }
    const response = await fetch("https://formsubmit.co/ajax/ec4a801838954ab7b039d3eae58c9173", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
    const data = await response.json();
    if (data.success === "true") {
      console.log("Mail de confirmación enviado correctamente.");
    } else {
      throw new Error("Ocurrió un error al enviar mail de confirmación.")
    }
  }

  const getMessage = () => {
    return `Hola! Me gustaría realizar una reserva para una sesión de psicoterapia el día ${getAppointmentDate()} a las ${getAppointmentTime()} horas, con el profesional, Jorge Rosende.`;
  }

  const sendBooking = async () => {
    try {
      setIsLoading(true)
      const appointmentsRef = collection(db, "appointments");
      await sendConfirmationEmail()
      const appointmentToSave = {
        eventId:appointmentSelected.id,
        start:appointmentSelected.start.dateTime,
        end:appointmentSelected.end.dateTime,
        updated: new Date().toLocaleString(),
        takenBy: fullName
      }
      await addDoc(appointmentsRef, appointmentToSave)
      addSavedAppointment(appointmentToSave)
      setIsLoading(false)
      setSelectedDate(new Date())
      setAppointmentSelected(null)
      window.alert("La cita fue reservada correctamente!")
      setMessage(getMessage())
      setIsModalOpen(true)
    } catch (error) {
      setIsLoading(false)
      console.log("ERROR BOOKING: ",error);
      alert("Ocurrió un error al reservar la cita, por favor recargue la página e intentelo nuevamente.")
    }
  }

  return (
    <>
    {isLoading 
      ?
        <Loading text={"Enviando la reserva.."} color={"#d4b2a7"}/>
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
    <WhatsAppModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} message={message}/>

    </>
    
  )
}

export default AppointmentDetails