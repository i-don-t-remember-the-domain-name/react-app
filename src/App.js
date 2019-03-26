import React, { Component } from 'react';

//Styling
import './App.scss';

//Import Components
import MainHeading from './Components/MainHeading';
import Search from './Components/Search';

//Default export
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app-container">
        <MainHeading />
        <Search />
      </div>
    );
  }
}
