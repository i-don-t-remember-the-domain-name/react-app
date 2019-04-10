import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

//Styling
import './App.scss';

import commentor_data from './data/test_user_data';

//Import Components
import MainLandingPage from './screens/MainLandingPage';
import AboutPage from './screens/AboutPage';
import UserProfilePage from './screens/UserProfilePage';
import Footer from './Components/Footer/Footer';
import axios from 'axios';

//Default export
function App(props) {
  const [hacker, setHacker] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchHacker = username => {
    setLoading(true);
    axios
      .get(`https://hacker-salt.herokuapp.com/api/user/${username}`)
      .then(res => {
        setHacker(res.data);
      })
      .then(() => setLoading(false))
      .then(() => props.history.push(`/${username}`))
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" render={pr => <MainLandingPage {...pr} searchHacker={searchHacker} />} />
        <Route exact path="/about" render={pr => <AboutPage {...pr} />} />
        <Route path="/:username" render={pr => <UserProfilePage {...pr} hacker={hacker} commentor_data={commentor_data} searchHacker={searchHacker} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
