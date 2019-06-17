import React from 'react';
import * as tlr from '@testing-library/react';

import AboutSection from './AboutSection';

afterEach(tlr.cleanup);

describe('About Section', () => {
    it('contains heading', () => {
        const wrap = tlr.render(<AboutSection />);
        expect(wrap.getByText(/about TOXIC HACKERS/i));
    });
    it('contains text', () => {
        const wrap = tlr.render(<AboutSection />);
        expect(wrap.getByText(/sorry@toxichackers.com/i));
    });
});
