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
  {
    path: '/rettsområder/arbeidsrett',
    component: Pages.Arbeidsrett,
  },
  {
    path: '/rettsområder/arv-og-skifte',
    component: Pages.Arv,
  },
  {
    path: '/rettsområder/barnerett',
    component: Pages.Barnerett,
  },
  {
    path: '/rettsområder/bistandsadvokat',
    component: Pages.Bistandsadvokat,
  },
  {
    path: '/rettsområder/eiendomsmegling',
    component: Pages.Eiendomsmegling,
  },
  {
    path: '/rettsområder/erstatningsrett',
    component: Pages.Erstatningsrett,
  },
  {
    path: '/rettsområder/familierett',
    component: Pages.Familierett,
  },
  {
    path: '/rettsområder/fast-eiendom-og-boligkjøpstvister',
    component: Pages.FastEiendom,
  },
  {
    path: '/rettsområder/forretningsjus',
    component: Pages.Forretningsjus,
  },
  {
    path: '/rettsområder/forsikringsrett',
    component: Pages.Forsikringsrett,
  },
  {
    path: '/rettsområder/gjeldsforhandlinger',
    component: Pages.Gjeldsforhandlinger,
  },
  {
    path: '/rettsområder/husleierett',
    component: Pages.Husleierett,
  },
  {
    path: '/rettsområder/nabotvister-og-miljø',
    component: Pages.Nabotvister,
  },
  {
    path: '/rettsområder/rettshjelpsforsikring',
    component: Pages.Rettshjelpsforsikring,
  },
  {
    path: '/rettsområder/strafferett',
    component: Pages.Strafferett,
  },
  {
    path: '/rettsområder/trygderett-og-nav',
    component: Pages.Trygderett,
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
