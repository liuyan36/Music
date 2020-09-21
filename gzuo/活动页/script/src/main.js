import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import { Button, Select, Option,Input,Form, FormItem, Cascader } from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Button)
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Cascader)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
