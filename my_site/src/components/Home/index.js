import './index.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoA from '../../assets/images/A.svg';
import LogoR from '../../assets/images/R.svg';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const bonjourArray = ['B', 'o', 'n', 'j', 'o', 'u' , 'r', ',' ];
    const jesuisArray = ['j', 'e', ' ', 's', 'u', 'i', 's', ' '];
    const nameArray = ['n', 't', 'o', 'i', 'n', 'e' , ' ' ];
    const lastNameArray = ['i', 'c', 'o', 'u', 'r', 't' , ' ' ];
    const jobArray = ['D', 'é', 'v', 'e', 'l', 'o', 'p','p','e','u','r', ' ', 'F', 'u','l','l',' ','S','t','a','c','k'];
    
    useEffect(() => {
            setTimeout(() => {
                return setLetterClass('text-animate-hover')
            }, 4000)
    }, [])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={bonjourArray} idx={12} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jesuisArray} idx={15} />
                    <img src={LogoA} alt='' />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={22} />
                    <img src={LogoR} alt='' />
                    <AnimatedLetters letterClass={letterClass} strArray={lastNameArray} idx={23} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={32} />
                </h1>
                {/* <h2> Frontend Developer / Javascript Expert </h2> */}
                <Link to="/contact" className='flat-button'>CONTACTEZ MOI</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home;