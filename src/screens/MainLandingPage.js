import React from 'react';

//Import components
import SearchBanner from '../Components/Searchbar/SearchBanner';
import HackerTopListsTabs from '../Components/HackerTopLists/HackerTopListsTabs';

//Export default component
export default function MainLandingPage(props) {
  return (
    <div>
      <SearchBanner redirectToHackerProfilePage={props.redirectToHackerProfilePage} searchHacker={props.searchHacker} loading={props.loading} error={props.error} />
      <HackerTopListsTabs searchHacker={props.searchHacker} />
    </div>
  );
}
