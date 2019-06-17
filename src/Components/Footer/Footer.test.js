import React from 'react';
import * as tlr from '@testing-library/react';

import Footer from './Footer';

afterEach(tlr.cleanup);

describe('Footer', () => {
    it('contains creator names', () => {
        const wrap = tlr.render(<Footer />);
        expect(wrap.getByText(/Ivana/i));
        expect(wrap.getByText(/Britton/i));
    });
});
