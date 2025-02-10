import React,{useEffect, useState} from 'react';
import Calendar from '../calendar/Calendar';
import AppointmentList from '../appointmentList/AppointmentList';

import Loading from '../loading/Loading';
import AppointmentDetails from '../appointmentDetails/AppointmentDetails';
import WhatsAppButton from '../whatsappButton/WhatsappButton';

const Appointments = () => {
  const [events, setEvents] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointmentsAvailable, setAppointmentsAvailable] = useState([])
  const [appointmentSelected, setAppointmentSelected] = useState(null)
  const [loading, setLoading] = useState(true)

  const getCalendar = async() => {
    try {
      setLoading(true)
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/events`)
      const data = await response.json();
      console.log("DATA: ",data);
      if(data.items){
        setEvents(data.items)
      } else {
        setEvents([])
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }
  
  useEffect(() => {
    getCalendar()
  },[])

  const formattedDate = selectedDate.toLocaleDateString('es-ES', {
    weekday: 'long',   // Día de la semana
    day: 'numeric',    // Día del mes
    month: 'long'      // Nombre completo del mes
  })

  const nextAppointment = (e) => {
    e.preventDefault()
    console.log("Siguiente sesion");
  }

  console.log("Evento seleccionado: ", appointmentSelected);
  
  const sendBooking = () => {
    console.log("booked");
  }

  return (
    <>
      { loading 
        ? 
        <div className="loadingContainer">
          <Loading text={"Cargando Horas disponibles..."} color={"#e7d7c9"} />
        </div> 
        :
        <div className='calendarContainer'>
          <h2 className='title'>
            Solicitar hora con Psicólogo Jorge Rosende
          </h2>
          <div className='dateSelectorContainer'>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} events={events} appointmentSelected={appointmentSelected} setAppointmentsAvailable={setAppointmentsAvailable} set/>
            <div className='timesAvailableContainer'> 
              <h3 className='timesAvailableTitle'> Horas disponibles:  {formattedDate}</h3>
              <div className='timesItemsContainer'>
                {appointmentsAvailable.length ?  
                  <AppointmentList appointmentsAvailable={appointmentsAvailable} appointmentSelected={appointmentSelected
                  } setAppointmentSelected={setAppointmentSelected}/>
                  :<div> 
                    <p> No hay citas para este día </p>
                    <button className="button" onClick={nextAppointment} >Proxima sesión disponibles</button>
                  </div> 
                }
              </div>
            </div>
            <AppointmentDetails appointmentSelected={appointmentSelected} sendBooking={sendBooking}/>
            {/* <WhatsAppButton phoneNumber={} message={"Hola como estas?"}/> */}
          </div>
        </div>
      }
    </>
  )
}



export default Appointments