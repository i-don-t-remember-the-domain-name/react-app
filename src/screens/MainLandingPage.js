import React from 'react';

import SearchBanner from '../Components/Searchbar/SearchBanner';
import TabsList from '../Components/HackerTopLists/TabsList';
import Navbar from '../Components/Navbar/Navbar';

export default function MainLandingPage() {
  return (
    <div>
      <Navbar />
      <SearchBanner />
      <TabsList />
    </div>
  );
}
