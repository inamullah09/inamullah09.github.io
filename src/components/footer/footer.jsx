import React from 'react'
import { Col, Container, Form, Nav, Row } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const KWFooter = () => {
    return (
        <div style={{ backgroundColor: '#044dac' }}>
            <Container>
                <Row>
                    <Col sm={12} lg={3}>
                        <h1 className='text-light'>___</h1>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link eventKey="link-1" className='text-light'>Link 1</Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-light'>Link 2</Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-light'>Link 3</Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-light'>Link 4</Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-light'>Link 4</Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-light'>Link 4</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={12} lg={6} className='mt-2 mt-lg-5'>
                        <h4 className='text-light'>Leave your message for us</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='text-light'>Enter your email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='text-light'>Enter your message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <button className="btn btn-light">Submit</button>
                            </Form.Group>

                        </Form>
                    </Col>
                    <Col sm={12} lg={3}>
                        <Nav defaultActiveKey="/home" className='mt-2 mt-lg-5 mb-5'>
                            <Nav.Link eventKey="link-1" className='text-light'><FaFacebook size={25}/></Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-light'><FaTwitter size={25}/></Nav.Link>
                            <Nav.Link eventKey="link-1" className='text-light'><FaInstagram size={25}/></Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KWFooter