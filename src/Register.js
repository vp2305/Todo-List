import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Register.css"

function Register() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser){
            //user has logged in...
            console.log(authUser);
            setUser(authUser);
    
          } else {
            // user has logged out...
            setUser(null);
          }
        })
    
        return () => {
          // perform some cleanup actions
          // this avoids overloading
          unsubscribe();
        }
    }, [user, username]);
    

    const signUp = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            history.push('/tasks')
            return authUser.user.updateProfile({
              displayName: username,
            })
        })
        .catch((error) => alert(error.message));
    }

    return (
        <div className = "register">
            <div className = "register__header">
                {/* <Link to = '/'>
                    <img 
                        className = "login__logo"
                        src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"
                        alt = ""
                    />
                </Link> */}
                <h1 className = "logo__text">To-Do List</h1>
               
            </div>
            <div className = "register__container">
                <form>
                    <h5>Username</h5>
                    <input 
                        className = "username__text"
                        type = "text"
                        name="fname" required
                        value = {username}
                        onChange = {e => setUsername(e.target.value)}
                    />
                    <h5>Email</h5>
                    <input
                        type = "text"
                        value = {email}
                        onChange = {e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type = "password"
                        value = {password}
                        onChange = {e => setPassword(e.target.value)}
                    />

                    <button type = "submit" onClick = {signUp}
                        className = "register__button">
                        Sign Up
                    </button>

                    <p> ----or---- </p>

                    <p>Already have an account?
                        <Link to="/login">
                            <p className = "signIn__again">Sign In</p>
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Register
