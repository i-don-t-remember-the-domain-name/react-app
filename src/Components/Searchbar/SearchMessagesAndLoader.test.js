import React from 'react';
import * as tlr from '@testing-library/react';

import SearchMessagesAndLoader from './SearchMessagesAndLoader';

afterEach(tlr.cleanup);

describe('Seach message and loader', () => {
    it('contains input with placeholder', () => {
        const wrap = tlr.render(<SearchMessagesAndLoader error={true} />);
        expect(wrap.getByText(/User not found/i));
    });
    it('contains loader', () => {
        const wrap = tlr.render(<SearchMessagesAndLoader loading={true} />);
        expect(wrap.getByTestId('loader'));
    });
});
