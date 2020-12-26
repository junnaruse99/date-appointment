import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  // Appointment in local storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!initialAppointments) {
    initialAppointments = [];
  }

  // Array of appointments
  const [ appointments, setAppointments ] = useState([]);

  // Use effect for run functions when there is a state change
  useEffect( () => {
    if(initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    }
    else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  }, [appointments] );
  // Inside array is the element to look for in case of state change

  // Function that take actual appointment and add it
  const creatAppointment = appointment => {
    setAppointments([...appointments, appointment]);
  }

  // Function that deletes an appointment
  const deleteAppointment = id => {
    const newAppointment = appointments.filter(appointment => appointment.id !== id);
    setAppointments(newAppointment);
  }

  // Conditional message, when there are no appointments
  const title = appointments.length === 0 ? 'There are no appointments' : 'Manage your appointments';

  return (
    <>
      <h1>Owner's manager</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Form creatAppointment={creatAppointment}/>
          </div>
          <div className="col-12 col-md-6">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
