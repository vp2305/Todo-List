import React, { useEffect, useState } from 'react';
import "./Left_container.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import HomeIcon from '@material-ui/icons/Home';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { auth, db } from './firebase';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { makeStyles } from '@material-ui/core/styles';


function Left_container({location}) {
    const drawerWidth = 240;

    const [tasks, setTasks] = useState([]);
    const [planned, setPlanned] = useState([]);
    const [important, setImportant] = useState([]);
    const history = useHistory();
    const[{ user } ] = useStateValue();

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },

        drawer: {
          width: drawerWidth,
          flexShrink: 0,
        },
        drawerPaper: {
          width: drawerWidth,
          marginTop:47,
          opacity:0.7,

        },
    }));
    const classes = useStyles();
    
    useEffect(() => {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('important')
        .onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()))
            setImportant(snapshot.docs.map(doc => 
                doc.data()))
        })
    }, [user]);
    
    useEffect(() => {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('planned')
        .onSnapshot(snapshot => {
            setPlanned(snapshot.docs.map(doc => 
                doc.data()))
        })
    }, [user]);

    useEffect(() => {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('tasks')
        .onSnapshot(snapshot => {
            setTasks(snapshot.docs.map(doc => 
                doc.data()))
        })
    }, [user]);
    
    
    const handleLogout = () =>{
        if (user){
            auth.signOut();
            history.push('/')
        }
    }

    const check_location = () => {
        if (location === "tasks"){
            <ListItem button selected
                onClick={e=>history.push('/tasks')}>
                <HomeIcon className = "user__homeIcon"/>
                Taskssss ({tasks?.length})
            </ListItem>
        }
        
    }
    

    return (
        <div class = "Left_container">
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <List className = "Logout__option">
                    <ListItem>Hello, {user?.displayName}
                    <button
                        className = "exit__button" 
                        onClick={handleLogout}>
                        <ExitToAppIcon />
                    </button>
                    </ListItem>
                </List>

                <Divider  />

                    <List >
                        <ListItem button selected={location == "Tasks"}
                            onClick={e=>history.push('/tasks')}>
                            <HomeIcon className = "user__homeIcon"/>
                            Tasks ({tasks?.length})
                        </ListItem>
                        <ListItem button selected={location == "Planned"}
                            onClick={e => history.push('/planned')}>
                            <CalendarTodayIcon className = "user__calenderIcon"/>
                                Planned ({planned?.length})
                        </ListItem>
                        <ListItem button selected={location == "Important"}
                            onClick={e=>history.push('/important')}>
                            <StarBorderIcon className = "user__starIcon"/>
                            Important ({important?.length})
                        </ListItem>
                        
                        <ListItem>Any feedback will be highly appreciated. 🙂</ListItem>
                    </List>
                <Divider />

            </Drawer>
        </div>
    )
}

export default Left_container
