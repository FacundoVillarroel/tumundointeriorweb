import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarView = ({ events, selectedDate, setSelectedDate }) => {
  
  const handleDayClick = (date) => {
    setSelectedDate(date);
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
      <p>Días con turnos disponibles aparecen con un círculo debajo</p>
    </div>
  );
};

export default CalendarView;
