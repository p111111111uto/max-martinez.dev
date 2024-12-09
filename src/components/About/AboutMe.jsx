import SkillSet from "./SkillSet"
import Tools from "./Tools"
import me from './assests/me.jpg'
import { Link } from 'react-router-dom'

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <h1 id="firstH">Get to know <span style={{color:'#FFD700'}}> me</span></h1>
            <div className="aboutBody">
                <div className="extra">
                    <img src={me}/>
                </div>
                <div className="details">
                    <p>
                        Hello world! My name is Maria, but you can call me either <span style={{color: 'FFD700'}}>Max</span> or <span style={{color: 'FFD700'}}>Mar</span>. Growing up I loved played video games and tinkering with electronics as well as building/making new things. I started my tech journey in 2021 and have learned so much since then! You can learn more my work experience from my <Link to='/resume' style={{color: '#FFD700', textDecoration:'none'}}>resume.</Link> Besides my work experience, I enjoy playing video games, listening to music, working out, reading books, and spending time with loved ones.
                    </p>
                </div>
                <div className="skillSet">
                    <h1><span style={{color:'#FFD700'}}> Languages & Tools </span>I Use</h1>
                    <SkillSet />
                    <Tools />
                </div>
            </div>
        </div>
    )
}