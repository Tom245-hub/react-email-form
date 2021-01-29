import './css/style.css';
import React, { useState } from 'react';
import FirstName from './components/FirstName';
import LastName from './components/LastName';
import Phone from './components/Phone';
import Email from './components/Email';
import Message from './components/Message';

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

  }

  const messages = {
    empty: "Empty box",
  }

  return (
    <>
      <div className="container-fluid container__form">
        <div className="row justify-content-md-center align-items-center vh-100">
          <div className="col col-md-6" >

            <form className="d-flex flex-column" action="" onSubmit={handleSubmit} method="post" noValidate>
              <FirstName form={messages} />

              <LastName form={messages} />

              <Phone form={messages} />

              <Email form={messages} />

              <Message form={messages} />

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



