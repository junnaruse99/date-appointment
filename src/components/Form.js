import React from 'react';

const Form = () => {
    return ( 
        <>
        <h2>Create an appointment</h2>

        <form>
            <div className="form-group">
                <label>Name of pet</label>
                <input
                    type="text"
                    name="pet"
                    placeholder="Name of Pet"
                    class="form-control"
                />
            </div>
            <div className="form-group">
                <label>Name of owner</label>
                <input
                    type="text"
                    name="owner"
                    placeholder="Name of owner of pet"
                    class="form-control"
                />
            </div>
            <div className="form-group">
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    class="form-control"
                />
            </div>
            <div className="form-group">
                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    class="form-control"
                />
            </div>
            <div className="form-group">
                <label>Symptoms</label>
                <textarea
                    className="form-control"
                    rows="5"
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-control">Submit Appointment</button>
        </form>
        </>
     );
}
 
export default Form;