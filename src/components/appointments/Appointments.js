import React,{useEffect, useState} from 'react';
import Calendar from '../calendar/Calendar';
import AppointmentList from '../appointmentList/AppointmentList';

import Loading from '../loading/Loading';
import AppointmentDetails from '../appointmentDetails/AppointmentDetails';
// import WhatsAppButton from '../whatsappButton/WhatsappButton';

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
      
      if(data){
        setEvents(data)
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

  useEffect(() => {
    const eventsForTheDay = events.filter(event => {
      const eventDate = new Date(event.start.dateTime);
      return (
        eventDate.getFullYear() === selectedDate.getFullYear() &&
        eventDate.getMonth() === selectedDate.getMonth() &&
        eventDate.getDate() === selectedDate.getDate()
      );
    });
    setAppointmentsAvailable(eventsForTheDay)
  },[selectedDate, events])

  const formattedDate = selectedDate.toLocaleDateString('es-ES', {
    weekday: 'long',   // Día de la semana
    day: 'numeric',    // Día del mes
    month: 'long'      // Nombre completo del mes
  })

  const nextAppointment = (e) => {
    e.preventDefault()
    const nextAppointmentDate = new Date(events[0].start.dateTime);
    setSelectedDate(nextAppointmentDate)
    setAppointmentSelected(events[0])
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
          <div style={{display:'flex', justifyContent:"center", width:"100%"}}>
            <div className='dateSelectorContainer'>
              <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} events={events} appointmentSelected={appointmentSelected} setAppointmentsAvailable={setAppointmentsAvailable} set/>
              <div className='timesAvailableContainer'> 
                <h3 className='timesAvailableTitle'> Horas disponibles:  {formattedDate}</h3>
                {appointmentsAvailable.length ?  
                  <AppointmentList appointmentsAvailable={appointmentsAvailable} appointmentSelected={appointmentSelected
                  } setAppointmentSelected={setAppointmentSelected}/>
                  :<div> 
                    <p> No hay citas para este día </p>
                    <button className="button" onClick={nextAppointment} >Proxima sesión disponible.</button>
                  </div> 
                }
              </div>
              <AppointmentDetails appointmentSelected={appointmentSelected}/>
              {/* <WhatsAppButton phoneNumber={} message={"Hola como estas?"}/> */}
            </div>
          </div>
        </div>
      }
    </>
  )
}



export default Appointments