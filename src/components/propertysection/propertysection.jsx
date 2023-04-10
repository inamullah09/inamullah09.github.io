import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import KWPropertyCard from '../propertycard/propertycard'
import img from '../../assets/property.jpg'
import './propertysection.css'

const KWPropertySection = () => {
  return (
    <Container className='mb-4'>
        <h1 className="mb-2">Rental <span className="blue">Properties</span></h1>
        <h4 className='mb-3'>TRUSTABLE, EASY, FURNISHED</h4>
        <Row>
            <Col sm={12} lg={4}><KWPropertyCard img={img}/></Col>
            <Col sm={12} lg={4}><KWPropertyCard img={img}/></Col>
            <Col sm={12} lg={4}><KWPropertyCard img={img}/></Col>
        </Row>
    </Container>
  )
}

export default KWPropertySection