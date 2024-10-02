import React from 'react';
import { useContext } from 'react';
import LoginPage from './loginPage';
import { Spin } from 'antd';
import { LoginContext } from '../../component/context';
import './style.scss';

const Home = () => {
  const loginContext = useContext(LoginContext);
  return (
        <div className='home'>
      {loginContext.state.loading && <Spin className='loader' size="large" spinning={loginContext.state.loading} />}
          <LoginPage />
        </div>
  )
}
export default Home;