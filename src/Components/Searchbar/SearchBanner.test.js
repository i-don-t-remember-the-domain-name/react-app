import React from 'react';
import * as tlr from '@testing-library/react';

import SearchBanner from './SearchBanner';

afterEach(tlr.cleanup);

describe('Search banner', () => {
    it('contains heading', () => {
        const wrap = tlr.render(<SearchBanner />);
        expect(wrap.findByTestId('heading-main-banner'));
    });
});
