import React from 'react';

import * as tlr from '@testing-library/react';

import CommentRow from './CommentRow';

afterEach(tlr.cleanup);

const comment = {
    cleaned_comment: 'Hello',
    comment_saltiness: 1.456
};
describe('Comment row', () => {
    it('contains comment text ', () => {
        const wrap = tlr.render(<CommentRow comment={comment} />);
        expect(wrap.getByText(/hello/i));
    });
    it('contains comment saltiness ', () => {
        const wrap = tlr.render(<CommentRow comment={comment} />);
        expect(wrap.getByText(/1.46/i));
    });
});
