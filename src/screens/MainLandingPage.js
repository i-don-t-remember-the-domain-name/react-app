import React from 'react';

//Import components
import SearchBanner from '../Components/Searchbar/SearchBanner';
import TabsList from '../Components/HackerTopLists/TabsList';
import Navbar from '../Components/Navbar/Navbar';

//Export default component
export default function MainLandingPage(props) {
  return (
    <div>
      <Navbar />
      <SearchBanner searchHacker={props.searchHacker} loading={props.loading} />
      <TabsList searchHacker={props.searchHacker} />
    </div>
  );
}
