import '../css/style.css';
import React, { useState } from 'react';

const Phone = ({ form }) => {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setPhone(e.target.value)
        if (value == '') {
            setError(true);
        }
        if (value != '') {
            setError(false);
        }
    }

    return (
        <>
            <label className="m-2">
                <h5>Last Name:</h5>
                <input className="form-control" id="validationCustom01" onChange={handleChange} type="text" value={phone} name="Phone" required />
                {error && <div className="alert alert-danger" role="alert">{form.empty}</div>}
            </label>
        </>
    );
}

export default Phone;



