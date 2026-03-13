import React from 'react';
import Stars from './Stars';
import image from '../assets/images/avataaars.svg';

export default function Header() {
    return (
        <>
            <section className='header'>
                <div className='text text-light d-flex align-items-center justify-content-center flex-column gap-3'>
                    <img src={image} className='image'/>
                    <h1>Start Bootstrap</h1>
                    <Stars />
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </section>
        </>
    )
}