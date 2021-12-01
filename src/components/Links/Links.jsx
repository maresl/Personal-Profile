import './Links.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const Links = () => {
    return (

        <div className='links-container' style={{
            backgroundImage: "url(/images/comp_resized.jpeg)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Container className='links-container' fluid>
                <Row className="justify-content-md-center links-row">
                    <Col xs={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}>
                        <Card.Link href="https://github.com/maresl" target="_blank" rel="noreferrer" variant='dark'>
                            <Card text='dark' bsPrefix='card'>
                                <Card.Img variant="top" src="/images/Links/github.png" fluid />
                                <Card.Body>
                                    <Card.Text>
                                        Github
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Link>
                    </Col>
                    <Col xs={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}>
                        <Card.Link href="https://drive.google.com/file/d/1aQhIPmkQ0gxGBr-CTedw2d8Ze5dnKTC3/view?usp=sharing" target="_blank" rel="noreferrer">
                            <Card text='dark'>
                                <Card.Img variant="top" src="/images/Links/Resume.png" fluid />
                                <Card.Body>
                                    <Card.Text>
                                        Resume
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Link>
                    </Col>
                    <Col xs={{ span: 4, offset: 4 }} md={{ span: 3, offset: 0 }}>
                        <Card.Link href="https://www.linkedin.com/in/leslie-mares/" target="_blank" rel="noreferrer">
                            <Card text='dark'>
                                <Card.Img variant="top" src="/images/Links/Linkedin.png" fluid />
                                <Card.Body>
                                    <Card.Text>
                                        LinkedIn
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Link>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Links