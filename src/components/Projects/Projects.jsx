import echoesOfAstra from './assets/echoes-of-astra.png'
import socialAPI from './assets/socialAPI.png'
import JSQuiz from './assets/JSQuiz.png'
import OGPortfolio from './assets/OGPortfolio.png'
import raspberrypi from './assets/raspberry-pi.png'
import {
AiFillGithub,
AiFillEye,
AiFillLinkedin } from 'react-icons/ai';

export default function Projects() {
    return (
        <div className="projectContainer">
            <h1 style={{marginTop: '4rem'}}><span style={{color: '#FFD700'}}>Projects</span></h1>
            <div className="projects">
            <div className="projectCard">
                <img src={raspberrypi} alt='Raspberry Pi 5 Server' className='projectImg' />
                <div className="projectInfo">
                    <h3>Raspberry Pi 5 Home Server</h3>
                    <p>I created a custom home server using Raspberry Pi 5. I host my own game servers, cloud storage using Nextcloud, and VPN using PiVPN/Wireguard. This project is ever-growing with more additions to come in the future!</p>
                </div>
                <div className="projectLinks">
                    <a href='https://www.linkedin.com/in/max-martinez1010/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADyvh8oBukWzWszd_omSWVQCG7nrDLp4LEE' target='_blank' className='demo'>
                        <AiFillLinkedin />
                    </a>
                </div>
            </div>
            <div className="projectCard">
                <img src={echoesOfAstra} alt="Echoes of Astra" className="projectImg" />
                <div className="projectInfo">
                    <h3>Echoes of Astra</h3>
                    <p>Echoes of Astra is a AI powered dream enterpreter that allows you enter any dream that you have had recently and tell you the meaning of it as well as common dream meanings. This was the final project I did at the University of Miami's coding bootcamp. We had to make this project entirely from scratch as well as deploy it to the web and present it to the class. This project was a lot of work as we used several technologies we weren't super familiar with, including AI, but I am very proud of how it turned out and how well my team and I worked together!</p>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/reagan1440/Echoes-of-Astra" target="_blank" className="github">
                        <AiFillGithub />
                    </a>
                    <a href="https://echoes-of-astra.onrender.com/" target="_blank" className="demo">
                        <AiFillEye />
                    </a>
                </div>
            </div>
            <div className="projectCard">
                <img src={socialAPI} alt="socialAPI" className="projectImg" />
                <div className="projectInfo">
                    <h3>Social.net</h3>
                    <p>This project is a social network API where you can create, delete, add friends, and remove friends. This project was made using MongoDB, Javascript, Express.js and Insomnia to locate the endpoints. This project unfortunately does not have an interface but it showcases of how I make API servers along front end websites.</p>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/p111111111uto/social.net?tab=readme-ov-file" target="_blank" className="github">
                        <AiFillGithub />
                    </a>
                </div>
            </div>
            <div className="projectCard">
                <img src={JSQuiz} alt="JSQuiz" className="projectImg" />
                <div className="projectInfo">
                    <h3>JavaScript Quiz</h3>
                    <p>This project is a JavaScript coding quiz. The purpose of this project was to enhance my JavaScript skills using timers, functions, event listeners and so forth. To start this project, you click on the &quot;Start now&quot; button. From there you will be need to answer 12 questions, if you get a question wrong, you will be penalized 2 seconds from the 15 seconds for each question. At the end, you will see how many questions you got right out of 12. You can also save your score as well as see the leaderboard. I have a lot of fun making this project and it definitely helped sharpening my JavaScript skills!</p>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/p111111111uto/JS-quiz" target="_blank" className="github">
                        <AiFillGithub />
                    </a>
                    <a href="https://p111111111uto.github.io/JS-quiz/" target="_blank" className="demo">
                        <AiFillEye />
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}