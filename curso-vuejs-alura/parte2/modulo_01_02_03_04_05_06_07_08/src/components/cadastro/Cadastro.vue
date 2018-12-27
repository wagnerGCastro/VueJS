<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>
  <div>
  		<div class="container">
    		<h1 class="centralizado">Cadastro</h1>
            <h2 class="centralizado">{{ foto.titulo }}</h2>

            <div class="row">
                <div class="col-md-6">
                        
                    <h2 v-if="foto._id" class="centralizado"> Alterando </h2>
                    <h2 v-else="foto._id" class="centralizado"> Cadastrando </h2>

                   <hr>

                    <form class="form-horizontal" @submit.prevent="gravar()" action="">
					    <div class="form-group">
							<label class="control-label col-sm-3" for="titulo">TÍTULO:</label>
							<div class="col-sm-9">
								<!-- usando a diretiva atalho v-model -->
								<!-- <input type="text" class="form-control"  id="titulo"  @input="foto.titulo = $event.target.value" :value="foto.titulo"  autocomplete="off" placeholder="Titulo"> -->
								<input type="text" class="form-control" name="titulo" data-vv-as="Título xxx"  v-validate data-vv-rules="required|min:3|max:30" id="titulo"  v-model.lazy="foto.titulo"  autocomplete="off" placeholder="Titulo">
								<span class="erro" v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
							</div>
					    </div>
						 
						<div class="form-group">
							<div class="controle">
								<label class="control-label col-sm-3" for="url">URL:</label>
								<div class="col-sm-9">
									<!-- usando a diretiva atalho v-model -->
									<!-- <input type="text" class="form-control"  id="url"  v-on:input="foto.url = $event.target.value" :value="foto.url" autocomplete="off" placeholder="URL"> -->
									<input type="text" class="form-control"  id="url" v-validate data-vv-rules="required" name="url"  v-model.lazy="foto.url" autocomplete="off" placeholder="URL">
									<span class="erro" v-show="errors.has('url')">{{ errors.first('url') }}</span>
									<div class="" style="width:50px; height:60px; margin-top: 15px; margin-bottom: -15px"> 
										<image-responsive v-show="foto.url" :url="foto.url" :titulo="foto.titulo" />
									</div>
								</div>
							</div>
					   </div>
	
					   <div class="form-group">
							 <div class="controle">
								<label class="control-label col-sm-3" for="descricao">DESCRIÇÃO:</label>
								<div class="col-sm-9">
									<!-- usando a diretiva atalho v-model -->
									<!-- <textarea id="descricao" class="form-control" @input="foto.descricao = $event.target.value" :value="foto.descricao"  autocomplete="off"></textarea> -->
									<textarea id="descricao" name="descricao" v-validate data-vv-rules="required|min:3|max:200"  class="form-control" v-model="foto.descricao" autocomplete="off"></textarea>
									<span class="erro" v-show="errors.has('descricao')">{{ errors.first('descricao') }}</span>
								</div>
					  
							</div>
					   </div>

					
					  <div class="form-group">
							<div class="col-sm-offset-3 col-sm-9">
								<div class="controle">
									<meu-botao rotulo="GRAVAR" type="submit"/> 
									<!-- <router-link to="/"><meu-botao rotulo="VOLTAR" type="button"/></router-link> -->

									<!-- 
										Nomeando rotas
									-->
									<router-link :to="{name: 'home'}"><meu-botao rotulo="VOLTAR" type="button"/></router-link>
								</div>
							</div>
					  </div>
                    </form> 
                </div>
            </div>
    	</div>
  </div>
</template>

<script type="text/javascript">
    import ImageResponsive from '../shared/image/ImageResponsive.vue';
    import BotaoDanger     from '../shared/botoes/BotaoDanger.vue';
    import Foto            from '../domain/foto/Foto.js';
    import FotoService     from '../domain/foto/FotoService.js';

    export default {
        components: {
            'image-responsive': ImageResponsive,
            'meu-botao': BotaoDanger,
        },

        created() {
            // this.promise = this.$resource(`v1/fotos`);
            
            this.service = new FotoService(this.$resource);

            if ( this.id ) {
                this.service
                    .busca(this.id)
                    .then( foto => this.foto = foto);
            }

        },

        data() {
            return {


                // foto: {
                //     titulo: '',
                //     url:'',
                //     descricao: '',

                // }


                // Usando a classe a foto
                foto: new Foto(),
                promise: '',

                id:     this.$route.params.id
            }
        },

        methods: {
            gravar() {
                console.log(this.foto);
                console.log(this.foto.titulo);
                console.log(this.foto.descricao);
                console.log(this.foto.url);

                // this.foto = {
                //     titulo:     "",
                //     url:        "",
                //     descricao:  ""
                // }

                // usando  a classe Foto
               //this.foto = new Foto();


                // this.$http
                //     .post('http://localhost:3000/v1/fotos', this.foto)
                //     .then( () => this.foto = new Foto(), err => console.log(err) );
                
                 // this.promise
                 //    .save(this.foto)
                 //    .then( () => this.foto = new Foto(), err => console.log(err) );


                /**
                 * Usando  class Foto service
                 */
				 
				 
				// validate
				this.$validator
					.validateAll()
					.then(success => {
					
						if (success) {
						
							this.service
							.cadastrar( this.foto )
							.then( () => 
								{
									// se for alteração redireciona para a página home
									if (this.id) {
										this.$router.push({ name: 'home' });
									}

									this.foto = new Foto();
								}, 

								err => console.log(err)
							);
						}
					});   
            }
        },



        
    }
</script>



<style scoped>
    .centralizado {
        text-align: center;
    }

  .controle {
    font-size: 12px;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }
  
  .erro {
    color: red;
  }

</style>