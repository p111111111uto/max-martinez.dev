import { AiFillGithub,
AiFillLinkedin } from "react-icons/ai"
import { GoFileCode } from "react-icons/go";

export default function Footer() {
    return (
        <footer>
        <p>© 2024 Max Martinez</p>
        <p>
          <a href="https://github.com/maxmruiz" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/max-martinez1010" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>
            <AiFillLinkedin />
        </a>
        <a href="https://github.com/maxmruiz/max-martinez.dev" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>
          <GoFileCode />
        </a>
        </p>
      </footer>
    )
}