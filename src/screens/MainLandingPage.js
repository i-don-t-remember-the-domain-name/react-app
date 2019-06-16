import React, { useEffect } from 'react';

//Import components
import SearchBanner from '../Components/Searchbar/SearchBanner';
import HackerTopListsTabs from '../Components/HackerTopLists/HackerTopListsTabs';

//Export default component
export default function MainLandingPage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <SearchBanner redirectToHackerProfilePage={props.redirectToHackerProfilePage} searchHacker={props.searchHacker} loading={props.loading} error={props.error} />
            <HackerTopListsTabs searchHacker={props.searchHacker} />
        </div>
    );
}
