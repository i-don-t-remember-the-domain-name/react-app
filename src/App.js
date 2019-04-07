import React, { useState } from 'react';
import { Route } from 'react-router-dom';

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
export default function App() {
  const [hacker, setHacker] = useState(null);
  const searchHacker = username => {
    setHacker(null);
    axios
      .get(`/api/finduser/${username}`)
      .then(res => {
        setHacker(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  console.log(hacker);
  return (
    <div className="app-container">
      <Route exact path="/" render={pr => <MainLandingPage {...pr} searchHacker={searchHacker} />} />
      <Route exact path="/about" render={pr => <AboutPage {...pr} />} />
      <Route path="/user" render={pr => <UserProfilePage {...pr} commentor_data={commentor_data} />} />
      <Footer />
    </div>
  );
}

/*searchHacker = name => {
    this.startLoader();
    this.setState({ commenterNotFound: false, networkError: false });
    axios
      .get(`http://kevinbrack.com:1337/user/${name}`)
      .then(res => {
        if (res.data[0] === 'C') {
          this.setState(() => ({ commenterNotFound: true }));
        } else {
          //Add hacker to searchedHacker Array
          this.setState(pr => ({ searchedHacker: [res.data.user, ...pr.searchedHacker], searchedHackerComments: [res.data.comments, ...pr.searchedHackerComments] }));
          //Delete 10th hacker in the state => only 10 hackers on the screen
          this.state.searchedHacker.splice(10, 1);
          this.state.searchedHackerComments.splice(10, 1);
        }
        this.stopLoader();
      })
      .catch(err => {
        this.setState(() => ({ networkError: true }));
        console.log(err.message);
        this.stopLoader();
      });
  }; */
