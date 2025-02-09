import React from 'react';

const AppointmentList = ({ appointmentsAvailable,appointmentSelected, setAppointmentSelected }) => {

  const handleClick = (id) => {
    if (appointmentSelected?.id === id){
      setAppointmentSelected(null)
    }else {
      const appointmentFound = appointmentsAvailable.find(item => item.id === id)
      setAppointmentSelected(appointmentFound);
    }
  }

  return (
    <div className='timesItemsContainer'>
      {appointmentsAvailable.map((appointment) => {
        const startTime = new Date(appointment.start.dateTime).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        return (
          <div key={appointment.id} className={`timeItem ${appointmentSelected?.id === appointment.id ? "selected" : ""}`} onClick={() => handleClick(appointment.id)}>
            {startTime} hs.
          </div>
        );
      })}
    </div>
  );
};

export default AppointmentList;
