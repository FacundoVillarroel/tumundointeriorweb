import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDataTime = ({handleInputChange}) => {
  const [startDate, setStartDate] = useState(new Date());
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6 && date > new Date();
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    const selectedHours = selectedDate.getHours();
  
    return (
      currentDate.getTime() < selectedDate.getTime() &&
      selectedHours >= 7 && selectedHours < 19
    );
  };
  
  const handleChange = (date) => {
    setStartDate(date)
    const event = {target:{name:"fecha", value:date.toLocaleString()}}
    handleInputChange(event)
  }

  return (
    <DatePicker 
      selected={startDate} 
      onChange={(date) => handleChange(date)} 
      timeInputLabel="Hora:"
      dateFormat="MM/dd/yyyy h:mm aa"
      filterDate={isWeekday}
      showTimeSelect
      filterTime={filterPassedTime}
    />
  );
};

export default InputDataTime




















































/* import React,{useState} from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const InputDataTime = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DateTimePicker 
        onChange={onChange} 
        value={value} 
        dayPlaceholder="DD"
        yearPlaceholder='AAAA'
        monthPlaceholder='MM'
        hourPlaceholder='HH'
        minutePlaceholder='MM'
        disableClock={true}
        minDate={new Date()}
      />
    </div>
  )
}

export default InputDataTime */