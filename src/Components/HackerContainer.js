import React from 'react';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';

//Import Components
import RoutesContainer from './RoutesContainer';
import Footer from './Footer/Footer';

//Import DB
import db from '../fbConfig';

//Default export
function HackerContainer(props) {
  const searchHacker = hacker => {
    props.setLoading(true);
    db.collection('commentor_stats')
      .where('commentor', '==', hacker)
      .get()
      .then(qs => {
        console.log(qs);
        if (qs.docs.length > 0) {
          qs.forEach(doc => {
            props.setError(false);
            cleanPreviousHacker();
            props.setHackerName(doc.data().commentor);
            props.setCountOfAllComments(doc.data().cnt_cmnts_oall);
            props.setCountOfSaltyComments(doc.data().cnt_slt_s);
            console.log(doc.data().rank_oall_slt);
            !isNaN(doc.data().rank_lt_amt_slt) && props.setRankAmountOfSaltiness(doc.data().rank_lt_amt_slt);
            !isNaN(doc.data().rank_lt_qty_sc) && props.setRankQuantityOfSaltiness(doc.data().rank_lt_qty_sc);
            !isNaN(doc.data().rank_oall_slt) && props.setRankOverallSaltiness(doc.data().rank_oall_slt);

            //If there is average saltiness, fix it to 2 decimal numbers
            doc.data().avg_slt_s && props.setAverageSaltiness(doc.data().avg_slt_s.toFixed(2));

            //If there is date, transform date to required format and set the DateOfFirstComment state
            if (doc.data().time_cmnt_fst.seconds) {
              let dateInfo = new Date(doc.data().time_cmnt_fst.seconds * 1000);
              let date = `${dateInfo.getDate()}-${dateInfo.getMonth()}-${dateInfo.getFullYear()}`;
              props.setDateOfFirstComment(date);
            }

            //Transform saltiest comments object to array and set the SaltiestComments state and sort them by the saltiness
            if (doc.data().top_cmnts_s) {
              const saltiestCommentsArray = Object.keys(doc.data().top_cmnts_s).map(key => {
                return doc.data().top_cmnts_s[key];
              });
              props.setSaltiestComments(
                saltiestCommentsArray.sort(function(a, b) {
                  return a.comment_saltiness - b.comment_saltiness;
                })
              );
            }

            //If monthly plot is there, transform monthly plot object to array and set the monthly Plot state
            if (doc.data().monthly_plot) {
              const monthlyPlotArray = Object.keys(doc.data().monthly_plot).map(key => {
                return { ...doc.data().monthly_plot[key], key };
              });
              props.setMonthlyPlot(monthlyPlotArray);
            }
          });
        } else {
          props.setError(true);
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
