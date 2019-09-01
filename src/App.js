import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./App.module.css"
import sonastyles from "./Sona.module.css"
import logo from './niko_neko.png'
import Nav from './Nav';
import Home from './Home';
import Imprint from './Imprint';
import Contact from './Contact';
import Sona from './Sona';
import E404 from './E404';


export default class App extends Component {
  render() {
    return (
      <Router>
        <img id={window.location.href.includes("sona") ? sonastyles.profile_pic : styles.profile_pic} src={logo} alt="logo" />
        <div id={window.location.href.includes("sona") ? sonastyles.content : styles.content}>
          <div id={styles.header}>
            <h1>Vatril</h1>
            <Nav />
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/imprint" exact component={Imprint} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/sona" exact component={Sona} />
            <Route component={E404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

