import '../css/style.css';
import React, { useState } from 'react';

const ItemForm = ({ form }) => {
    const [error, setError] = useState(false);
    const [content, setContent] = useState()

    const handleChange = (e) => {
        let value = e.target.value;
        setContent(value)

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
                <h5>{form.name}</h5>
                <input className="form-control" id="validationCustom01" type="text" onChange={handleChange} value={content} name={form.name} required />
                {error && <div className="alert alert-danger" role="alert">{form.invalid}</div>}
            </label>
        </>
    );
}

export default ItemForm;



