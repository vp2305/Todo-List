import React, { useEffect, useState } from 'react';
import "./Tasks.css";
import firebase from 'firebase';
import { useStateValue } from './StateProvider';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { auth, db } from './firebase';
import Left_container from './Left_container';

function Tasks() {
    const drawerWidth = 240;
   
    const [input, setInput] = useState('');
    const[{ user } ] = useStateValue();
    const [tasks, setTasks] = useState([]);

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
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
    

    const addTasks = (e) => {
        e.preventDefault();

        db.collection('users')
            .doc(user?.uid)
            .collection('tasks')
            .add({
            tasks: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }

    // When the app loads we want to check who is logged in and get the todo based on that username.

    useEffect(() => {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('tasks')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            setTasks(snapshot.docs.map(doc => 
                ({id: doc.id, tasks: doc.data().tasks})))
        })
    }, [user]);
    

    return (
        <div className = "tasks">
            <img className = "background__image"
                    src = "https://images3.alphacoders.com/102/thumb-1920-1028801.jpg"
                    alt = ""
            />
            <Left_container location = {"Tasks"}/>

            <div className = {classes.content}>
                {/* <div className={classes.toolbar} /> */} 
                <h2>Tasks</h2>
                <Divider />
                <p>Number of tasks for today: {tasks?.length}</p>

                <form className = "input__container">                        
                    
                    <FormControl className = "input__field">
                        <InputLabel>Write a Tasks📝🖋</InputLabel>
                        <Input value = {input} onChange ={e => setInput(e.target.value)}/>
                    </FormControl>
                    <Button disabled = {!input} type = "submit" onClick = {addTasks}>Add</Button>               
                
                </form>

                <p>
                    {tasks.map(tasks => (
                        
                        <p className = "task_line"> - {tasks.tasks} 
                        <Button 
                            className = "remove__task"
                            
                            onClick = {e =>
                                db
                                .collection('users')
                                .doc(user?.uid)
                                .collection('tasks').doc(tasks.id).delete()}>
                                <DeleteOutlineOutlinedIcon />
                        </Button>
                        </p>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default Tasks
