import React from 'react';

import * as tlr from '@testing-library/react';

import SocialButton from './SocialButton';

afterEach(tlr.cleanup);

describe('Social buttons', () => {
    it('contains twitter share button ', () => {
        const wrap = tlr.render(<SocialButton />);
        expect(wrap.getByTestId('twitter-share-button'));
    });
    it('contains reddit share button ', () => {
        const wrap = tlr.render(<SocialButton />);
        expect(wrap.getByTestId('reddit-share-button'));
    });
    it('contains facebook share button ', () => {
        const wrap = tlr.render(<SocialButton />);
        expect(wrap.getByTestId('facebook-share-button'));
    });
});
