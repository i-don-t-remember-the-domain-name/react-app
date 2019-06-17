import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import * as tlr from '@testing-library/react';

import Navbar from './Navbar';
let navbar = (
    <Router>
        <Navbar />
    </Router>
);
afterEach(tlr.cleanup);

describe('Navbar', () => {
    it('contains hn stats ', () => {
        const wrap = tlr.render(navbar);
        expect(wrap.getByText(/HN stats/i));
    });
    it('contains about', () => {
        const wrap = tlr.render(navbar);
        expect(wrap.getByText(/about/i));
    });
    it('contains toxic hackers', () => {
        const wrap = tlr.render(navbar);
        expect(wrap.getAllByText(/toxic hackers/i));
    });
    it('contains theme button', () => {
        const wrap = tlr.render(navbar);
        expect(wrap.findByTestId('theme-button'));
    });
});
