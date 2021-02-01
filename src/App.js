import './css/style.css';
import React from 'react';
import ItemForm from './components/ItemForm';

const listForm = [
  {
    title: 'First name',
    name: "firstName",
  },
  {
    title: 'Last name',
    name: "lastName",
  },
  {
    title: 'Email',
    name: "email",
  },
  {
    title: 'Phone',
    name: "phone",
  },
  {
    title: 'Message',
    name: "message",
  },
]


const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost/react-email-form/admin/mail.php', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json, text/plain'
      },
    }
    )
      .then(response => response.json())
      .then(response =>
        console.log(response)
      );
  }

  return (
    <>
      <div className="container-fluid container__form">
        <div className="row justify-content-md-center align-items-center vh-100">
          <div className="col col-md-6" >

            <form className="d-flex flex-column" onSubmit={handleSubmit} action="http:\\localhost\react-email-form\admin\mail.php" method="POST" noValidate>

              {/* <form className="d-flex flex-column" action="http:\\localhost\react-email-form\admin\mail.php" method="POST" noValidate> */}

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



