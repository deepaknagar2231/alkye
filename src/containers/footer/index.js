import React from 'react';
import IconBtns from './iconbtns';
import Links from './links';
import AlkyeTestBtn from './alkyeTestBtn';
import './style.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <IconBtns />
            <Links />
            <Links />
            <AlkyeTestBtn />
        </div>
    )
}

export default Footer;
