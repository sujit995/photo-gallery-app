import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { auth } from './firebase/config';


import './App.css';


const App = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) setUser(user)
      else setUser(null)
    })
  }, []);

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;