import React from 'react';
import AuthForm from '../components/Auth/AuthForm';
// import Auth from '../components/Auth/AuthFrom';

function AuthPage(props) {
    return (
        <AuthForm show={props.show}/>
    )
}

export default AuthPage
