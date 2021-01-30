import './css/style.css';
import React, { useState } from 'react';
import ItemForm from './components/ItemForm';

const listForm = [
  {
    name: 'First name',
  },
  {
    name: 'Last name',
  },
  {
    name: 'Email',
  },
  {
    name: 'Phone',
  },
  {
    name: 'Message',
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

            <form className="d-flex flex-column" action="" onSubmit={handleSubmit} method="post" >

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



