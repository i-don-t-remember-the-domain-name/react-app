import React from 'react';

import SearchBanner from '../Components/Searchbar/SearchBanner';
import TabsList from '../Components/HackerTopLists/TabsList';

export default function MainLandingPage() {
  return (
    <div>
      <SearchBanner />
      <TabsList />
    </div>
  );
}
