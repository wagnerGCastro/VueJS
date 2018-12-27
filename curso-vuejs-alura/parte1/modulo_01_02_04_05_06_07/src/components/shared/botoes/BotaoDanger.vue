
<template>
	<!-- <button  :type="type" :name="name" :id="id" :placeholder="placeholder" class="botao botao-perigo">{{ rotulo }}</button> -->
	<button v-on:click="disparaAcao()" :type="type" :name="name" :id="id" :placeholder="placeholder" class="botao" :class="estiloDoBotao"> {{ rotulo }} </button>
	
</template>				


<script type="text/javascript">
	export default {
		//props: ['type', 'name', 'id', 'placeholder','rotulo', 'confirmacao', 'estilo'],


		// validando as propriedades
		props: {
	       type: {
	           type: String, 
	           required: true
	       },

	       rotulo: {
	           type: String, 
	           required: true
	       },

	       confirmacao: Boolean,
	       estilo: String,
	       name: String,
	       id: String,
	       placeholder: String
	   },

		methods: {

            disparaAcao() {
            	console.info(typeof(this.confirmacao));

            	if (this.confirmacao) {
            		if(confirm('Confirma operacao?')) {
		           		// invoca outra 
		                //this.$emit('botaoAtivado');

		                // passando data deste elemento Pai para elemento Filho
	                	this.$emit('botaoAtivado', new Date());

	                	return;
	           		}

            	}

            	this.$emit('botaoAtivado', new Date());
        	}
		},

		computed: {
			estiloDoBotao(){
				if(this.estilo == 'padrao' || !this.estilo){
					return 'botao-padrao';
				}
				if(this.estilo == 'perigo'){
					return 'botao-perigo';
				}
			}
			
		}
	}
	
</script>

<style type="text/css" scoped>
    .botao {

        display: inline-block;
        padding: 5px;
        border-radius: 3px;
        margin: 10px;
        font-size: 0.9em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }									
	
</style>