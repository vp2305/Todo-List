import React, { useEffect, useState } from 'react';
import "./MyCourse.css";
import firebase from 'firebase';
import { useStateValue } from './StateProvider';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ClassIcon from '@material-ui/icons/Class';
import { auth, db } from './firebase';
import { useHistory } from 'react-router-dom';

function MyCourse() {
    const drawerWidth = 240;

    const [firstCourse, setFirstCourse] = useState([]);
    const [secondCourse, setSecondCourse] = useState([]);
    const [thirdCourse, setThirdCourse] = useState([]);
    const [fourthCourse, setFourthCourse] = useState([]);
    const [fifthCourse, setFifthCourse] = useState([]);

    const [input, setInput] = useState('');
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
          marginLeft: 10,
          marginTop:50,

        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
          marginLeft: drawerWidth + 12,
          flexGrow: 1,
          padding: theme.spacing(3),
        },
    }));

    const classes = useStyles();
    

    const addFirstCourse = (e) => {
        e.preventDefault();

        db.collection('users')
            .doc(user?.uid)
            .collection('myCourses')
            .doc(user?.uid)
            .collection('firstCourse')
            .add({
            firstCourse: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }

    const addSecondCourse = (e) => {
        e.preventDefault();

        db.collection('users')
            .doc(user?.uid)
            .collection('myCourses')
            .doc(user?.uid)
            .collection('secondCourse')
            .add({
            secondCourse: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }

    const addThirdCourse = (e) => {
        e.preventDefault();

        db.collection('users')
            .doc(user?.uid)
            .collection('myCourses')
            .doc(user?.uid)
            .collection('thirdCourse')
            .add({
            thirdCourse: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }

    const addfourthCourse = (e) => {
        e.preventDefault();

        db.collection('users')
            .doc(user?.uid)
            .collection('myCourses')
            .doc(user?.uid)
            .collection('fourthCourses')
            .add({
            fourthCourse: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }

    const addFifthCourse = (e) => {
        e.preventDefault();

        db.collection('users')
            .doc(user?.uid)
            .collection('myCourses')
            .doc(user?.uid)
            .collection('fifthCourse')
            .add({
            fifthCourse: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }

    // When the app loads we want to check who is logged in and get the todo based on that username.

    useEffect(() => {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('myCourses')
        .doc(user?.uid)
        .collection('firstCourse')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()))
            setFirstCourse(snapshot.docs.map(doc => 
                ({id: doc.id, firstCourse: doc.data().firstCourse})))
        })
    }, [user]);

    useEffect(() => {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('myCourses')
        .doc(user?.uid)
        .collection('secondCourse')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()))
            setSecondCourse(snapshot.docs.map(doc => 
                ({id: doc.id, secondCourse: doc.data().secondCourse})))
        })
    }, [user]);
    
    useEffect(() => {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('myCourses')
        .doc(user?.uid)
        .collection('thirdCourse')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()))
            setThirdCourse(snapshot.docs.map(doc => 
                ({id: doc.id, thirdCourse: doc.data().thirdCourse})))
        })
    }, [user]);

    useEffect(() => {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('myCourses')
        .doc(user?.uid)
        .collection('fourthCourse')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()))
            setFourthCourse(snapshot.docs.map(doc => 
                ({id: doc.id, fourthCourse: doc.data().fourthCourse})))
        })
    }, [user]);

    useEffect(() => {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('myCourses')
        .doc(user?.uid)
        .collection('fifthCourse')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()))
            setFifthCourse(snapshot.docs.map(doc => 
                ({id: doc.id, fifthCourse: doc.data().fifthCourse})))
        })
    }, [user]);
    
    const handleLogout = () =>{
        if (user){
            auth.signOut();
            history.push('/')
        }
    }


    return (
        <div className="myCourse">
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <List className = "Logout__option">
                    <ListItem>Hello, {user?.displayName}</ListItem>
                    <span className = "logout__logo">
                        <Button onClick={handleLogout}>
                            <ExitToAppIcon />
                        </Button>
                        </span>
                </List>
                
                <Divider  />
                        <List >

                            <ListItem button selected>
                                <ClassIcon className = "user__class"/>
                                My Courses
                            </ListItem>
                            <ListItem button
                                onClick={e=>history.push('/important')}>
                                <StarBorderIcon className = "user__starIcon"/>
                                Important
                            </ListItem>
                            <ListItem button
                                onClick={e=>history.push('/planned')}>
                                <CalendarTodayIcon className = "user__calenderIcon"/>
                                Planned
                            </ListItem>
                            <ListItem button
                                onClick={e=>history.push('/tasks')}>
                                <HomeIcon className = "user__homeIcon"/>
                                Tasks
                            </ListItem>

                        </List>
                <Divider />
            </Drawer>
            
            <div className = {classes.content}>
                <h2>My Courses</h2>
                <Divider />

                <div className = "firstCourse__container">
                    <h3>First Course</h3>
                </div>

                <div className = "secondCourse__container">
                    <h3>Second Course</h3>
                </div>

                <div className = "thirdCourse__container"> 
                    <h3>Third Course</h3>
                </div>

                <div className = "fourthCourse__container"> 
                    <h3>Fourth Course</h3>
                </div>

                <div className = "fifthCourse__container"> 
                    <h3>Fifth Course</h3>
                </div>


            </div>
        </div>
    );
}

export default MyCourse
