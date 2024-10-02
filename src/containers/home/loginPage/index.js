import React from 'react';
import LoginComp from './loginContainer';
import Header from '../../../component/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PasswordContainer from './passContainer';
import TestContainer from '../testContainer';
import './style.scss';

const LoginPage = () => {
  return (
    <div className='login-page'>
      <Header className='header' />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginComp />} />
          <Route path='/passPage' element={<PasswordContainer />} />
          <Route path='/test' element={<TestContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default LoginPage;