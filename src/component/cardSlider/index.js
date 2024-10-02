import React from 'react'
import Card from '../card';
import './style.scss';

const CardSlider = ({ title, images }) => {
    return (
        <div className='photos'>
            <h3>{title}</h3>
            <div className='photos-card'>
                {
                    images.map((ele, index) => {
                        return <Card key={index} title={ele.title} poster={ele.poster} />
                    })
                }
            </div>
        </div>
    )
}
export default CardSlider;