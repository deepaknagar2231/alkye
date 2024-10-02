import React from 'react'
import IconBtn from '../iconBtn';
import testLogo from '../../utils/logos/Logo.png';

const Header = ({ className }) => {
    return (
        <div className={className}>
            <IconBtn imgPath={testLogo} title="Test" />
        </div>
    )
}
export default Header;