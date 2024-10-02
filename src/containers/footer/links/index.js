import React from 'react'
import './style.scss';

const Links = () => {
  const arrLink = [
    { title: "Privacy Policy", name: "Privacy Policy" },
    { title: "Contact Us", name: "Contact Us" },
    { title: "Cookie preferences", name: "Cookie preferences" },
    { title: "Corporate Information", name: "Corporate Information" }
  ]
  return (
    <div className='links'>
      {arrLink.map((ele, index) => {
        return <span key={index} title={ele.title}>{ele.name}</span>
      })}
    </div>
  )
}

export default Links;