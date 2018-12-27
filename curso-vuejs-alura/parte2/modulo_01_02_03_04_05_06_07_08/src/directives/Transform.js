import Vue from 'vue';

Vue.directive('meu-transform', {

	bind(el, bind, vnode) {
		// console.log('diretiva associada');
		// console.info(el);
		// console.table(el);
		
	 	 let current = 0;
		
        el.addEventListener('dblclick', function() {
	        current+=90;
	        this.style.transform = `rotate(${current}deg)`;
        });
		
	}
});



// Vue.directive('meu-transform-bind', {

// 	bind(el, bind, vnode) {
// 		// console.log('diretiva associada');
// 		// console.info(el);
// 		// console.table(el);
		
// 	 	 let current = 0;
		
//         el.addEventListener('dblclick', function() {
//         	let increment = bind.value || 90;
// 	        current+=increment;
//             this.style.transition = "transform 0.5s";
// 	        this.style.transform = `rotate(${current}deg)`;
//         });
		
// 	}
// });
// 



// Vue.directive('meu-transform-bind', {

// 	bind(el, binding, vnode) {
// 		// console.log('diretiva associada');
// 		// console.info(el);
// 		// console.table(el);
		
// 	 	 let current = 0;
		
//         el.addEventListener('dblclick', function() {
//         	let incremento = 90;
// 	        let animate = false;

// 	        if(binding.value) {
// 	            incremento = binding.value.incremento
// 	            animate = binding.value.animate 

// 	        }

// 	        current+=incremento;
// 	        this.style.transform = `rotate(${current}deg)`;
// 	        if (animate) this.style.transition = "transform 0.5s";
//         });
		
// 	}
// });



/** 
 * Usando modifiers (modificadores)
 *
 */
// Vue.directive('meu-transform-bind', {

// 	bind(el, binding, vnode) {

//       let current = 0;

//       el.addEventListener('dblclick', function() {

// 			let incremento = binding.value || 90;


// 			if (binding.modifiers.reverse) {
// 				current-=incremento;
				
// 			} else {
// 				current+=incremento;

// 			}

// 			this.style.transform = `rotate(${current}deg)`;
// 			if (binding.modifiers.animate) this.style.transition = "transform 0.5s";

//       });
//     }
// });






/** 
 * Usando Arguments com modifiers (modificadores)
 *
 */
Vue.directive('meu-transform-bind', {

	bind(el, binding, vnode) {



		// Para saber mais: o parâmetro vnode
		 console.log(vnode.context);


      let current = 0;

      el.addEventListener('dblclick', function() {

			let incremento = binding.value || 0;

			let efeito;

			if(!binding.arg || binding.arg == 'rotate') {

	          	if (binding.modifiers.reverse) {
            		current-=incremento;
	          	} else {
            		current+=incremento;
	          	}

	           efeito = `rotate(${current}deg)`;

	        } else if(binding.arg == 'scale') {

	           efeito = `scale(${incremento})`;
	        }

	        this.style.transform = efeito;

        	if (binding.modifiers.animate) this.style.transition = "transform 0.5s";

      });
    }
});





