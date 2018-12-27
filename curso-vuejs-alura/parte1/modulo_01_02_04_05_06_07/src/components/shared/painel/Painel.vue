
<!-- <template> -->
    <!-- EXEMPLO DA ESTRUTURA, NÃO ENTRA AINDA EM NOSSO CÓDIGO -->
    <!-- <div class="painel"> -->
       <!--  <h2 class="painel-titulo">{{ titulo }}</h2>
        <div class="painel-conteudo"> -->
            <!-- <img :src="foto.url"  :alt="foto.alt" width="300"> -->
        <!-- </div>
    </div>
</template> -->

<template>
    <!-- EXEMPLO DA ESTRUTURA, NÃO ENTRA AINDA EM NOSSO CÓDIGO -->
    <div class="painel">
        <h2 class="painel-titulo" @dblclick="visivel = !visivel"> {{ titulo }}  </h2>
        <transition name="painel-fade">
            <div class="painel-conteudo" v-show="visivel">
              <!-- sera substituido -->
              <slot >
                  <!-- <img :src="foto.url"  :alt=a"foto.alt" width="300"> -->
              </slot>
            </div>
        </transition>
    </div>
</template>




<!-- Lifecycle Hooks: em que momento acessaremos nossa API -->
<script>
    export default {
        // Fotos Interadas pelo FOR 
        props: ['titulo'],

        data() {
            return {
                visivel: true,
            }
        }
    }
</script>
    
<style scoped>


  /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    font-size:12px;
    font-weight: 800;
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  

  * {
    box-shadow: 5px 5px 5px;
  }

   /**
        painel-fade-enter        // antes do elemento ser incluído ou removido, o estado atual
        painel-fade-enter-active // quando o elemento esta sendo incluído
        painel-fade-leave-active // quando o elemento esta sendo removido 
   */
    .painel-fade-enter, .painel-fade-leave-active {
      opacity: 0
    }
    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity .4s
    }

</style>