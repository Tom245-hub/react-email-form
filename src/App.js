import './css/style.css';
import React, { useState } from 'react';
import FirstName from './components/FirstName';

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className="container-fluid container__form">
        <div className="row justify-content-md-center align-items-center vh-100">
          <div className="col col-md-6" >

            <form className="d-flex flex-column" action="" onSubmit={handleSubmit} method="post" noValidate>
              <FirstName />

              <label className="m-2">
                <h5>Last Name:</h5>
                <input className="form-control" type="text" name="lastName" required />
              </label>
              <label className="m-2">
                <h5>Phone:</h5>
                <input className="form-control" type="text" name="phoneNumber" required />
              </label>
              <label className="m-2">
                <h5>E-mail:</h5>
                <input className="form-control" type="text" name="email" required />
              </label>
              <label className="m-2">
                <h5>Message:</h5>
                <textarea className="form-control" name="message" required></textarea>
              </label>

              <label className="m-2">
                <input className="btn btn-primary" type="submit" value="Send email" />
              </label>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;



