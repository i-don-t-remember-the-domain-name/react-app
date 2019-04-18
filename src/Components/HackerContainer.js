import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

//Import Components
import RoutesContainer from './RoutesContainer';
import Footer from './Footer/Footer';

//Default export
function HackerContainer(props) {
  const searchHacker = hacker => {
    props.setLoading(true);
    axios({
      method: 'get',
      url: `https://hacker-salt.herokuapp.com/api/hacker/${hacker}`,
      timeout: 5000
    })
      .then(res => {
        props.setError(false);
        cleanPreviousHacker();
        props.setHackerName(res.data.commentor);
        props.setCountOfAllComments(res.data.cnt_cmnts_oall);
        props.setCountOfSaltyComments(res.data.cnt_slt_s);
        props.setRankAmountOfSaltiness(res.data.rank_lt_amt_slt);
        props.setRankQuantityOfSaltiness(res.data.rank_lt_qty_sc);
        props.setRankOverallSaltiness(res.data.rank_oall_slt);

        //If there is average saltiness, fix it to 2 decimal numbers
        res.data.avg_slt_s && props.setAverageSaltiness(res.data.avg_slt_s.toFixed(2));

        //If there is date, transform date to required format and set the DateOfFirstComment state
        if (res.data.time_cmnt_fst.seconds) {
          let dateInfo = new Date(res.data.time_cmnt_fst.seconds * 1000);
          let date = `${dateInfo.getDate()}-${dateInfo.getMonth()}-${dateInfo.getFullYear()}`;
          props.setDateOfFirstComment(date);
        }

        //Transform saltiest comments object to array and set the SaltiestComments state and sort them by the saltiness
        if (res.data.top_cmnts_s) {
          const saltiestCommentsArray = Object.keys(res.data.top_cmnts_s).map(key => {
            return res.data.top_cmnts_s[key];
          });
          props.setSaltiestComments(
            saltiestCommentsArray.sort(function(a, b) {
              return a.comment_saltiness - b.comment_saltiness;
            })
          );
        }

        //If monthly plot is there, transform monthly plot object to array and set the monthly Plot state
        if (res.data.monthly_plot) {
          const monthlyPlotArray = Object.keys(res.data.monthly_plot).map(key => {
            return { ...res.data.monthly_plot[key], key };
          });
          props.setMonthlyPlot(monthlyPlotArray);
        }
      })
      .then(() => props.setLoading(false))
      .then(() => {
        props.history.push(`/${hacker}`);
        window.scrollTo(0, 0);
      })
      .catch(err => {
        props.setError(err);
        props.setLoading(false);
      });
  };

  function cleanPreviousHacker() {
    props.setAverageSaltiness(undefined);
    props.setCountOfAllComments(undefined);
    props.setCountOfSaltyComments(undefined);
    props.setHackerName(undefined);
    props.setMonthlyPlot(undefined);
    props.setRankAmountOfSaltiness(undefined);
    props.setRankQuantityOfSaltiness(undefined);
    props.setRankOverallSaltiness(undefined);
    props.setDateOfFirstComment(undefined);
    props.setSaltiestComments(undefined);
  }

  return (
    <React.Fragment>
      <RoutesContainer
        searchHacker={searchHacker}
        averageSaltiness={props.averageSaltiness}
        countOfAllComments={props.countOfAllComments}
        countOfSaltyComments={props.countOfSaltyComments}
        hackerName={props.hackerName}
        monthlyPlot={props.monthlyPlot}
        rankAmountOfSaltiness={props.rankAmountOfSaltiness}
        rankQuantityOfSaltiness={props.rankQuantityOfSaltiness}
        rankOverallSaltiness={props.rankOverallSaltiness}
        dateOfFirstComment={props.dateOfFirstComment}
        saltiestComments={props.saltiestComments}
        loading={props.loading}
        error={props.error}
      />
      <Footer />
    </React.Fragment>
  );
}

export default withRouter(HackerContainer);
