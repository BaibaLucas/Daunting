/* Package imports */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/*  Local imports */
// Styles
import './styles/reset.scss';
import './styles/index.scss';
// Components
import App from './components/App';
// Store

const rootReactElement = (
  <Router>
    <App />
  </Router>
);
const target = document.getElementById('root');
render(rootReactElement, target);
