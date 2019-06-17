import React from 'react';

import * as tlr from '@testing-library/react';

import HackerPageTabs from './HackerPageTabs';

afterEach(tlr.cleanup);

const mockData = {
    countOfAllComments: 1,
    countOfSaltyComments: 2,
    rankAmountOfSaltiness: 3,
    rankQuantityOfSaltiness: 4,
    rankOverallSaltiness: 5,
    averageSaltiness: 6
};
describe('Hacker page tabs', () => {
    it('contains data ', () => {
        const wrap = tlr.render(
            <HackerPageTabs
                countOfAllComments={mockData.countOfAllComments}
                countOfSaltyComments={mockData.countOfSaltyComments}
                rankAmountOfSaltiness={mockData.rankAmountOfSaltiness}
                rankQuantityOfSaltiness={mockData.rankQuantityOfSaltiness}
                rankOverallSaltiness={mockData.rankOverallSaltiness}
                averageSaltiness={mockData.averageSaltiness}
            />
        );
        expect(wrap.getByText(/1/));
        expect(wrap.getByText(/2/));
        expect(wrap.getByText(/3/));
        expect(wrap.getByText(/4/));
        expect(wrap.getByText(/5/));
        expect(wrap.getByText(/6/));
    });
});
