import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const KWPropertyCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card style={{ width: '100%' }} className={`${isHovered ? 'animate__animated animate__pulse' : ''}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title><h3 className="text-primary">Property</h3></Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed earum beatae impedit praesentium ducimus eligendi vero! Qui consequatur voluptatem sunt nostrum ut! Mollitia facere praesentium, consequuntur ut quasi architecto?
          <h6 className="mt-2"><span className="text-primary">$20,000</span> /month</h6>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default KWPropertyCard