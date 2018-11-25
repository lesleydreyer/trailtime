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
import TrailImagePage from './trails/trailimages/TrailImagePage';
import Cloudinary from './zzzOldCloudinary/CloudinaryWidget';
import Gallery from './zzzOldCloudinary/Gallery';
import Carousel from './zzzOldCarousel/AliceCarousel'
import FileInput from './zzzOldCloudinary/FileInput';
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
                  <Route path="/images/:id" component={TrailImagePage} />
                  <Route path="/trails" component={TrailDashboard} />
                  {/**below are just things played around with trying to get cloudinary and image displays to work */}
                  <Route path="/cloud" component={Cloudinary} />
                  <Route path="/gallery" component={Gallery} />
                  <Route path="/fileinput" component={FileInput} />
                  <Route path="/alice" component={Carousel} />
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