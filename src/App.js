import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Styling
import './App.scss';

//Import Components
import Navbar from './Components/Navbar';
import MainLandingPage from './screens/MainLandingPage';
import HackerListPage from './screens/HackerListPage';
import Footer from './Components/Footer';

//Default export
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Route exact path="/" render={pr => <MainLandingPage {...pr} />} />
        <Route exact path="/list1" render={pr => <HackerListPage {...pr} />} />
        <Footer />
      </div>
    );
  }
}
