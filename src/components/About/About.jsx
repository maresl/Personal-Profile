import './About.css'
import image from './ProfilePic.jpg'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const About = () => {
    return(
        <Container className='about-me' fluid>
            <Row>
                <Col className="img-me" md={12} lg={6}>
                    <Image className="img" src={image} alt="me" fluid/>
                </Col>
                <Col className="desc-me" md={12} lg={6} fluid>
                    <h1 className="about-me-title">About Me</h1>
                    
                    <p>
                    I am a Full Stack Developer with a background in medical research and a passion for solving problems that make the world a better place. I thrive in a fluid environment with new challenges, and enjoy building teams and supporting team goals.
                    </p>
                    <p>
                    My definition of fun is: running outdoors (despite Seattle's perpetual drizzle), hiking, reading murder mysteries, and shopping for cute mugs
                    </p>

                    <h4>
                    SKILLS: MERN stack (MongoDB, Express, React, Node. js), Object Oriented Programming, Restful API's, Model-View-Controller Framework
                    </h4>
                </Col>
            </Row>
        </Container>
    )
}

export default About