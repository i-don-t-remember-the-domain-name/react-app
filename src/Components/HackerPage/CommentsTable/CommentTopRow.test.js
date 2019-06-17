import React from 'react';

import * as tlr from '@testing-library/react';

import CommentTopRow from './CommentTopRow';

afterEach(tlr.cleanup);

describe('Comment top row', () => {
    it('contains comment ', () => {
        const wrap = tlr.render(<CommentTopRow />);
        expect(wrap.getByText(/comment/i));
    });
    it('contains score ', () => {
        const wrap = tlr.render(<CommentTopRow />);
        expect(wrap.getByText(/score/i));
    });
    it('contains see on HN ', () => {
        const wrap = tlr.render(<CommentTopRow />);
        expect(wrap.getByText(/see on HN/i));
    });
});
