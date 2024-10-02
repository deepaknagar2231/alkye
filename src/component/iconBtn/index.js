import React from 'react';
import './style.scss'

function IconBtn({ imgPath, title }) {
    return (
        <button title={title} className='btns'>
            <img src={imgPath || ""} alt={title} style={{ width: '1.5rem', height: '1.5rem', border: "#ffffff" }} />
        </button>
    );
}
export default IconBtn;