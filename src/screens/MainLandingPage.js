import React from 'react';

import SearchBanner from '../Components/SearchBanner';
import ListsBoard from '../Components/ListsBoard';
import Introduction from '../Components/Introduction';

export default function MainLandingPage() {
  return (
    <div>
      <SearchBanner />
      <ListsBoard />
      <Introduction />
    </div>
  );
}
