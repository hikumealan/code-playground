import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineCustomElements } from '@nexus/core/loader';
import { BrowserRouter as Router } from 'react-router-dom';

const url = new URL(window.location.href);
const component = url.searchParams.get('component');

let App;
const path = component ? `./components/${component}` : './App';

import(`${path}`).then((module) => {
  App = module.default;
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <Router>
      <App />
    </Router>
  );

  defineCustomElements(window);
});
