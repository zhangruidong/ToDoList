import { defineConfig } from 'umi';

export default defineConfig({
  antd: {
    compact: true
  },
  dva: {
    immer: true,
    hmr: false,
  },
  layout: {
    name: 'UmiJS'
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', name: 'todolist', component: '@/pages/index' },
  ],
});
