import React from 'react';

import NavbarWithSearchbar from '../Components/Navbar/NavbarWithSearchbar';
import UserPage from '../Components/UserProfile/UserPage';

export default function UserProfilePage(props) {
  // Redirect if hacker is not saved in state
  if (props.hackerName !== props.match.params.username) {
    props.history.push('/');
    return null;
  }

  return (
    <div>
      <NavbarWithSearchbar searchHacker={props.searchHacker} loading={props.loading} />
      <UserPage
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
