import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import AnimatedBar from './AnimatedBar';
import { SkillBar } from 'react-skillbars';

const Skill = () => {

    
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['C', 'o', 'm', 'p', 'é', 't', 'e', 'n', 'c', 'e', 's'];

    return (
        <div className='allItem'>
            <div className='text-zone1'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
                </h1>
            </div>
            <div className="containerSkill">
                <div className="skill-box">
                    <span className="title">ReactJS</span>
                    <div className="skill-bar">
                        <span className="skill-per react">
                            <span className="tooltip">100%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">NodeJS</span>
                    <div className="skill-bar">
                        <span className="skill-per node">
                            <span className="tooltip">85%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">React-Native</span>
                    <div className="skill-bar">
                        <span className="skill-per rn">
                            <span className="tooltip">75%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">PHP</span>
                    <div className="skill-bar">
                        <span className="skill-per php">
                            <span className="tooltip">90%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">MongoDB</span>
                    <div className="skill-bar">
                        <span className="skill-per mongo">
                            <span className="tooltip">60%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">MySQL</span>
                    <div className="skill-bar">
                        <span className="skill-per mysql">
                            <span className="tooltip">85%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">SQL</span>
                    <div className="skill-bar">
                        <span className="skill-per sql">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Git</span>
                    <div className="skill-bar">
                        <span className="skill-per git">
                            <span className="tooltip">100%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>)
}




export default Skill;