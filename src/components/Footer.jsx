import { AiFillGithub,
AiFillLinkedin } from "react-icons/ai"
import { BiGitBranch } from "react-icons/bi";

export default function Footer() {
    return (
        <footer>
        <p>© 2024 Max</p>
        <p>
          <a href="https://github.com/p111111111uto" target="_blank" rel="noopener noreferrer" style={{color:'white', fontSize:'20px'}}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/max-martinez1010" target="_blank" rel="noopener noreferrer" style={{color:'white', fontSize:'20px'}}>
            <AiFillLinkedin />
        </a>
        <a href="https://github.com/p111111111uto/max-martinez.dev" target="_blank" rel="noopener noreferrer" style={{color:'white', fontSize:'20px'}}>
          <BiGitBranch />
        </a>
        </p>
      </footer>
    )
}