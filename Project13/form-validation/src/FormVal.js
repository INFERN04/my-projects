import React, { useState } from 'react'
import './Form.css';

const FormVal = () => {


  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [age,setAge] = useState('');
  const [ gender,setGender] = useState('');
  const [error,setError] = useState('');

  const validateForm = () => {
    const errors = {};
    if (!name){
      errors.name = 'Name is Required';
    }
    if (!email){
      errors.email = 'Email is Required';
    }else if (!/\S+@\S+\.\S+/.test(email)){
      errors.email = 'Email is invalid';
    }
    if (!password){
      errors.password = 'Password is Required';
    }else if(password.length<6){
      errors.password = 'Password must be of 6 character';
    }
    if (!confirmPassword){
      errors.confirmPassword = 'Confirm is Required';
    }else if (password!== confirmPassword){
      errors.confirmPassword = 'Password do not Match';
    }

    if(!age){
      errors.age = 'Age is required';
    }
    else if(isNaN(age) || age<18){
      errors.age = 'Age must be a number and at least 18'
    }
    if(!gender){
      errors.gender = 'Gender is required';
    }
    console.log(error)
    return errors;
  }

  function handleSubmit(e){
    e.preventDefault();

    const validationErrors = validateForm();
    if(Object.keys(validationErrors).length>0){
      setError(validationErrors);
    }
  }



  return (
    <div className='container'>
      <h1>Form Validation</h1>
      <br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <br/>
        <div>
          <label>Email:</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <br/>
        <div>
          <label>Password:</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <br/>
        <div>
          <label>Confirm Password:</label>
          <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <br/>
        <div>
          <label>Age:</label>
          <input type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
        </div>
        <br/>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">--Select Gender--</option>
            <option value="male">Male</option>
            <option value="male">Female</option>
            <option value="Rather not say">Rather not say</option>
            <option value="TBD">To be declared later</option>
          </select>
        </div>
        <br/>
        <br/>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default FormVal
