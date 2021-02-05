import { Button } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Header.css";
import { useStateValue } from './StateProvider';


function Header() {
    const history = useHistory();
    const[{ user } ] = useStateValue();
    const handleLogout = () =>{
        if (user){
            auth.signOut();
            history.push('/')
        }
    }
    return (
        <div className = "header">
            <div className = "header__container">
                <Link to = "/tasks">
                    <h2 className = "header__text">To-Do List</h2>
                </Link>
            </div>

        </div>
    )
}

export default Header
