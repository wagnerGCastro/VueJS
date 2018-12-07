
<template>
    <main class="corpo">
        <!-- <h1>{{ titulo}} </h1> -->
        <h1 class="conteudo" v-text="titulo"></h1>
        <hr/>
        <h2 class="painel-titulo"> {{ titulo }} </h2>

        <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtro pelo título da foto">
        {{ filtro }}

        <ul class="lista-fotos">

           <!--  <li v-for="foto of fotos">
                <img :src="foto.url"  :alt="foto.alt" width="300">
            </li>  
            -->

            <li class="lista-fotos-item" v-for="foto of fotos">
                <!-- EXEMPLO DA ESTRUTURA, NÃO ENTRA AINDA EM NOSSO CÓDIGO -->
                <meu-painel :titulo="foto.titulo">
                    <img class="img-conteudo" :src="foto.url"  :alt="foto.titulo" width="300">
                </meu-painel>
            </li>  
        </ul>
    </main>
</template>






<!-- Lifecycle Hooks: em que momento acessaremos nossa API -->
<script>
    import Painel from './components/shared/painel/Painel.vue';

    export default {
        //registra o Painel para ser usado
        components: {
            'meu-painel': Painel
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




        //https://br.vuejs.org/v2/api/index.html

        data() {
            return {
                titulo: 'Paisagem',                
                fotos: [ ],
                filtro: '',

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
        padding: 5px;
  }



</style>