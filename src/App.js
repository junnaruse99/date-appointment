import React, { useState } from 'react';
import Form from './components/Form';

function App() {

  const [ appointments, setAppointments ] = useState([]);

  const creatAppointment = appointment => {
    setAppointments([...appointments, appointment]);
  }

  return (
    <>
      <h1>Patient's manager</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Form creatAppointment={creatAppointment}/>
          </div>
          <div className="col-12 col-md-6">
            2
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
