import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { message } from "antd";
import './style.scss';
import { LoginContext } from '../../../../component/context';
import PasswordInput from '../../../../component/passwordInput';

const PassInput = () => {
    const loginContext=useContext(LoginContext);
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setPass(e.target.value);
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //entered this pass to login MyStrongPassword@123
    const handleClick =async () => {
        if (pass.length === 0) {
            message.error("Please enter password");
            return;
        }
        // else if (!passwordRegex.test(pass)) { //to validate password.
        //     message.error("Wrong password entered");
        //     return;
        // }
       
        else {
            loginContext.setStateHandler({loading:true})
          await  fetch('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: loginContext.state.username,
                    password: pass
                })
            }).then(response => response.json())
                .then(data => {
                    if(data.token){
                        loginContext.setStateHandler({ loading: false })
                        navigate('/test');
                        message.success("Logged in success.");
                        return;
                    }
                   
                })
                .catch(error => {
                    message.error(error.non_field_errors);
                    message.error("Unable to log in with provided credentials.");
                });
            loginContext.setStateHandler({ loading: false })
           
            return;
        }

    }
    return (
        <div className='pass-input'>
            <PasswordInput value={pass} handleChange={handleChange} name='password' />
            <div className='msg-with-btn'>
                <p>Use a minimum of 6 characters (case-sensitive)<br /> with atlease one number and special characters. </p>
                <button className='continue' onClick={handleClick}>Aggree & Continue</button>
            </div>
        </div>
    )
}

export default PassInput