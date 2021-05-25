import './Hero.css'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'


const Hero = () => {
    const [show, setShow] = useState(false);

    return(

        <div className='hero-image'>
            <div className="hero-text">
                <h1>My name is Leslie Mares</h1>
                <br />
                <h3>And I am a Full Stack Engineer</h3>
                <br />

                <Alert show={show} variant="info">
                    <Alert.Heading>Contact Information</Alert.Heading>
                    <ul className="contact-info">
                        <li>email: lmmares102@gmail.com</li>
                        <li>mobile: 909-997-5204</li>
                    </ul>
                    <hr />
                    <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-info">
                        Close
                    </Button>
                    </div>
                </Alert>

                {!show && <Button variant="info" size="lg" onClick={() => setShow(true)}>Hire Me</Button>}
            </div>
        </div>
    )
}

export default Hero