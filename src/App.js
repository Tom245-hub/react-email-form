import './css/style.css';
import React, { useState } from 'react';
import ItemForm from './components/ItemForm';

const listForm = [
  {
    name: 'First name',
    invalid: 'You must type First Name',
  },
  {
    name: 'Last name',
    invalid: 'You must type Last Name',
  },
  {
    name: 'Email',
    invalid: 'You must type Email',
  },
  {
    name: 'Phone',
    invalid: 'You must type Phone',
  },
  {
    name: 'Message',
    invalid: 'You must type Message',
  },
]


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

              {listForm.map((item, index) =>
                <ItemForm key={index} form={item} />
              )}

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



