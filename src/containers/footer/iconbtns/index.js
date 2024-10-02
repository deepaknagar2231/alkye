import React from 'react'
import IconBtn from '../../../component/iconBtn';
import facebook from '../../../utils/icons/facebook.png'
import instagram from '../../../utils/icons/instagram.png'
import twitch from '../../../utils/icons/twitch.png'
import twitter from '../../../utils/icons/twitter.png'
import youtube from '../../../utils/icons/youtube.png'
import './style.scss';

const IconBtns = () => {
    const arrBtns = [
        { title: "Facebook", imgPath: facebook },
        { title: "instagram", imgPath: instagram },
        { title: "twitter", imgPath: twitter },
        { title: "twitch", imgPath: twitch },
        { title: "youtube", imgPath: youtube },
    ]
    return (
        <div className='icon-btns'>
            {arrBtns.map((icon, index) => {
                return <IconBtn key={index} imgPath={icon.imgPath} title={icon.title} />
            })}

        </div>
    )
}
export default IconBtns;