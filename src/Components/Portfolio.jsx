import React from 'react'
import Stars from './Stars'
import cabin from '../assets/images/cabin.png'
import cake from '../assets/images/cake.png'
import circus from '../assets/images/circus.png'
import game from '../assets/images/game.png'
import safe from '../assets/images/safe.png'
import submarine from '../assets/images/submarine.png'

export default function Portfolio() {
    return (
        <>
            <section className='mt-5 portfolio'>
                <h2 className='text-center text-uppercase fw-bolder'>Portfolio</h2>
                <Stars/>
                <div className="container mt-3">
                    <div className="row row-gap-4">
                        <div className="col-4">
                            <img src={cabin} className='w-100 rounded' />
                        </div>
                        <div className="col-4">
                            <img src={cake} className='w-100 rounded' />
                        </div>
                        <div className="col-4">
                            <img src={circus} className='w-100 rounded' />
                        </div>
                        <div className="col-4">
                            <img src={game} className='w-100 rounded' />
                        </div>
                        <div className="col-4">
                            <img src={safe} className='w-100 rounded' />
                        </div>
                        <div className="col-4">
                            <img src={submarine} className='w-100 rounded' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}