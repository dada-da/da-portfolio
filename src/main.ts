import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import { setupStore } from '/@/store';
import { setupRouter } from '/@/router';

import './style.css';
import App from './App.vue';

function bootstrap() {
  const app = createApp(App);

  setupStore(app);

  // Configure routing
  setupRouter(app);

  app.use(Antd).mount('#app');
}

bootstrap();
