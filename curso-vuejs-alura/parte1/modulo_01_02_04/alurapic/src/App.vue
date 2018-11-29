<template>
    <main>
        <!-- <h1>{{ titulo}} </h1> -->
        <h1 v-text="titulo"></h1>

        <hr/>

        <h2> Fotos Interadas pelo FOR </h2>
       <ul>
            <li v-for="foto of fotos">
                <img :src="foto.url"  :alt="foto.alt" width="300">
            </li>  
        </ul>

    </main>

</template>

<!-- Lifecycle Hooks: em que momento acessaremos nossa API -->
<script>
    export default {
        created() {
            let promise = this.$http.get('http://localhost:3000/v1/fotos');


            // promise.then( res => {
            //        // console.log(res.json())
            //        res.json().then( RespostaFotos => this.fotos = RespostaFotos  );
            //     }
            // );

            promise
                .then( res =>  res.json() )
                .then( RespostaFotos => this.fotos = RespostaFotos, err => console.log(err));

            console.log('Inicianod created');
        },

        data() {
            return {
                titulo: 'Paisagem',                
                fotos: [ ]

            }
        },

    }
</script>
    

<style>
</tyle>
