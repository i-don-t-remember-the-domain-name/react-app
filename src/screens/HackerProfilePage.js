import React, { useEffect } from 'react';

//Import components
import NavbarWithSearchbar from '../Components/Navbar/NavbarWithSearchbar';
import Navbar from '../Components/Navbar/Navbar';
import Searchbar from '../Components/Searchbar/SearchBar';

import HackerPage from '../Components/HackerPage/HackerPage';

//Export default component
export default function HackerProfilePage(props) {
  useEffect(() => {
    //Dirty fix, need to make sure to create a list of characters that can be included in search, other delete
    const currentHacker = props.match.params.hacker.replace(/\u202C/, '');
    props.searchHacker(currentHacker);
  }, [props.match.params.hacker]);

  return (
    <div>
      <Navbar />
      {/* <Searchbar searchHacker={props.searchHacker} loading={props.loading} error={props.error} redirectToHackerProfilePage={props.redirectToHackerProfilePage} /> */}
      <HackerPage
        searchHacker={props.searchHacker}
        averageSaltiness={props.averageSaltiness}
        rankOverallSaltiness={props.rankOverallSaltiness}
        countOfAllComments={props.countOfAllComments}
        countOfSaltyComments={props.countOfSaltyComments}
        hackerName={props.hackerName}
        monthlyPlot={props.monthlyPlot}
        rankAmountOfSaltiness={props.rankAmountOfSaltiness}
        rankQuantityOfSaltiness={props.rankQuantityOfSaltiness}
        dateOfFirstComment={props.dateOfFirstComment}
        saltiestComments={props.saltiestComments}
      />
    </div>
  );
}
