import React from 'react';
import * as tlr from '@testing-library/react';

import SearchBar from './SearchBar';

afterEach(tlr.cleanup);

describe('Searchbar', () => {
    it('contains input with placeholder', () => {
        const wrap = tlr.render(<SearchBar />);
        expect(wrap.getByPlaceholderText(/Search/i));
    });
    it('contains submit button', () => {
        const wrap = tlr.render(<SearchBar />);
        expect(wrap.getByTestId(/submit-search-bar/i));
    });
});
