import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Links = () => {
    return (
        <Container className='skills-container' fluid>
            <Row>
                <h1 className='title'>
                    Links!
                </h1>
            </Row>
            <Row>

                <Col xs={12} md={4}>
                    <a href="https://github.com/maresl" target="_blank" rel="noreferrer">
                        <Card>
                            <Card.Img variant="top" src="/images/Links/github.png" className='img-custom' />
                            <Card.Body>
                                <Card.Text>
                                    Github
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col xs={12} md={4}>
                    <a href="https://drive.google.com/file/d/1aQhIPmkQ0gxGBr-CTedw2d8Ze5dnKTC3/view?usp=sharing" target="_blank" rel="noreferrer">
                        <Card>
                            <Card.Img variant="top" src="/images/Links/Resume.png" />
                            <Card.Body>
                                <Card.Text>
                                    Resume
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col xs={12} md={4}>
                    <a href="https://www.linkedin.com/in/leslie-mares/" target="_blank" rel="noreferrer">
                        <Card>
                            <Card.Img variant="top" src="/images/Links/Linkedin.png" />
                            <Card.Body>
                                <Card.Text>
                                    LinkedIn
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Links