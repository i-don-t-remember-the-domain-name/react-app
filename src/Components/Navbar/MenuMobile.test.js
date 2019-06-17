import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import * as tlr from '@testing-library/react';

import MenuMobile from './MenuMobile';
let menuMobile = (
    <Router>
        <MenuMobile />
    </Router>
);
afterEach(tlr.cleanup);

describe('Menu Mobile', () => {
    it('contains hn stats ', () => {
        const wrap = tlr.render(menuMobile);
        expect(wrap.getByText(/HN stats/i));
    });
    it('contains about', () => {
        const wrap = tlr.render(menuMobile);
        expect(wrap.getByText(/about/i));
    });
    it('contains toxic hackers', () => {
        const wrap = tlr.render(menuMobile);
        expect(wrap.getAllByText(/toxic hackers/i));
    });
    it('contains theme button', () => {
        const wrap = tlr.render(menuMobile);
        expect(wrap.findByTestId('theme-button'));
    });
});
