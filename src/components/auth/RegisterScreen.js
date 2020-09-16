import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { setError, removeError } from '../../action/ui';
import { useDispatch, useSelector } from 'react-redux'
import store from '../../store/store';
import { startRegisterWithEmailPasswordName } from '../../action/auth';


const RegisterScreen = () => {


    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);

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
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }

    }

    const isFormValid = () =>{

        if(name.trim().length === 0 ) {
            dispatch(setError('Introduzca nombre'))
            return false;

        }else if (!validator.isEmail(email)){
            dispatch(setError('Email is not valid'))
            return false;

        }else if (password!== password2 || password.length <5 ){
            dispatch(setError('Password should be at least 6 characters and match each other'))
            return false;
        }
        dispatch(removeError());
        return true;
    }
    
    return (
        <div>
        <h3 className="auth__title">Register</h3>
        
        <form
            onSubmit={handleRegister}
        >

           { msgError && 
            <div className="auth__alert-error">
                    {msgError}
                </div>}
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
