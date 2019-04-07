import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Styling
import './App.scss';

// import top100SaltiestTrolls from './data/top100_Saltiest_Trolls';
// import top100QuantitySaltyComments from './data/top100_Quantity_Salty_Comments';
// import overallSatliestUsers from './data/top100_Overall_Saltiest';

//Import Components
import Navbar from './Components/Navbar/Navbar';
import MainLandingPage from './screens/MainLandingPage';
import AboutPage from './screens/AboutPage';
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
        <Navbar />
        <Route exact path="/" render={pr => <MainLandingPage {...pr} />} />
        <Route exact path="/about" render={pr => <AboutPage {...pr} />} />
        {/* <Route exact path="/top-100-saltiest-trolls" render={pr => <HackerListPage {...pr} data={top100SaltiestTrolls} heading={'Saltiest hackers in the game'} />} />
        <Route exact path="/top-100-quantity-of-added-salt" render={pr => <HackerListPage {...pr} data={top100QuantitySaltyComments} heading={'Who brought the most salt to HackerNews'} />} />
        <Route exact path="/most-salty-users" render={pr => <HackerListPage {...pr} data={overallSatliestUsers} heading={'Most salty users'} />} /> */}
        <Footer />
      </div>
    );
  }
}
