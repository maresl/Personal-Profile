import './Hero.css'
import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button'
// import Alert from 'react-bootstrap/Alert'


const Hero = () => {
    // const [show, setShow] = useState(false);

    return (

        <div className='hero-image' >
            <img src='/images/Nature/sunset.jpg' className='hero-image-two' alt='hero' />
            <div className="hero-text">
                <h1>My name is <br /><span className='my-name'>Leslie Mares</span><br /> I am a <br />Full Stack Engineer</h1>

                {/* <Alert show={show} variant="info">
                    <Alert.Heading>Contact Information</Alert.Heading>
                    <ul className="contact-info">
                        <li>Email: <a href="mailto:lmmares102@gmail.com">lmmares102@gmail.com</a></li>
                        <li>Mobile: 909-997-5204</li>
                        <li>Location: Seattle, WA</li>
                    </ul>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)} variant="outline-info">
                            Close
                        </Button>
                    </div>
                </Alert>

                {!show && <Button variant="info" size="lg" onClick={() => setShow(true)}>Contact Me</Button>} */}
            </div>
        </div>
    )
}

export default Hero