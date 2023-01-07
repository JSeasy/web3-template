import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.dashboard',
    requiresAuth: true,
    icon: 'icon-dashboard',
    order: 0,
  },
  children: [
    {
      path: 'workplace',
      name: 'Workplace',
      component: () => import('@/views/test/index.vue'),
      meta: {
        locale: 'menu.dashboard.workplace',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'erc20',
      name: 'Erc20',
      component: () => import('@/views/erc20/index.vue'),
      meta: {
        locale: 'menu.dashboard.ERC20',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'users',
      name: 'Users',
      component: () => import('@/views/users/index.vue'),
      meta: {
        locale: 'menu.dashboard.users',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'account',
      name: 'Account',
      component: () => import('@/views/account/index.vue'),
      meta: {
        locale: 'menu.dashboard.account',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DASHBOARD;
