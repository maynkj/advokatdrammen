import React from 'react';
import { Link } from 'react-router-dom';

const pages = [
  {
    path: '/rettsområder/arbeidsrett',
    name: 'Arbeidsrett'
  },
  {
    path: '/rettsområder/arv-og-skifte',
    name: 'Arv/Skifte'
  },
  {
    path: '/rettsområder/barnerett',
    name: 'Barnevern/Barnerett'
  },
  {
    path: '/rettsområder/bistandsadvokat',
    name: 'Bistandsadvokat'
  },
  {
    path: '/rettsområder/eiendomsmegling',
    name: 'Eiendomsmegling'
  },
  {
    path: '/rettsområder/erstatningsrett',
    name: 'Erstatningsrett'
  },
  {
    path: '/rettsområder/familierett',
    name: 'Familierett'
  },
  {
    path: '/rettsområder/fast-eiendom-og-boligkjøpstvister',
    name: 'Fast eiendom/Boligkjøpstvister'
  },
  {
    path: '/rettsområder/forretningsjus',
    name: 'Forretningsjus'
  },
  {
    path: '/rettsområder/forsikringsrett',
    name: 'Forsikringsrett'
  },
  {
    path: '/rettsområder/gjeldsforhandlinger',
    name: 'Gjeldsforhandlinger'
  },
  {
    path: '/rettsområder/husleierett',
    name: 'Husleierett'
  },
  {
    path: '/rettsområder/nabotvister-og-miljø',
    name: 'Nabotvister/Miljø'
  },
  {
    path: '/rettsområder/rettshjelpsforsikring',
    name: 'Rettshjelpsforsikring'
  },
  {
    path: '/rettsområder/strafferett',
    name: 'Strafferett'
  },
  {
    path: '/rettsområder/trygderett-og-nav',
    name: 'Trygderett/NAV'
  },
];

const Aside = () => (
  <aside>
    <h2>Forretningsområder</h2>
    <nav>
      <ul>
        {
          pages.map(({ path, name }) => (
            <li key={name}>
              <Link to={path}>
                {name}
              </Link>
              {/* {name} */}
            </li>
          ))
        }

      </ul>
    </nav>
  </aside>
);

export default Aside;
