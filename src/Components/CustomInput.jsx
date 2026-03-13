import React from 'react'

export default function CustomInput({text , type}) {
    return (
        <div className="form-floating mb-3">
            <input type={type} className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">{text}</label>
        </div>
    )
}
