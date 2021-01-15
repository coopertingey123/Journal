import React, { Component } from 'react';

// import ViewPage from '../components/view-journal-entry'

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./homepage"
import AddEntry from "./input-page"
import ViewEntry from "./view-journal-entry"
import CreateAccount from "./create-account"


export default class App extends Component {
  render() {
    return (
      <div className='app'>



        <BrowserRouter>
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add-entry" component={AddEntry} />
              <Route path="/view-entries" component={ViewEntry} />
              <Route path="/create-account" component={CreateAccount}/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}
