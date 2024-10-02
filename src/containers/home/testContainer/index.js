import React, { useEffect } from 'react'
import Header from './header';
import PhotographyComp from './photographyComp';
import LearningComp from './learningComp';
import './style.scss';

const TestContainer = () => {
  return (
    <div className='test-container'>
         <Header/>
         <PhotographyComp/>
         <LearningComp/>
    </div>
  )
}
export default TestContainer;