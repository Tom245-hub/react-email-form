import './css/style.css';
import React from 'react';
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

  async postData => () => {

    try {

      let result = await fetch('http://localhost/react-email-form/admin/api-mail.php', {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          firstName: 'Tomek',
          lastName: 'Oszkiel',
          email: 'tomek@wp.pl',
          phone: '506787656',
          message: 'Cześć, to jest nowa wiadomość',
        })
      })

      console.log(result)

    } catch (e) {
      console.log(e)
    }

  }



  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <>
      <div className="container-fluid container__form">
        <div className="row justify-content-md-center align-items-center vh-100">
          <div className="col col-md-6" >

            <form className="d-flex flex-column" onSubmit={handleSubmit} noValidate>

              {listForm.map((item, index) =>
                <ItemForm key={index} form={item} />
              )}

              <label className="m-2">
                <input className="btn btn-primary" type="submit" onClick={postData()} value="Send email" />
              </label>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;



