import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import MainMenu from './components/MainMenu';

import Profil from './components/Profil';
import Contact from './components/Kontak';
import Home from './components/Home';
import Portofolio from './components/Portofolio';


class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <Switch>
                <Route exact path="/" component={MainMenu}/>
                <Route path="/home" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/profil" component={Profil}/>
                <Route path="/portofolio" component={Portofolio}/>
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
