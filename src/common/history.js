import React from 'react';
import { createMemoryRouter } from 'react-router';
import Splash from '../pages/Splash';
import PlayerChoose from '../pages/player/Choose';
import PlayerCreate from '../pages/player/Create';
import Home from '../pages/Home';
import Annoucement from '../pages/stories/Annoucement';

export const router = createMemoryRouter(
  [
    {
      path: '/splash',
      element: <Splash />,
    },
    {
      path: '/player/choose',
      element: <PlayerChoose />,
    },
    {
      path: '/player/create',
      element: <PlayerCreate />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/story/annoucement',
      element: <Annoucement />,
    },
    // childRoutes: [
    //   require('./Splash').default,
    //   require('./Purchase').default,
    //   require('./player').default,

    //   require('./home').default,
    //   require('./career').default,
    //   require('./stories').default,
    //   require('./inventory').default,
    // ].map(v => v.routeConfig || v),
  ],
  {
    initialEntries: ['/splash'],
  }
);
