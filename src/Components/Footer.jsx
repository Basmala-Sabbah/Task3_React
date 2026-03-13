import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='footer mt-5 p-5'>
                <div className="container d-flex align-items-center justify-content-between gap-5">
                    <div className="location d-flex align-items-center justify-content-center flex-column gap-2">
                        <h3>Location</h3>
                        <p>2215 John Daniel Drive
                            Clark, MO 65243</p>
                    </div>
                    <div className="around d-flex align-items-center justify-content-center flex-column gap-2">
                        <h3>Around the Web</h3>
                        <div className="contact d-flex align-items-center justify-content-center gap-2">
                           <div className='icons'>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-dribbble"></i>
                            </div>
                        </div>
                    </div>
                    <div className="freelancer w-25 d-flex align-items-center justify-content-center flex-column gap-2">
                        <h3>About Freelancer</h3>
                        <p className='text-center'>
                            Freelance is a free to use, MIT licensed Bootstrap theme created by <span>Start Bootstrap</span> .
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}