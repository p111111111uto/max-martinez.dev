import {
    DiCss3,
    DiJavascript1,
    DiNodejs,
    DiReact,
    DiJqueryLogo,
    DiMongodb,
    DiMysql
} from 'react-icons/di';

export default function SkillSet() {
    return (
        <div className="iconContainer">
            <div className='icon'><DiCss3 /></div>
            <div className="icon"><DiJavascript1 /></div>
            <div className="icon"><DiNodejs /></div>
            <div className="icon"><DiReact /></div>
            <div className="icon"><DiJqueryLogo /></div>
            <div className="icon"><DiMongodb /></div>
            <div className="icon"><DiMysql /></div>
        </div>
    );
}