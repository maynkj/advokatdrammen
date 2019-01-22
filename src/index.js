import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import * as Pages from './pages';
import * as serviceWorker from './serviceWorker';

import Header from './components/Header';
import Aside from './components/Aside';

const routes = [
  {
    path: '/',
    component: Pages.About,
  },
  {
    path: '/fri-rettshjelp',
    component: Pages.FreeCounsel,
  },
  {
    path: '/kontakt',
    component: Pages.Contact,
  },
  {
    path: '/priser',
    component: Pages.Prices,
  },
  {
    path: '/personvern',
    component: Pages.PrivacyPolicy,
  },
];

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <div className="container">
      <Header />
      <main>
        {
          routes.map(({ path, component }) =>
            <Route
              exact
              key={path}
              path={path}
              component={component}
            />
          )
        }
      </main>
      <Aside />
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
