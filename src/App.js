import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import History from './Components/History';

class App extends Component {
  render() {
    return (
      <div>
        <NavLink exact to="/"> Accueil </NavLink>
        <NavLink to="/page-de-contact" activeClassName="selected"> Contact </NavLink>
        <NavLink to="/notre-histoire" activeStyle={{
          fontWeight: "bold",color: "red"}}> Histoire </NavLink>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page-de-contact" component={Contact} />
          <Route path="/notre-histoire" component={History} />
        </Switch>
      </div>
    );
  }
}

export default App;