import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavigationBar from './navigationbar/NavigationBar';
import HomePage from './home/HomePage2';
import SignUpPage from './auth/SignUpPage';
import LogInPage from './auth/LogInPage';
import TrailCreatePage from './trails/trailcreate/TrailCreatePage2';
import TrailDetailPage from './trails/traildetail/TrailDetailPage2';
import TrailEditPage from './trails/trailedit/TrailEditPage2';
import TrailDashboard from './trails/traildashboard/TrailDashboard2';

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
              <NavigationBar />
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