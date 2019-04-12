import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';

//Styling
import './App.scss';

//Import Components
import MainLandingPage from './screens/MainLandingPage';
import AboutPage from './screens/AboutPage';
import UserProfilePage from './screens/UserProfilePage';
import Footer from './Components/Footer/Footer';

//Default export
function App(props) {
  const [averageSaltiness, setAverageSaltiness] = useState(undefined);
  const [countOfAllComments, setCountOfAllComments] = useState(undefined);
  const [countOfSaltyComments, setCountOfSaltyComments] = useState(undefined);
  const [hackerName, setHackerName] = useState(undefined);
  const [monthlyPlot, setMonthlyPlot] = useState(undefined);
  const [rankAmountOfSaltiness, setRankAmountOfSaltiness] = useState(undefined);
  const [rankQuantityOfSaltiness, setRankQuantityOfSaltiness] = useState(undefined);
  const [dateOfFirstComment, setDateOfFirstComment] = useState(undefined);
  const [saltiestComments, setSaltiestComments] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const searchHacker = username => {
    setLoading(true);
    axios
      .get(`https://hacker-salt.herokuapp.com/api/user/${username}`)
      .then(res => {
        setHackerName(res.data.commentor);
        setAverageSaltiness(res.data.avg_slt_s.toFixed(2));
        setCountOfAllComments(res.data.cnt_cmnts_oall);
        setCountOfSaltyComments(res.data.cnt_slt_s);
        setRankAmountOfSaltiness(res.data.rank_lt_amt_slt);
        setRankQuantityOfSaltiness(res.data.rank_lt_qty_sc);

        //Transform date to required format and set the DateOfFirstComment state
        let dateInfo = new Date(res.data.time_cmnt_fst.seconds * 1000);
        let date = `${dateInfo.getFullYear()}-${dateInfo.getMonth()}-${dateInfo.getDate()}`;
        setDateOfFirstComment(date);

        //Transform saltiest comments object to array and set the SaltiestComments state
        const saltiestCommentsArray = Object.keys(res.data.top_cmnts_s).map(key => {
          return res.data.top_cmnts_s[key];
        });
        setSaltiestComments(saltiestCommentsArray);

        //Transform monthly plot object to array and set the monthly Plot state
        const monthlyPlotArray = Object.keys(res.data.monthly_plot).map(key => {
          return { ...res.data.monthly_plot[key], key };
        });
        setMonthlyPlot(monthlyPlotArray);
      })
      .then(() => setLoading(false))
      .then(() => props.history.push(`/${username}`))
      .catch(err => {
        console.log(err.data);
      });
  };

  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" render={pr => <MainLandingPage {...pr} searchHacker={searchHacker} />} />
        <Route exact path="/about" render={pr => <AboutPage {...pr} />} />
        <Route
          path="/:username"
          render={pr => (
            <UserProfilePage
              {...pr}
              searchHacker={searchHacker}
              averageSaltiness={averageSaltiness}
              countOfAllComments={countOfAllComments}
              countOfSaltyComments={countOfSaltyComments}
              hackerName={hackerName}
              monthlyPlot={monthlyPlot}
              rankAmountOfSaltiness={rankAmountOfSaltiness}
              rankQuantityOfSaltiness={rankQuantityOfSaltiness}
              dateOfFirstComment={dateOfFirstComment}
              saltiestComments={saltiestComments}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
