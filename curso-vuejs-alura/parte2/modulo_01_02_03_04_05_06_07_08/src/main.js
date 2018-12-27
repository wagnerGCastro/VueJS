import Vue 							from 'vue'
import App 							from './App.vue'
import VueResource 					from 'vue-resource';
import VueRouter 					from 'vue-router';

// tem que vir entre chaves, porque não é default
import { routes } 					from './routes';
import './directives/Transform';
import VeeValidate 					from 'vee-validate';
import msg 							from 'vee-validate/dist/locale/pt_BR';


Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  	routes : routes,
  	mode: 'history'

});

Vue.use(VeeValidate, {
  
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});




// http usará sempre o endereço abaixo
Vue.http.options.root = 'http://localhost:3000';

new Vue({
  el: 		'#app',
  router: 	router, 		
  render: 	h => h(App)
})