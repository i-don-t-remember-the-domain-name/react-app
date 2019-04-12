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

  return (
    <div>
      <NavbarWithSearchbar searchHacker={props.searchHacker} loading={props.loading} />
      <HackerPage
        searchHacker={props.searchHacker}
        averageSaltiness={props.averageSaltiness}
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
