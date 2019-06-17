import React from 'react';

import * as tlr from '@testing-library/react';

import HackerPageCommentList from './HackerPageCommentList';

afterEach(tlr.cleanup);

const saltiestComments = [{ comment_id: 1, comment: 'hello' }, { comment_id: 2, comment: 'hello' }];

describe('Hacker page comment list', () => {
    it('matches the snapshot ', () => {
        const wrap = tlr.render(<HackerPageCommentList saltiestComments={saltiestComments} />);
        expect(wrap).toMatchSnapshot();
    });
});
