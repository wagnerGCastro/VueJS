import Vue 				from 'vue'
import App 				from './App.vue'
import VueResource 		from 'vue-resource';
import VueRouter 		from 'vue-router';

// tem que vir entre chaves, porque não é default
import { routes } 		from './routes';



Vue.use(VueRouter);

const router = new VueRouter({
  	routes : routes,
  	mode: 'history'

});

Vue.use(VueResource);

new Vue({
  el: 		'#app',
  router: 	router, 		
  render: 	h => h(App)
})