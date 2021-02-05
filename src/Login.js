
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const signIn=(e) => {
        e.preventDefault();//this makes it so it doesnt reload
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/tasks')
        }).catch(error => alert(error.message))
    }

    return (
        <div className = "login">
            {/* Logo */}
            {/* Email */}
            {/* Password */}
            {/* Button to login */}
            {/* Create new account */}
            <div className = "login__header">
                {/* <img 
                    className = "login__logo"
                    src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"
                    alt = ""
                /> */}
                <h1 className = "logo__text">To-Do List</h1>
            </div>

            {/* This is where the email and password container will appear. */}
            <div className = "login__container">
                <form>
                    <h5>Email</h5>
                    <input type= 'text' value = {email} 
                        onChange={e=>setEmail(e.target.value)} /> {/* This is what gets the email from the user */}
                    
                    <h5>Password</h5>
                    <input type= 'password' value={password}
                    onChange={e=>setPassword(e.target.value)} />{/* This is what gets the password from the user */}
                    
                    <button type='submit' onClick={signIn}  
                        className="login__signInButton">
                        Sign In
                    </button>

                    <p>----or----</p>

                    <Link to = "/register">
                        <button type = "register"
                            className = "clickregister__Button">
                            Create your Account
                        </button>
                    </Link>

                </form>
            </div>

        </div>
    )
}

export default Login
