import Particle from "../Particle";
import recipeApp from './assets/recipeApp.png'
import socialAPI from './assets/socialAPI.png'
import JSQuiz from './assets/JSQuiz.png'
import OGPortfolio from './assets/OGPortfolio.png'
import {
AiFillGithub,
AiFillEye } from 'react-icons/ai';

export default function Projects() {
    return (
        <div className="projectContainer">
            <Particle />
            <h1 style={{marginTop: '4rem'}}><span style={{color: '#7393B3'}}>Projects</span> I am most proud of.</h1>
            <div className="projects">
            <div className="projectCard">
                <img src={recipeApp} alt="recipe-app" className="projectImg" />
                <div className="projectInfo">
                    <h3>Recipe App</h3>
                    <p>This was the first group project I did during the University of Miami bootcamp. The challenge here was to make to make a functioning website using HTML, CSS, Javascript and API requests. Here is how the project works. There are two search bars: one for food recipe and one for drink recipes. If you want to know the ingredients of Gnocchi soup, you type that into the search bar and it will pop up instantly. For the drinks, it works the same. Say you want to make Sangria, type that in and there it appears. Although this project was made on the basics of web development, I am proud that this project came out just as we expected working in a group.</p>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/maxmruiz/recipe-app?tab=readme-ov-file" target="_blank" className="github">
                        <AiFillGithub />
                    </a>
                    <a href="https://maxmruiz.github.io/recipe-app/" target="_blank" className="demo">
                        <AiFillEye />
                    </a>
                </div>
            </div>
            <div className="projectCard">
                <img src={socialAPI} alt="socialAPI" className="projectImg" />
                <div className="projectInfo">
                    <h3>Social.net</h3>
                    <p>This project is a social network API where you can create, delete, add friends, adn remove friends. This project was made using MongoDB, Javascript, Express.js and Insomnia to locate the endpoints. This project unfortunately does not have an interface but it showcases of how I make API servers along front end websites.</p>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/maxmruiz/social.net?tab=readme-ov-file" target="_blank" className="github">
                        <AiFillGithub />
                    </a>
                </div>
            </div>
            <div className="projectCard">
                <img src={JSQuiz} alt="JSQuiz" className="projectImg" />
                <div className="projectInfo">
                    <h3>JavaScript Quiz</h3>
                    <p>This project is a JavaScript coding quiz. The purpose of this project was to enhance my JavaScript skills using timers, functions, event listeners and so forth. To start this project, you click on the &quot;Start now&quot; button. From there you will be need to answer 12 questions, if you get a question wrong, you will be penalized 2 seconds from the 15 seconds for each question. At the end, you will see how many questions you got rigt out of 12. You can also save your score as well as see the leaderboard. I have a lot of fun making this project and it definitely helped sharpening my JavaScript skills!</p>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/maxmruiz/JS-quiz" target="_blank" className="github">
                        <AiFillGithub />
                    </a>
                    <a href="https://maxmruiz.github.io/JS-quiz/" target="_blank" className="demo">
                        <AiFillEye />
                    </a>
                </div>
            </div>
            <div className="projectCard">
                <img src={OGPortfolio} alt="Old-Portfolio" className="projectImg" />
                <div className="projectInfo">
                    <h3>My first portfolio</h3>
                    <p>Last but not least: My first portfolio! I included this here to showcase how much I&apos;ve learned since I started programming. This portfolio did not have ANY Javascript nor functionality, it was just a static page. I think it&apos;s safe to say, I&apos;ve come a long way!</p>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/maxmruiz/professional-portfolio?tab=readme-ov-file" target="_blank" className="github">
                        <AiFillGithub />
                    </a>
                    <a href="https://maxmruiz.github.io/professional-portfolio/" target="_blank" className="demo">
                        <AiFillEye />
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}