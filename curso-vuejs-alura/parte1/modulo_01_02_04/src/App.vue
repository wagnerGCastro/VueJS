
<template>
    <main class="corpo">
        <!-- <h1>{{ titulo}} </h1> -->
        <h1 class="conteudo" v-text="titulo"></h1>
        <hr/>
        <h2 class="painel-titulo"> {{ titulo }} </h2>

        <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtro pelo título da foto">
         <p>{{ filtro }}</p>
    
        <br/> 
        <input type="search"  class="filtro" @input=" name = $event.target.value ">
        <p>{{ mensagem }}</p>
        <p>{{ name }}</p>

        <ul class="lista-fotos">

           <!--  <li v-for="foto of fotos">
                <img :src="foto.url"  :alt="foto.alt" width="300">
            </li>  
            -->

            <!-- <li class="lista-fotos-item" v-for="foto of fotos"> -->
            <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
                <!-- EXEMPLO DA ESTRUTURA, NÃO ENTRA AINDA EM NOSSO CÓDIGO -->
                <meu-painel :titulo="foto.titulo">
                    <image-responsive :url="foto.url" :titulo='foto.titulo' > </image-responsive>
                    <!-- <img class="img-conteudo" :src="foto.url"  :alt="foto.titulo" width="300"> -->
                </meu-painel>
            </li>  
        </ul>
    </main>
</template>






<!-- Lifecycle Hooks: em que momento acessaremos nossa API -->


<script type="text/javascript">
    import Painel from './components/shared/painel/Painel.vue';
    import ImageResponsive from './components/shared/image/ImageResponsive.vue';

    export default {
        //registra o Painel para ser usado
        components: {
            'meu-painel': Painel,
            'image-responsive': ImageResponsive,
        },

        created() {
            let promise = this.$http.get('http://localhost:3000/v1/fotos');

            // promise.then( res => {
            //        console.log(res.json())
            //        //res.json().then( RespostaFotos => this.fotos = RespostaFotos  );
            //     }
            // );

            promise
                .then( res =>  res.json() )
                .then( RespostaFotos => {
                        this.fotos = RespostaFotos;
                        //console.log(this.fotos);
                    }, 
                    err => console.log(err)
                );

                console.log('Inicianod created');
           
        },


        computed: {

            fotosComFiltro() {
               if( this.filtro) {
                // se tem valor
                //return [];

                let exp = new RegExp(this.filtro.trim(), 'i');

                return this.fotos.filter( foto => exp.test( foto.titulo));

               } else {

                return this.fotos;

               } 
            },

            mensagem() {
                    return `o nome ${this.name} possui ${this.name.length} caracteres`;
            },

        },

        //https://br.vuejs.org/v2/api/index.html

        data() {

            return {
                titulo: 'Paisagem',                
                fotos: [ ],
                filtro: '',
                name: '',

            }
        },

    }
</script>
    
<style>
  .centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
    margin-bottom: 60px;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;

  }

 .filtro {
        display: block;
        width: 100%;
        padding: 10px;
  }


    .painel .img-conteudo {
        width:100%;
        min-height: 180px;
    }

</style>