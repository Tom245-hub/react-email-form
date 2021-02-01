import '../css/style.css';
import React, { useState } from 'react';

const ItemForm = ({ form }) => {
    const [error, setError] = useState(false);
    const [info, setInfo] = useState('');
    const [value, setValue] = useState([]);

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        let length = value.length;
        setValue(value)

        if (length === 0) {
            setError(true)
            setInfo('You must type ' + name)
        }
        if (length >= 1 && length <= 3) {
            setError(true)
            setInfo(name + ' is too short')
        }
        if (length >= 4) {
            setError(false)
            if (name === 'email' && !(value.includes('@') && value.includes('.'))) {
                setError(true);
                setInfo('Incorrect format of ' + name)
            }
            if (name === 'phone' && value.match(/[A-E]/gi)) {
                setError(true);
                setInfo(name + " can't include letters")
            }
            if (name === 'message') {
                let word = ' ';
                let words = 0;
                for (let i = 0; i <= length; i++) {
                    if (value[i] === word) {
                        words += 1;
                    }
                }
                if (words <= 4) {
                    setError(true);
                    setInfo(name + " has only " + words + ". Do you think it's enough?")
                } else if (words >= 5) {
                    setError(false);
                }
            }
        }
    }

    return (
        <>
            <label className="m-2">
                <h5>{form.title}</h5>
                <input className="form-control" onChange={handleChange} value={value} name={form.name} type="text" />
                {error && <div className="alert alert-danger" role="alert">{info}</div>}
            </label>
        </>
    );
}

export default ItemForm;