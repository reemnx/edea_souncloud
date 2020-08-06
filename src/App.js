import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx'
import NavBar from './cmps/NavBar.jsx'
import ActiveTrack from './cmps/ActiveTrack'

function App() {

  return (
    <div className="app-container">
      <NavBar />
        <Switch>
          <Route component={Home} path="/" />
        </Switch>
    </div>
  );
}

export default App;
