import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import mongoDB from './images/mongoDB.png'
import express from './images/expressJs.png'
import react from './images/react.png'
import node from './images/nodeJs.png'
import django from './images/django.jpeg'
import js from './images/javaScript.png'
import postgres from './images/postgres.png'
import python from './images/python.jpeg'
import jquery from './images/jQuery.png'
import bootstrap from './images/bootstrap.png'
import materialize from './images/materialize.png'



const Tecnologies = () => {
    return(
        <div>
            <h1>Tecnologies</h1>
            <Container className='about-me' fluid>
                <Row>
                    <Col xs={4} md={3}>
                        <Image src={mongoDB} alt="mongo" fluid/>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src={express} alt="mongo" fluid/>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src={react} alt="mongo" fluid/>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src={node} alt="mongo" fluid/>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src={django} alt="mongo" fluid/>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src={js} alt="mongo" fluid/>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src={postgres} alt="mongo" fluid/>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src={python} alt="mongo" fluid/>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src={jquery} alt="mongo" fluid/>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src={bootstrap} alt="mongo" fluid/>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src={materialize} alt="mongo" fluid/>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Tecnologies