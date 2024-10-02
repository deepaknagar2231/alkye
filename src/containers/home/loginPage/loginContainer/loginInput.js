import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { message } from "antd";
import { LoginContext } from '../../../../component/context';

const LoginInput = () => {
  const loginContext = useContext(LoginContext);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleClick = () => {
    if (value.length === 0){
       message.error("Please enter email");
       return;
      }
    // else if (!emailRegex.test(value)) { //to validate email.
    //   message.error("Invalid email entered");
    //   return;
    // }
    loginContext.setStateHandler({ username : value})
    navigate('/passPage');
  };

  return (
    <div className='login-input'>
      <input type='email' placeholder='Email' name='email' value={value} onChange={handleChange}></input>
      <button className='continue' onClick={handleClick}>Continue</button>
    </div>
  )
}

export default LoginInput;