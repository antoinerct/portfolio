import './index.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['A', 'n', 't', 'o', 'i', 'n', 'e' , ' ' ];
    const jobArray = ['D', 'é', 'v', 'e', 'l', 'o', 'p','p','e','u','r' ];
    
    useEffect(() => {
            setTimeout(() => {
                return setLetterClass('text-animate-hover')
            }, 4000)
    }, [])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>B</span>
                    <span className={`${letterClass} _12`}>onjour,</span>
                    <br />
                    <span className={`${letterClass} _13`}>je</span>
                    <span className={`${letterClass} _14`}> suis</span>
 
                    <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                     Ricourt
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                    </h1>
                    <h2> Frontend Developer / Javascript Expert </h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                
            </div>
            <Logo />
        </div>
    )
}

export default Home;