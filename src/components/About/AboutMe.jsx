import me from './assets/me.jpeg'
import { Link } from 'react-router-dom'

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <h1 id="firstH">Get to know <span style={{color:'#FFD700'}}> me</span></h1>
            <div className="aboutBody">
                <div className="extra">
                    <img src={me} style={{maxWidth: '1000px', maxHeight: '1000px', objectFit: 'cover' }} />
                </div>
                <div className="details">
                    <h3>
                        Hello world! My name is Maria, but you can call me either <span style={{color: 'FFD700'}}>Max</span>. Growing up I loved played video games and tinkering with electronics as well as building/making new things. I started my tech journey in 2023 and have learned so much since then! You can learn more my work experience from my <Link to='/resume' style={{color: '#FFD700', textDecoration:'none'}}>resume.</Link> Besides my work experience, I enjoy playing video games, listening to music, working out, reading books, and spending time with loved ones.
                    </h3>
                </div>
                </div>
            </div>
    )
}