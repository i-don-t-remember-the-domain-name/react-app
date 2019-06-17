import React from 'react';
import ReactDOM from 'react-dom';
import * as tlr from '@testing-library/react';
import App from './App';

afterEach(tlr.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
