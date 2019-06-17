import React from 'react';
import * as tlr from '@testing-library/react';

import HNStats from './HNStats';

afterEach(tlr.cleanup);

describe('HN stats graphs', () => {
    it('contains charts in dark theme', () => {
        const wrap = tlr.render(<HNStats theme="dark" />);
        expect(wrap).toMatchSnapshot();
    });
    it('contains charts in light theme', () => {
        const wrap = tlr.render(<HNStats theme="light" />);
        expect(wrap).toMatchSnapshot();
    });
});
