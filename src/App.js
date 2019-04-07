import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Styling
import './App.scss';

import commentor_data from './data/test_user_data';

//Import Components
import MainLandingPage from './screens/MainLandingPage';
import AboutPage from './screens/AboutPage';
import UserProfilePage from './screens/UserProfilePage';
import Footer from './Components/Footer/Footer';

//Default export
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app-container">
        <Route exact path="/" render={pr => <MainLandingPage {...pr} />} />
        <Route exact path="/about" render={pr => <AboutPage {...pr} />} />
        <Route path="/user" render={pr => <UserProfilePage {...pr} commentor_data={commentor_data} />} />
        <Footer />
      </div>
    );
  }
}
