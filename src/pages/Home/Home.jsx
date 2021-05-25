import './Home.css'
import Project from '../../components/Project/Project'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Technologies from '../../components/Technologies/Technologies'
import chess from './images/Chess_pic.png'
import flexipes from './images/flexipes_pic.jpeg'
import swipebrite from './images/SwipeBrite_pic2.jpeg'
import foodie from './images/Foodie_pic.jpeg'

const Home = () => {
    return(
        <div>
            <Hero />
            <About />
            <div className="projects">
                <Project 
                    title="FLEXipes: Recipes for Everyday Cooking" 
                    image={flexipes}
                    desciption="Recipe recommendations based on the ingredients users already have at home"
                    code="https://github.com/maresl/FLEXipes"
                    demo="https://flexipes.herokuapp.com/"/>
                <Project 
                    title="SwipeBrite" 
                    image={swipebrite}
                    desciption="Search events near you and save them as Favorites"
                    code="https://github.com/maresl/SwipeBrite"
                    demo="https://swipebritefrontend.herokuapp.com/"/>
                <Project 
                    title="Foodie!" 
                    image={foodie}
                    desciption="Social Media App that allows community sharing of food experience and photos"
                    code="https://github.com/maresl/Foodie-github.io"
                    demo="https://polar-lowlands-26830.herokuapp.com/home"/>
                <Project 
                    title="Chess" 
                    image={chess}
                    desciption="A beginners chess game"
                    code="https://github.com/maresl/maresl.github.io"
                    demo="https://maresl.github.io/"/>
            </div>
            <Technologies />
        </div>
    )
}

export default Home