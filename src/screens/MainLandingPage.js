import React from 'react';

//Import components
import SearchBanner from '../Components/Searchbar/SearchBanner';
import HackerTopListsTabs from '../Components/HackerTopLists/HackerTopListsTabs';
import Navbar from '../Components/Navbar/Navbar';

//Export default component
export default function MainLandingPage(props) {
  return (
    <div>
      <Navbar />
      <SearchBanner searchHacker={props.searchHacker} loading={props.loading} error={props.error} />
      <HackerTopListsTabs searchHacker={props.searchHacker} />
    </div>
  );
}
