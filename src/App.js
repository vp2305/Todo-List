import './App.css';
import LandingPage from './LandingPage';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './Register';
import Tasks from './Tasks';
import Header from './Header';
import Page from './Page';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Planned from './Planned';
import Important from './Important';
import MyCourse from './MyCourse';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect (() => {
    // will only work once when the app component loads...
    // kind of like an if statement...
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>> ', authUser);

      if (authUser){
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [Tasks])
  
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route path = "/important">
            <Header />
            <Important />
          </Route>

          <Route path = "/planned">
            <Header />
            <Planned />
          </Route>

          <Route path = "/tasks">
            <Header />
            <Tasks />
          </Route>

          <Route path = "/test">
            <Page />
          </Route>

          <Route path = "/register">
            <LandingPage />
            <Register />
          </Route>

          <Route path = "/">
            <LandingPage />
            <Login />
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
