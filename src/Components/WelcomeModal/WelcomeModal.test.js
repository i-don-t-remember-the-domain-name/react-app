import React from 'react';
import * as tlr from '@testing-library/react';

import WelcomeModal from './WelcomeModal';

afterEach(tlr.cleanup);

describe('Welcome Modal', () => {
    it('contains heading', () => {
        const wrap = tlr.render(<WelcomeModal showModal={true} />);
        expect(wrap.getByTestId('warning-heading'));
    });
    it('contains content', () => {
        const wrap = tlr.render(<WelcomeModal showModal={true} />);
        expect(wrap.getByTestId('warning-content'));
    });
    it('contains proceed button', () => {
        const wrap = tlr.render(<WelcomeModal showModal={true} />);
        expect(wrap.getByTestId('warning-proceed-button'));
    });
    it('contains close button', () => {
        const wrap = tlr.render(<WelcomeModal showModal={true} />);
        expect(wrap.getByTestId('warning-close-button'));
    });
});
