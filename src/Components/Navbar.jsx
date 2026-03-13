import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className='SB'>
                          <h2>Start Bootstrap</h2>
                    </div>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to={'/'}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to={'/contact'}>Contact</Link>
                            </li>
                           
                        </ul>
                        
                    </div>
                </div>
            </nav>


        </>

    )
}
