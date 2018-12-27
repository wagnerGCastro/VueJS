<template>
    <main>
        <!-- <h1>{{ titulo}} </h1> -->
        <h1 v-text="titulo"></h1>


        <!-- //========================================   object -1    ===================================================================== -->
        <!-- <img v-bind:src="foto.url"  v-bind:alt="foto.alt"> -->
        <img :src="foto1.url"  :alt="foto1.alt" width="500">
        <img :src="foto2.url"  :alt="foto2.alt">
        <!-- //========================================   object - 2    ===================================================================== -->
       
       <hr/>

        <ul>
            <li>
                <img :src="foto1.url"  :alt="foto1.alt" width="300">
            </li>  
            </li>  
        </ul>
       <!-- //========================================   array - 3    ===================================================================== -->

        <hr/>

        <h2> Fotos Interadas pelo FOR </h2>
       <ul>
            <li v-for="foto of fotos">
                <img :src="foto.url"  :alt="foto.alt" width="300">
            </li>  
        </ul>

    </main>

</template>


<script>
    export default {
        data() {

            return {
                 titulo: 'Paisagem',

                //========================================   object -1    =====================================================================
                foto1: {
                    url: 'https://1.bp.blogspot.com/-KG0wd2VgeYs/TepJkq9u4-I/AAAAAAAAAEo/fyeV4o3Ign4/s1600/paisagem_26.jpg',
                    alt: 'Paisagem'
                },
                foto2: {
                    url: 'https://1.bp.blogspot.com/-KG0wd2VgeYs/TepJkq9u4-I/AAAAAAAAAEo/fyeV4o3Ign4/s1600/paisagem_26.jpg',
                    alt: 'Paisagem'
                },

                
                fotos: [
                    {
                        url: 'https://1.bp.blogspot.com/-KG0wd2VgeYs/TepJkq9u4-I/AAAAAAAAAEo/fyeV4o3Ign4/s1600/paisagem_26.jpg',
                        alt: 'Paisagem'
                    },
                    {
                        url: 'https://s1.static.brasilescola.uol.com.br/artigos/as-montanhas-diferenciam-se-pela-altitude-mais-elevada-em-relacao-as-outras-formas-relevo-5926cccf2e122.jpg?i=http://brasilescola.uol.com.br/upload/conteudo/images/as-montanhas-diferenciam-se-pela-altitude-mais-elevada-em-relacao-as-outras-formas-relevo-5926cccf2e122.jpg&w=600&h=350&c=FFFFFF&t=1',
                        alt: 'Montanhas'
                    }
                ]

            }
           
        }
    }
    
</script>
    

<style>

</tyle>
