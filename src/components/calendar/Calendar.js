import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Importa los estilos de react-calendar

const CalendarView = ({ events, setAppointmentsAvailable, selectedDate, setSelectedDate }) => {

  // Función para manejar el clic en un día del calendario
  const handleDayClick = (date) => {
    setSelectedDate(date);
    const day = date.getDate(); // Número del día clickeado
    console.log(`Día seleccionado: ${day}`);

    // Filtrar los eventos para este día
    const eventsForTheDay = events.filter(event => {
      const eventDate = new Date(event.start.dateTime);
      return (
        eventDate.getFullYear() === date.getFullYear() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getDate() === date.getDate()
      );
    });

    console.log("Eventos para este día:", eventsForTheDay);
    setAppointmentsAvailable(eventsForTheDay)
    // Aquí puedes ejecutar cualquier función que reciba `day` o `eventsForTheDay` como prop
  };

  return (
    <div>
      <h3 className="dateSelectorTitle">Seleccione Fecha</h3>
      <Calendar
        onClickDay={handleDayClick}
        value={selectedDate}
        minDate={new Date()}
        tileClassName={({ date }) => {
          // Verifica si hay eventos en esta fecha para añadir una clase especial
          const hasEvent = events.some(event => {
            const eventDate = new Date(event.start.dateTime);
            return (
              eventDate.getFullYear() === date.getFullYear() &&
              eventDate.getMonth() === date.getMonth() &&
              eventDate.getDate() === date.getDate()
            );
          });
          return hasEvent ? "event-day" : null;
        }}
      />
      <p>Días con turnos disponibles aparecen con color amarillo</p>
    </div>
  );
};

export default CalendarView;
