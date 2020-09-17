import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import AuthRouter from './AuthRouter'
import JournalScreen from '../components/journal/JournalScreen'
import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'
import { login } from '../action/auth'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {   
        
        firebase.auth().onAuthStateChanged(user => {

            if( user?.uid ) {
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
            
            setChecking(false);

        });

    }, [dispatch, setChecking, setIsLoggedIn])


    if(checking){
        return(<h1>Wait...</h1>)
    }

    return (
            <Router>
                <div>
                <Switch>
                    <PublicRoute 
                        path="/auth" 
                        component={AuthRouter} 
                        isAuthenticated={isLoggedIn}/>
                    <PrivateRoute
                        exact 
                        path="/" 
                        component={JournalScreen} 
                        isAuthenticated={isLoggedIn}/>
                    <Redirect
                        to={'/auth/login'}
                    />
                </Switch>

                </div>
            </Router>
    )
}

export default AppRouter
