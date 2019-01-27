import React, { Component } from 'react';
import UIMain from './UI/UIMain.js';
import './App.css';

import Room from './Room/Room';

import { HashRouter as Router, Route, Link } from "react-router-dom";

import {Provider} from 'mobx-react'
import Store from './store/index'
const store = new Store("route")
const routes = store.returnRoutes()

class App extends Component {
  render() {
    return (
      <Provider {...routes}>
        <Router>
          <div className="App">
            <Route path="" exact component={UIMain} />
            <Route path="/room" component={Room} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
