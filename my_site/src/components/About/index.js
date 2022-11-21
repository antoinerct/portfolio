import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import Bubble from './Bubble';
import EpitechLogo from '../../assets/images/epitech-logo.png';
import xsaltoLogo from '../../assets/images/xsalto-logo.png';
import saintGobainLogo from '../../assets/images/sg-logo.png';
import rexLogo from '../../assets/images/rex-logo.png';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const diplomeArray = ['D', 'i', 'p', 'l', 'o', 'm', 'e','s',' '];
    const etArray = ['e','t',' '];
    const formationArray = ['F', 'o', 'r','m','a','t','i','o','n','s'];
    
    const stageArray = ['S', 't', 'a', 'g', 'e', 's', ' '];
    const enArray = ['e','n',' '];
    const entrepriseArray = ['E','n', 't', 'r', 'e','p','r','i','s','e'];
    
    const passionArray = ['C', 'e', 'n', 't', 'r', 'e', 's',' ','d','\'','i','n', 't', 'é','r', 'ê','t'];
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className=' about-page'>
            <div className='text-zone2'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={diplomeArray}
                        idx={15}
                    />
                                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={etArray}
                        idx={16}
                    />
                                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={formationArray}
                        idx={17}
                    />
                </h1>
                <Bubble logo={EpitechLogo} title={"Epitech, Lyon"} date={["2017", "2022"]} desc={"La pédagogie d'Epitech se résume en quelques mots, l'apprentissage par la pratique. Les étudiants sont obligés de découvrir eux-mêmes certaines technologies ou principes de programmation les forçant à travaillé en autonomie pour être capable de se former soit même lorsqu'une nouvelle technologie arrive sur le marché"} />
                <div className='break' />
                </div>
                <div className='text-zone2'>

                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={stageArray}
                        idx={15}
                    />
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={enArray}
                        idx={15}
                    />
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={entrepriseArray}
                        idx={15}
                    />
                </h1>
                <Bubble logo={rexLogo} title={"Rex Rotary • Ricoh"} date={["Mars 2022", "Aout 2022"]} desc={"Créé et maintenir de nouveaux programmes sur un ERP fait maison. J'ai développé différents programmes comme un générateur de PPT, un tracker de consommation électrique de toutes les agences en France ou encore des programmes de business intelligence pour avoir un aperçu rapide des performances de l'entreprise."} />
                <Bubble logo={xsaltoLogo} title={"Xsalto"} date={["Mars 2020", "Juin 2020"]} desc={"Développement et mise en place en interne d’un système de workflow permettant l’automatisation de divers processus comme par exemple une demande de congés."} />
                <Bubble logo={saintGobainLogo} title={"Saint-Gobain"} date={["Juillet 2018", "Novembre 2018"]} desc={"Développement de programmes d’extraction de données automatisées intégrées à Excel permettant d’avoir un bilan visuel des ressources du site de production."} />

                {/* <div className='break' />
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={passionArray}
                        idx={15}
                    />
                </h1> */}

           
           </div>
           <Loader type="pacman"/>
        </div>
        <Loader type="square-spin"/>
        </> 
    )
}

export default About;