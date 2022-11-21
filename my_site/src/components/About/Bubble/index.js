import './index.scss';
import { useEffect, useState } from 'react';

const Bubble = ({title, date, desc, logo}) => {


    return (
        <>
        <div className='bubble-container'>
            <div className='title-container'>
                <div className='iner-title-container'>
                    <span className='title'> {title}</span>
                    <br />
                    <span className='date' >  {date[0]} - {date[1]}</span>
                </div>
                <img className='logo' src={logo} />
            </div>
            <span className='desc'>{desc}</span>
            
        </div>
        </> 
    )
}

export default Bubble;