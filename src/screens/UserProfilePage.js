import React from 'react';

import NavbarWithSearchbar from '../Components/Navbar/NavbarWithSearchbar';
import UserPage from '../Components/UserProfile/UserPage';

export default function MainLandingPage(props) {
  if (props.hacker.commentor !== props.match.params.username) {
    props.history.push('/');
  }
  return (
    <div>
      <NavbarWithSearchbar searchHacker={props.searchHacker} />
      <UserPage commentor_data={props.commentor_data} />
    </div>
  );
}
