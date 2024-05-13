import resume from './assets/resume.jpg'
import './assets/style.css'

export default function Resume() {
    return (
        <div className="resumeContainer">
            <h1>My Resume</h1>
            <img src={resume} alt="resume" />
            <a href={resume} download className='downloadBtn'>Download</a>
        </div>
    )
}