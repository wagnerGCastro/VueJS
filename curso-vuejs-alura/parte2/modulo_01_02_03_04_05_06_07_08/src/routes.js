 
import Home 	from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';


export const routes = [
	{
		path:  			'', 
		name:  			'home',
		component: 		Home,
		titulo: 		'Home',
		menu: 			true
	},
	{
		path:  			'/cadastro', 
		name: 			'cadastro',
		component: 		Cadastro,
		titulo:  		'Cadastro',
		menu:  			true
	},
	{
		path:  			'/cadastro/:id', 
		name: 			'alterar',
		component: 		Cadastro,
		titulo:  		'Cadastro',
		menu:  			false
	},
	{
		path:  			'*', 
		name:  			'home',
		component: 		Home,
		titulo: 		'Home',
		menu: 			false
	}

]; 
			
// localhost:8080/#/cadastroo





/** 
 * Code splitting e lazy loading 
 *
 */
//================================================================================

// import Home from './components/home/Home.vue';
// import Cadastro from './components/cadastro/Cadastro.vue';
// // função que retorna component
// // Se quisermos carregar o Cadastro.vue assincronamente apenas quando o usuário acessar sua rota precisamos alterar nosso código para:
// //const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');


// export const routes = [
// 	{
// 		path:  			'', 
// 		name:  			'home',
// 		component: 		Home,
// 		titulo: 		'Home',
// 		menu: 			true
// 	},
// 	{
// 		path:  			'/cadastro', 
// 		name: 			'cadastro',
// 		component: 		Cadastro,
// 		titulo:  		'Cadastro',
// 		menu:  			true
// 	},
// 	{
// 		path:  			'/cadastro/:id', 
// 		name: 			'alterar',
// 		component: 		Cadastro,
// 		titulo:  		'Cadastro',
// 		menu:  			false
// 	},
// 	{
// 		path:  			'*', 
// 		name:  			'home',
// 		component: 		Home,
// 		titulo: 		'Home',
// 		menu: 			false
// 	}

// ];
			
// localhost:8080/#/cadastroo
