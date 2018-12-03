
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
        <h2 class="painel-titulo">{{ titulo }}</h2>

        <!-- sera substituido -->
        <slot class="painel-conteudo">
            <!-- <img :src="foto.url"  :alt="foto.alt" width="300"> -->
        </slot>
    </div>
</template>




<!-- Lifecycle Hooks: em que momento acessaremos nossa API -->
<script>
    export default {
        // Fotos Interadas pelo FOR 
        props: ['titulo']
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

   .painel .img-conteudo {
    width:100%;
    min-height: 180px;
  }

  * {
    box-shadow: 5px 5px 5px;
  }


</style>