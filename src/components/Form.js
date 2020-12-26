import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';

const Form = ({ creatAppointment }) => {

    const [ dateAppointment, setDateAppointment ] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    });

    const [ error, updateError ] = useState(false);


    const handleChange = e => {
        setDateAppointment({
            ...dateAppointment,
            [e.target.name]: e.target.value
        })
    }

    const { pet, owner, date, time, symptoms } = dateAppointment;

    const submitAppointment = e => {
        e.preventDefault();

        // Validate
        if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
            updateError(true);
            return;
        }

        // Remove the error messagge
        updateError(false);

        // Assign an id
        dateAppointment.id = uuid();

        // Create an Appointment
        creatAppointment(dateAppointment);

        // Restart form
        setDateAppointment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        })
    }

    return ( 
        <>
        <h2>Create an appointment</h2>

        { error ? <p className="alerta-error">All fields are required</p> : null}

        <form onSubmit={submitAppointment}>
            <div className="form-group">
                <label>Name of pet</label>
                <input
                    type="text"
                    name="pet"
                    placeholder="Name of Pet"
                    className="form-control"
                    onChange={handleChange}
                    value={pet}
                />
            </div>
            <div className="form-group">
                <label>Name of owner</label>
                <input
                    type="text"
                    name="owner"
                    placeholder="Name of owner"
                    className="form-control"
                    onChange={handleChange}
                    value={owner}
                />
            </div>
            <div className="form-group">
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="form-control"
                    onChange={handleChange}
                    value={date}
                />
            </div>
            <div className="form-group">
                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="form-control"
                    onChange={handleChange}
                    value={time}
                />
            </div>
            <div className="form-group">
                <label>Symptoms</label>
                <textarea
                    className="form-control"
                    name="symptoms"
                    rows="5"
                    onChange={handleChange}
                    value={symptoms}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-control">Submit Appointment</button>
        </form>
        </>
     );
}
 
export default Form;