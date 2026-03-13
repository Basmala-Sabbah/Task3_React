import React from 'react'
import Stars from './Stars'

export default function About() {
    return (
        <>
            <section className='about mt-5 p-5'>
                    <h2 className='text-center text-uppercase fw-bolder'>About</h2>
                    <Stars />
                <div className="container mt-5 d-flex align-items-center justify-content-center flex-column gap-5">
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                        <div className="left-text">
                            <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="right-text">
                            <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                    </div>
                    <button className='d-flex align-items-center justify-content-center gap-3 fw-bolder text-light'><i className="fa-solid fa-download"></i>Free download!</button>
                </div>
            </section>
        </>
    )
}
