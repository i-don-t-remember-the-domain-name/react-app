import React from 'react';
import styled from 'styled-components';

//Import components
import HackerPageTab from './HackerPageTab';

//Default export, exported at the bottom with withRouter
export default function HackerPageTabs(props) {
    //Deconstructing all props
    const { countOfAllComments, countOfSaltyComments, rankAmountOfSaltiness, rankQuantityOfSaltiness, rankOverallSaltiness, averageSaltiness } = props;

    return (
        <SDHackerTabs>
            {countOfAllComments && <HackerPageTab color={'#4c6cec'} heading={'# of Comments Overall'} data={countOfAllComments} />}
            {countOfSaltyComments && <HackerPageTab color={'#4c6cec'} heading={'# Salty Comments'} data={countOfSaltyComments} />}
            {averageSaltiness && <HackerPageTab color={'#4c6cec'} heading={'Average Salt Score'} data={averageSaltiness} />}
            {rankOverallSaltiness && <HackerPageTab color={'#f59f00'} heading={'Rank: Total Overall Score'} data={rankOverallSaltiness} />}
            {rankAmountOfSaltiness && <HackerPageTab color={'#f59f00'} heading={'Rank: Total Salt Contributed'} data={rankAmountOfSaltiness} />}
            {rankQuantityOfSaltiness && <HackerPageTab color={'#f59f00'} heading={'Rank: Number of Salty Comments'} data={rankQuantityOfSaltiness} />}
        </SDHackerTabs>
    );
}

//Styled components
const SDHackerTabs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`;
