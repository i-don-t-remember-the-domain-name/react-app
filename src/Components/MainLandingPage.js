import React from 'react';

import SearchBanner from './SearchBanner';
import ListsBoard from './ListsBoard';
import Introduction from './Introduction';

export default function MainLandingPage() {
  return (
    <div>
      <SearchBanner />
      <ListsBoard />
      <Introduction />
    </div>
  );
}
