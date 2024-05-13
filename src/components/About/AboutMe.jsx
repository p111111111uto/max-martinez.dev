import SkillSet from "./SkillSet"
import Tools from "./Tools"
import { Link } from 'react-router-dom'

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <h1 id="firstH">Get to know <span style={{color:'#FFD700'}}> me</span></h1>
            <div className="aboutBody">
                <div className="extra">
                    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjAwODl5azRzMjRyeHUybjAwcmg4cGduZjY0NTJhdnFlMTFteHBlOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sIV0wFDrsKNxe/giphy.gif"
                    />
                </div>
                <div className="details">
                    <p>
                        Throughout my life I have enjoyed computers, I always found it fascinating how computers are able to do such complex things that seems like magic. However, as most of us in the field know and how my instructor always says, it is far from magic. That&apos;s what makes them so cool to work with. You can learn more my work experience from my <Link to='/resume' style={{color: '#FFD700', textDecoration:'none'}}>resume.</Link> Besides my work experience, I enjoy playing video games, listening to music, working out, reading books, and spending time with loved ones.
                        Fun fact about me: my favorite video game series is The Last of Us!
                    </p>
                </div>
                <div className="skillSet">
                    <h1><span style={{color:'#FFD700'}}> Languages </span> I Use</h1>
                    <SkillSet />
                </div>
                <div className="toolSet">
                    <h1><span style={{color:'#FFD700'}}>Tools</span> I Use</h1>
                    <Tools />
                </div>
            </div>
        </div>
    )
}