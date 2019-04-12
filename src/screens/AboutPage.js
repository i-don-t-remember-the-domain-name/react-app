import React from 'react';

//Import components
import Introduction from '../Components/Introduction';
import Navbar from '../Components/Navbar/Navbar';

//Export default component
export default function AboutPage(props) {
  return (
    <div>
      <Navbar />
      <Introduction />
    </div>
  );
}
