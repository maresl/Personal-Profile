import './Skills.css'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'


const Skills = () => {
    return (
        <div className='skills-container'>
            <div className='skills-row'>
                <Col xs={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} className='skills-col'>
                    <h1 className='skills'>Skills</h1>
                    <Image src='/images/Chart/Front End.png' fluid />
                </Col>
            </div>
        </div>
    )
}

export default Skills