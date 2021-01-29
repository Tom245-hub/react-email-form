import '../css/style.css';
import React, { useState } from 'react';

const Email = ({ form }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(e.target.value)
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
                <h5>Email:</h5>
                <input className="form-control" id="validationCustom01" onChange={handleChange} type="text" value={email} name="Email" required />
                {error && <div className="alert alert-danger" role="alert">{form.empty}</div>}
            </label>
        </>
    );
}

export default Email;



