import React from 'react';

import NavbarWithSearchbar from '../Components/Navbar/NavbarWithSearchbar';
import UserPage from '../Components/UserProfile/UserPage';

export default function MainLandingPage(props) {
  return (
    <div>
      <NavbarWithSearchbar />
      <UserPage commentor_data={props.commentor_data} />
    </div>
  );
}
