
<template>
    <main class="corpo">
       <!-- exibir componentes de acordo com a rota -->
        <menu-nav-bar> </menu-nav-bar>
        
        <transition name="painel-fade">
            <router-view></router-view>
        </transition>
    </main>
</template>







<script type="text/javascript">
    import MenuNavBar from './components/shared/nav/MenuNavBar';

   

    export default {
         components: {
            'menu-nav-bar':  MenuNavBar,
        }
    }

</script>
    

<style soped>
    body{
        /*background: #8999A8;*/
        margin-bottom: 30px;
    }

 
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
    margin-bottom: 60px;
    margin-top: 60px;


  }

    /*.painel-fade-enter, .painel-fade-leave-active {
        opacity: 0
    }
    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity .4s
    }*/

</style>