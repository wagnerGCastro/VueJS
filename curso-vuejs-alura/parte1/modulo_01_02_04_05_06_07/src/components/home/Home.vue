
<template>
    <main >
        <div class="container">
            <!-- <h1>{{ titulo}} </h1> -->
            <h1 @click="remove()" class="conteudo" v-text="titulo"></h1>
            <hr/>
            <h2 class="painel-titulo"> {{ titulo }} </h2>

            <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtro pelo título da foto">
             <p>{{ filtro }}</p>
        
            <br/> 
            <input @click.native="remove()" type="search"  class="filtro" @input=" name = $event.target.value ">
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
                        <image-responsive :url="foto.url" :titulo='foto.titulo' /> 
                        <!-- <img class="img-conteudo" :src="foto.url"  :alt="foto.titulo" width="300"> -->
                       
                       <!-- <botao-danger @click.native="remove(foto)" :id="foto._id"  type="button" rotulo="Remover"   placeholder=""/> -->

                       <!-- /*  @botaoAtivado é invocado pelo componente original  ver */ -->
                       <!-- <botao-danger @botaoAtivado="remove(foto)" :id="foto._id"  type="button" rotulo="Remover"   placeholder=""/> -->

                        <!-- Passando dados do Elemento Pai para este elemento filho -->
                        <botao-danger @botaoAtivado="remove(foto, $event)" :id="foto._id"  v-bind:confirmacao="true" type="button" rotulo="Remover"  estilo="padrao"  placeholder=""/>
                    </meu-painel>
                </li>  
            </ul>

        </div>
    </main>
</template>






<!-- Lifecycle Hooks: em que momento acessaremos nossa API -->


<script type="text/javascript">
    
    import Painel           from '../shared/painel/Painel.vue';
    import ImageResponsive  from '../shared/image/ImageResponsive.vue';
    import BotaoDanger      from '../shared/botoes/BotaoDanger';
   

    export default {
        //registra o Painel para ser usado
        components: {
            'meu-painel':       Painel,
            'image-responsive': ImageResponsive,
            'botao-danger':     BotaoDanger,
        },

        methods: {
           /* remove(foto) {
                // Elemeno selecionado
                var el = document.getElementById(foto._id);
                console.info(el);

                var li = el.parentNode.parentNode.parentNode;
                console.info( el.parentNode.parentNode.parentNode);

                var ul = el.parentNode.parentNode.parentNode.parentNode
                console.info( el.parentNode.parentNode.parentNode.parentNode);
                //li.parentNode.parentNode.parentNode.removeChild( li );


                if( confirm('Deseja remover a foto  '+foto.titulo+ '?' ))
                {
                    alert('Foto '+foto.titulo+ 'foi removida com sucesso');
                    // remove o Elemento selecionado
                    ul.removeChild(li);
                }

                // //console.log(JSON.stringify(foto, true, 4));
                // //console.table(foto);
                // // console.log(this);
                // //console.table(this);
                // console.table(this.$parent.$children);


            },
            */

            remove(foto, $event) {
                console.log('remove foto: ' +foto.titulo+ ' na data: '+$event );
            }

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

    //console.log(BotaoDanger );
</script>
    
<style>
  .centralizado {
    text-align: center;
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