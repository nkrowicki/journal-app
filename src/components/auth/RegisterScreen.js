import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';

const RegisterScreen = () => {



    const [formValue, handleInput ]= useForm({
        name:'',
        email:'',
        password: '',
        password2: ''
    })

    const {name,email, password, password2} = formValue;

    const handleRegister = e => {

        e.preventDefault();

        if(isFormValid()) {
            console.log('Es valido')
        }

    }

    const isFormValid = () =>{

        if(name.trim().length === 0 ) {
            console.log('Name required')
            return false;
        }else if (!validator.isEmail(email)){
            console.log('Email is not valid')
            return false;
        }else if (password!== password2 || password.length <5 ){
            console.log('Password should be at least 6 characters and match each other')
            return false;
        }

        return true;
    }
    
    return (
        <div>
        <h3 className="auth__title">Register</h3>
        
        <form
            onSubmit={handleRegister}
        >

            <div className="auth__alert-error">
                Hola Mundo
            </div>
            <input
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                onChange={handleInput}
                value={name}
                />

            <input
                type="password"
                placeholder="Email"
                name="email"
                className="auth__input"
                onChange={handleInput}
                value={email}
                />

            <input
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                onChange={handleInput}
                value={password}
                />

            <input
                type="password"
                placeholder="Confirm"
                name="password2"
                className="auth__input"
                onChange={handleInput}
                value={password2}
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
