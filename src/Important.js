import React, { useEffect, useState } from 'react';
import "./Important.css";
import firebase from 'firebase';
import { useStateValue } from './StateProvider';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { auth, db } from './firebase';
import Left_container from './Left_container';

function Important() {
    const drawerWidth = 240;

    const [important, setImportant] = useState([]);
    const [input, setInput] = useState('');

    const[{ user } ] = useStateValue();


    const useStyles = makeStyles((theme) => ({
        
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
          marginLeft: drawerWidth + 12,
          flexGrow: 1,
          padding: theme.spacing(3),
          color: "white",
        },
    }));

    const classes = useStyles();
    

    const addImportant = (e) => {
        e.preventDefault();

        db.collection('users')
            .doc(user?.uid)
            .collection('important')
            .add({
            important: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }

    // When the app loads we want to check who is logged in and get the todo based on that username.

    useEffect(() => {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('important')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()))
            setImportant(snapshot.docs.map(doc => 
                ({id: doc.id, important: doc.data().important})))
        })
    }, [user]);
       

    return (
        <div className = "important">
            <img className = "background__image"
                    src = "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/6/16/asset/buzzfeed-prod-fastlane-03/sub-buzz-6808-1491510468-8.jpg?downsize=1600%3A%2A&output-quality=auto&output-format=auto"
                    alt = ""
            />
            <Left_container location = "Important"/>
            <div className = {classes.content}>
                {/* <div className={classes.toolbar} /> */} 
                <h2>Important Tasks</h2>
                <Divider />
                <p>Number of important tasks: {important?.length}</p>

                <form className = "input__container">                        
                    
                    <FormControl className = "input__field">
                        <InputLabel>Write a Important Event ❗❗❗</InputLabel>
                        <Input value = {input} onChange ={e => setInput(e.target.value)}/>
                    </FormControl>
                    <Button disabled = {!input} type = "submit" onClick = {addImportant}>Add</Button>               
                
                </form>

                <p>
                    {important.map(important => (
                        <p className = "task_line"> ⭐ {important.important} 
                        <Button 
                            className = "remove__task"
                            
                            onClick = {e =>
                                db
                                .collection('users')
                                .doc(user?.uid)
                                .collection('important').doc(important.id).delete()}>
                                <DeleteOutlineOutlinedIcon />
                        </Button>
                        </p>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default Important
