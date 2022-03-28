import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
