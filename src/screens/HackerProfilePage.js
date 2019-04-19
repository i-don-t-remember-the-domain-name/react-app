import React from 'react';

//Import components
import NavbarWithSearchbar from '../Components/Navbar/NavbarWithSearchbar';
import HackerPage from '../Components/HackerPage/HackerPage';

//Export default component
export default function HackerProfilePage(props) {
  // Redirect if hacker is not saved in state
  if (props.hackerName !== props.match.params.hacker) {
    props.history.push('/');
    return null;
  }

  //axios call here
  //have 3 states - error/loading/success
  //display different content based on search


  return (
    <div>
      <NavbarWithSearchbar searchHacker={props.searchHacker} loading={props.loading} error={props.error} />
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
