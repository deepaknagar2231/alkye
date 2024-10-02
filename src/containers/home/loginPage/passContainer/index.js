import React from 'react'
import PassContent from './passContent';
import PassInput from './passInput';
import BottomMsgComp from './bottomMsgComp';

const PasswordContainer = () => {
  return (
      <div className='pass-cont'>
         <PassContent/>
         <PassInput/>
         <BottomMsgComp/>
    </div>
  )
}

export default PasswordContainer;
