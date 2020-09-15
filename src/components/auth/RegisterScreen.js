import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    return (
        <div>
        <h3 className="auth__title">Register</h3>
        
        <form>
            <input
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                />

            <input
                type="password"
                placeholder="Email"
                name="email"
                className="auth__input"
                />

            <input
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                />

            <input
                type="password"
                placeholder="Confirm"
                name="password2"
                className="auth__input"
                />
            
            
            <button 
                type="submit"
                className="btn btn-primary btn-block"
                >Register</button>

            <hr />
            
            <Link
                to="/auth/login"
                className="link mb-5">
                Already Register
            </Link>

        </form>
</div>
    )
}

export default RegisterScreen
