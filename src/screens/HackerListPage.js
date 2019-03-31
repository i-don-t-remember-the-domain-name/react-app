import React from 'react';

import SearchBanner from '../Components/SearchBanner';
import HackerList from '../Components/HackerList';

export default function MainLandingPage(props) {
  return (
    <div>
      <SearchBanner />
      <HackerList data={props.data} heading={props.heading} />
    </div>
  );
}
