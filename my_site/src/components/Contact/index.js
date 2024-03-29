import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_xej5b8j',
            'template_0anf06o',
            refForm.current,
            'tCoVwXzrOpKCQX4Aq'
        ).then(() => {
            alert('Mail envoyé avec succés!');
            window.location.reload(false);
        
        },
        () => {
            alert("Un problème est survenu lors de l'envoi du mail.")
        })
    }

    return (
        <>
        <div className='container contact-page'>
               <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t','e','z',' ','m','o','i']}
                            idx={45}
                        />
                
                    </h1>
                    {/* <p>
                        Je suis intérrésser par des oprtunités freeleance
                    </p> */}
                    <div className='contact-form'>
                        <form  ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Nom' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder='Objet' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="ENVOYER"></input>
                            <div className='info-map'>
                    Antoine Ricourt,
                    <br />
                
                    <span>antoine.ricourt@hotmail.com</span>
                            </div>
                                </li>
                            </ul>
                        </form>
                        
                    </div>
               </div>
               
        </div>
        <Loader type="square-spin" />
        </>
    )
}

export default Contact;