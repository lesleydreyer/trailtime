import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './navbar/NavBar';
import HomePage from './home/HomePage';
import SignUpPage from './auth/SignUpPage';
import LogInPage from './auth/LogInPage';
import TrailCreatePage from './trails/trailcreate/TrailCreatePage';
import TrailDetailPage from './trails/traildetail/TrailDetailPage';
import TrailEditPage from './trails/trailedit/TrailEditPage';
import TrailDashboard from './trails/traildashboard/TrailDashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Route path="/(.+)" render={() => ( //regular expression so navbar isn't on home page above
            <div>
              <NavBar />
              <div className="main">
                <Switch>
                  <Route path="/login" component={LogInPage} />
                  <Route path="/signup" component={SignUpPage} />
                  <Route path="/create" component={TrailCreatePage} />
                  <Route path="/detail/:id" component={TrailDetailPage} />
                  <Route path="/edit/:id" component={TrailEditPage} />
                  <Route path="/trails" component={TrailDashboard} />
                </Switch>
              </div>
            </div>
          )}
          />
        </div>
      </Router>
    );
  }
}

export default App;