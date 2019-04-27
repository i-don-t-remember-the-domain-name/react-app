import React, { useEffect } from 'react';

//Import components
import NavbarWithSearchbar from '../Components/Navbar/NavbarWithSearchbar';
import HackerPage from '../Components/HackerPage/HackerPage';

//Export default component
export default function HackerProfilePage(props) {
  useEffect(() => {
    props.searchHacker(props.match.params.hacker);
  }, [props.match.params.hacker]);

  return (
    <div>
      <NavbarWithSearchbar searchHacker={props.searchHacker} loading={props.loading} error={props.error} redirectToHackerProfilePage={props.redirectToHackerProfilePage} />
      <HackerPage
        searchHacker={props.searchHacker}
        averageSaltiness={props.averageSaltiness}
        rankOverallSaltiness={props.rankOverallSaltiness}
        countOfAllComments={props.countOfAllComments}
        countOfSaltyComments={props.countOfSaltyComments}
        hackerName={props.hackerName}
        monthlyPlot={props.monthlyPlot}
        rankAmountOfSaltiness={props.rankAmountOfSaltiness}
        rankQuantityOfSaltiness={props.rankQuantityOfSaltiness}
        dateOfFirstComment={props.dateOfFirstComment}
        saltiestComments={props.saltiestComments}
      />
    </div>
  );
}
