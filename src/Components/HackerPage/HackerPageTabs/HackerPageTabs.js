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
            {countOfAllComments && <HackerPageTab color={'#4c6cec'} heading={'# of HN Comments'} data={countOfAllComments} />}
            {countOfSaltyComments && <HackerPageTab color={'#4c6cec'} heading={'# of Toxic Comments'} data={countOfSaltyComments} />}
            {averageSaltiness && <HackerPageTab color={'#4c6cec'} heading={'Average Toxicity'} data={averageSaltiness} />}
            {rankOverallSaltiness && <HackerPageTab color={'#f59f00'} heading={'Rank: Just Toxic'} data={rankOverallSaltiness} />}
            {rankAmountOfSaltiness && <HackerPageTab color={'#f59f00'} heading={'Rank: Lifetime Toxicity'} data={rankAmountOfSaltiness} />}
            {rankQuantityOfSaltiness && <HackerPageTab color={'#f59f00'} heading={'Rank: Quantity of Toxic Comments'} data={rankQuantityOfSaltiness} />}
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
