import React, { useState } from 'react';

const Form = () => {
    //The useState hook is used to manage the form data as a state start with empty inputs.

  const [formData, setFormData] = useState({ // object  
    firstName: '',  // name : value 
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  //The handleChange function is called whenever an input field changes, updating the formData state specific inputs.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div  className='myform'>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>

        <br />
      </form>

      <div>
        <h2>Form Data:</h2>
        <p>First Name:  <span>{formData.firstName}</span></p>
        <p>Last Name: <span>{formData.lastName}</span></p>
        <p>Email: <span>{formData.email}</span></p>
        <p>Password: <span>{formData.password}</span></p>
        <p>Confirm Password: <span>{formData.confirmPassword}</span></p>
      </div>
    </div>
  );
};

export default Form;
