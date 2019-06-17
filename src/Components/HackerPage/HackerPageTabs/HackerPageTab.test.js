import React from 'react';

import * as tlr from '@testing-library/react';

import HackerPageTab from './HackerPageTab';

afterEach(tlr.cleanup);

const mockData = {
    heading: 'heading',
    data: 'data'
};
describe('Comment row', () => {
    it('contains data ', () => {
        const wrap = tlr.render(<HackerPageTab heading={mockData.heading} data={mockData.data} />);
        expect(wrap.getByText(/heading/));
        expect(wrap.getByText(/data/));
    });
});
