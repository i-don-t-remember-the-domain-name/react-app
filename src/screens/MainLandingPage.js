import React from 'react';

import SearchBanner from '../Components/Searchbar/SearchBanner';
import TabsList from '../Components/HackerTopLists/TabsList';
import Navbar from '../Components/Navbar/Navbar';

export default function MainLandingPage(props) {
  return (
    <div>
      <Navbar />
      <SearchBanner searchHacker={props.searchHacker} loading={props.loading} />
      <TabsList searchHacker={props.searchHacker} />
    </div>
  );
}
