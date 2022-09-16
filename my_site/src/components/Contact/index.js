import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders'

const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className='container contact-page'>
               <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t','e','z',' ','m','o','i']}
                            idx={15}
                        />
                    
                    </h1>
               </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact;