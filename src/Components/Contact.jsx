import React from 'react'
import Stars from './Stars'
import CustomInput from './CustomInput'

export default function Contact() {
    return (
        <>
            <section className='mt-5 contact'>
                <h2 className="text-center text-uppercase fw-bolder">Contact Me</h2>
                <Stars />
                <div className="container d-flex align-items-center justify-content-center flex-column gap-5">
                    <form className='w-50'>
                        <CustomInput text='Full name' type='text'/>
                        <CustomInput text='Email address'type='email' />
                        <CustomInput text='Phone number' type='tel'/>
                        <CustomInput text='Message' type='text' />
                        <button type='submit' className='btn'>Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}