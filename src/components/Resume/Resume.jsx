import resume from './assets/Technical Resume.jpg'
import './assets/style.css'

export default function Resume() {
    return (
        <div className="resumeContainer">
            <h1>My Resume</h1>
            <img src={resume} alt="resume" />
        </div>
    )
}