import './About.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const About = () => {
    return (
        <div className='about-me'>


            <Container fluid>
                <Row>
                    <Col className="img-me" md={10} lg={6}>
                        <Carousel>
                            <Carousel.Item>
                                <Image className="img"
                                    src='/images/AboutMe/Carousel1_B.jpg'
                                    alt="slide"
                                    fluid data-aos="fade-right"
                                    data-aos-duration="3000" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="img"
                                    src='/images/AboutMe/ProfilePic.jpg'
                                    alt="slide"
                                    fluid data-aos="fade-right"
                                    data-aos-duration="3000" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="img"
                                    src='/images/AboutMe/Carousel3.jpg'
                                    alt="slide"
                                    fluid data-aos="fade-right"
                                    data-aos-duration="3000" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="img"
                                    src='/images/AboutMe/Carousel2.jpg'
                                    alt="slide"
                                    fluid data-aos="fade-right"
                                    data-aos-duration="3000" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="img"
                                    src='/images/AboutMe/Carousel6.jpg'
                                    alt="slide"
                                    fluid data-aos="fade-right"
                                    data-aos-duration="3000" />
                            </Carousel.Item>
                        </Carousel>


                    </Col>
                    <Col className="desc-me" data-aos="fade-left" data-aos-duration="3000" md={10} lg={6} fluid >
                        <h1 className="about-me-title">Hi there!</h1>

                        <p>
                            I am Full-Stack Developer with a background in medical research and information technology committed to meeting rigorous industry standards through adaptability and creative problem solving. I am passionate about using process automation to make the world a better place.                    </p>
                        <p>
                            My definition of fun is: running outdoors (despite Seattle's perpetual drizzle), hiking, reading murder mysteries, and shopping for cute mugs
                        </p>
                        <p>
                            I'm also a proud dog mama!
                        </p>

                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default About