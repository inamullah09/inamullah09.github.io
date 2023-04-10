import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './card.css'
import 'animate.css'

const TWCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`card-container mb-5 mx-2 p-4 ${isHovered ? 'animate__animated animate__pulse' : ''}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
        {props.icon}
        <h2 className='blue my-2'>{props.heading}</h2>
        <p>{props.paragraph}</p>
        <Button variant='outline-primary'>Learn More </Button>
    </div>
  )
}

export default TWCard