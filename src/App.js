import React, { Component } from 'react';

//Styling
import './App.scss';

//Import Components
import Navbar from './Components/Navbar';
import SearchBanner from './Components/SearchBanner';
import ListsBoard from './Components/ListsBoard';
import Introduction from './Components/Introduction';
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
        <SearchBanner />
        <ListsBoard />
        <Introduction />
        <Footer />
      </div>
    );
  }
}
