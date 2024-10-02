import React from 'react'
import LoginContent from './loginContent';
import LoginInput from './loginInput';
import './style.scss';

const LoginComp = () => {
    return (
        <div className='login-comp'>
            <LoginContent />
            <LoginInput />
        </div>
    )
}
export default LoginComp;