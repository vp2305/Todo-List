import React, { useEffect, useState } from 'react';
import "./Planned.css";
import firebase from 'firebase';
import { useStateValue } from './StateProvider';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { auth, db } from './firebase';
import Left_container from './Left_container';

function Planned() {
    const drawerWidth = 240;

    const [planned, setPlanned] = useState([]);
    const [input, setInput] = useState('');
    const[{ user } ] = useStateValue();
    
    const useStyles = makeStyles((theme) => ({
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
          marginLeft: drawerWidth + 12,
          flexGrow: 1,
          padding: theme.spacing(3),
          color: 'white',
        },
    }));

    const classes = useStyles();
    

    const addPlanned = (e) => {
        e.preventDefault();

        db.collection('users')
            .doc(user?.uid)
            .collection('planned')
            .add({
            planned: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }

    // When the app loads we want to check who is logged in and get the todo based on that username.

    useEffect(() => {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('planned')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()))
            setPlanned(snapshot.docs.map(doc => 
                ({id: doc.id, planned: doc.data().planned})))
        })
    }, [user]);
   
    return (
        <div className = "planned">
            <img className = "background__image"
                    src = "https://images7.alphacoders.com/858/thumb-1920-858181.jpg"
                    alt = ""
            />
            <Left_container location = "Planned" />
            <div className = {classes.content}>
                {/* <div className={classes.toolbar} /> */} 
                <h2>Planned Tasks</h2>
                <Divider />
                <p>Number of planned tasks: {planned?.length}</p>

                <form className = "input__container">                        
                    
                    <FormControl className = "input__field">
                        <InputLabel>Write a planned event...</InputLabel>
                        <Input value = {input} onChange ={e => setInput(e.target.value)}/>
                    </FormControl>

                    <Button disabled = {!input}  type = "submit" onClick = {addPlanned}>Add</Button>               
                </form>

                <p>
                    {planned.map(planned => (
                        <p className = "task_line"> 📅  {planned.planned} 
                        
                        <Button 
                            className = "remove__task"
                            
                            onClick = {e =>
                                db
                                .collection('users')
                                .doc(user?.uid)
                                .collection('planned').doc(planned.id).delete()}>
                                <DeleteOutlineOutlinedIcon />
                        </Button>
                        </p>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default Planned
