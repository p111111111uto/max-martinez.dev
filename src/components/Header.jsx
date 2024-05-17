import DropDown from "./DropDown";
import { BiGitBranch,
    BiSolidStar
 } from "react-icons/bi";

export default function Header() {
    return (
        <header className="headerContainer">
            <DropDown />
            <div className="sourceCode">
                <a href="https://github.com/maxmruiz/max-martinez.dev.git" target='_blank'><BiGitBranch/><BiSolidStar/></a>
            </div>
        </header>
    );
}