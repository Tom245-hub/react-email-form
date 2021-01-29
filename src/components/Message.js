import '../css/style.css';
import React, { useState } from 'react';

const Message = ({ form }) => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setMessage(e.target.value)
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
                <h5>Message:</h5>
                <input className="form-control" id="validationCustom01" onChange={handleChange} type="text" value={message} name="Message" required />
                {error && <div className="alert alert-danger" role="alert">{form.empty}</div>}
            </label>
        </>
    );
}

export default Message;



