import '../css/style.css';
import React, { useState } from 'react';

const FirstName = () => {
    const messages = {
        empty: "Empty box",
    }
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFirstName(e.target.value)
        if (value == '') {
            setError(true);
        }
        if (value != '') {
            setError(false)
        }
    }

    return (
        <>
            <label className="m-2">
                <h5>First Name:</h5>
                <input className="form-control" id="validationCustom01" type="text" onChange={handleChange} value={firstName} name="firstName" required />
                {error && <div className="alert alert-danger" role="alert">{messages.empty}</div>}
            </label>
        </>
    );
}

export default FirstName;



