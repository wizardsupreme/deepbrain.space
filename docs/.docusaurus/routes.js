import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug/',
    component: ComponentCreator('/docs/__docusaurus/debug/', '472'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config/',
    component: ComponentCreator('/docs/__docusaurus/debug/config/', '62e'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content/',
    component: ComponentCreator('/docs/__docusaurus/debug/content/', '149'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData/',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData/', '59b'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata/',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata/', '943'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry/',
    component: ComponentCreator('/docs/__docusaurus/debug/registry/', 'ab0'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes/',
    component: ComponentCreator('/docs/__docusaurus/debug/routes/', 'cd1'),
    exact: true
  },
  {
    path: '/docs/eddie/',
    component: ComponentCreator('/docs/eddie/', 'd0a'),
    exact: true
  },
  {
    path: '/docs/marco/',
    component: ComponentCreator('/docs/marco/', 'e34'),
    exact: true
  },
  {
    path: '/docs/nova/',
    component: ComponentCreator('/docs/nova/', 'e3e'),
    exact: true
  },
  {
    path: '/docs/search/',
    component: ComponentCreator('/docs/search/', '6c9'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '2a6'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'b94'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '2e3'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '57a'),
            routes: [
              {
                path: '/docs/ai/agents/',
                component: ComponentCreator('/docs/ai/agents/', '942'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai/hosting/',
                component: ComponentCreator('/docs/ai/hosting/', 'f91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai/ides/',
                component: ComponentCreator('/docs/ai/ides/', '7f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai/interfaces/',
                component: ComponentCreator('/docs/ai/interfaces/', '0f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai/models/',
                component: ComponentCreator('/docs/ai/models/', '6c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai/storage/',
                component: ComponentCreator('/docs/ai/storage/', '0b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai/tools/',
                component: ComponentCreator('/docs/ai/tools/', 'fa0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai/videos/',
                component: ComponentCreator('/docs/ai/videos/', 'b36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blockchain/defi/',
                component: ComponentCreator('/docs/blockchain/defi/', '0ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blockchain/protocols/',
                component: ComponentCreator('/docs/blockchain/protocols/', 'dc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blockchain/web3/',
                component: ComponentCreator('/docs/blockchain/web3/', '159'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/productivity/automation/',
                component: ComponentCreator('/docs/productivity/automation/', '3c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/productivity/documentation/',
                component: ComponentCreator('/docs/productivity/documentation/', 'b08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/productivity/workflows/',
                component: ComponentCreator('/docs/productivity/workflows/', '248'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
