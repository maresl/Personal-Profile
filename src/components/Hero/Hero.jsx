import './Hero.css'


const Hero = () => {

    return (

        <div className='hero-image' >
            <img src='/images/Nature/sunset.jpg' className='hero-image-two' alt='hero' />
            <div className="hero-text">
                <h1>My name is <br /><span className='my-name'>Leslie Mares</span><br /> I am a <br />Full Stack Engineer</h1>
            </div>
        </div>
    )
}

export default Hero