import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', ' ', 'p', 'r', 'o', 'p', 'o', 's']}
                        idx={15}
                    />
                </h1>
                <p>I'm ambitious web dev</p>
                <p>I'm confident web dev</p>
                <p>cool</p>
           </div>
           <Loader type="pacman"/>
        </div>
    )
}

export default About;