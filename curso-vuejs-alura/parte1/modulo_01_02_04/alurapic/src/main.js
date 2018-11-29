// Global View Object
import Vue from 'vue'

// Modules exports - componentes
import App from './App.vue'


// importando o módulo
import VueResource from 'vue-resource';



// Aqui será usado
Vue.use(VueResource);

//criando uma view instance
new Vue({
  el: '#app',
  render: h => h(App)
})


// new Vue({
//  el: '#app',
//   render: function(h) {
//   	h(App)
//   } 
// })
