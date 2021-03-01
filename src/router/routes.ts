import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/lore',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'introduction', alias: '', component: () => import('pages/Lore.vue') },
      { path: 'heraldic-tribes', component: () => import('pages/Lore.vue') },
      { path: 'shard-of-the-cosmos', component: () => import('pages/Lore.vue') },
      { path: 'birth-of-magic', component: () => import('pages/Lore.vue') },
    ],
  },
  {
    path: '/world',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'currency', alias: '', component: () => import('pages/World.vue') },
      { path: 'flora', component: () => import('pages/World.vue') },
      { path: 'fauna', component: () => import('pages/World.vue') },
    ],
  },
  // {
  //   path: '/lore',
  //   component: () => import('layouts/Lore.vue'),
  //   children: [{ path: '', component: () => import('pages/Index.vue') }],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    // component: () => import('pages/Error404.vue'),
    redirect: '/',
  },
];

export default routes;
