import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/A.svg';
import LogoSubtitle from '../../assets/images/Antoine.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCode, faHome, faUser, faEnvelope, faClose } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

return (
<div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoS} alt="logo" />
        <img className='sub-logo' src={LogoSubtitle} alt="Antoine Ricourt" />
    </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" className="home-link" to="/" onClick={() => setShowNav(false)} >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)} >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="skill-link" to="/skill" onClick={() => setShowNav(false)} >
            <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)} >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#77C4D3" size="3x" className='close-icon'/>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antoine-ricourt-45889b198/">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        {/* <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/antoinerct">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li> */}
        <li>
            <a target="_blank" rel="noreferrer" href="">
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
        </li>
    </ul>
    <FontAwesomeIcon icon={faBars} color="#77C4D3" size="3x" className='hamburger-icon' onClick={() => setShowNav(true)}/>
</div>)
}

export default Sidebar;