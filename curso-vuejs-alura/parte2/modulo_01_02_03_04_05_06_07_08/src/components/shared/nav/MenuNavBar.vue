<template>
	<div class="navbar-wrapper">
	    <div class="container-fluid">
	        <nav class="navbar navbar-fixed-top">
	            <div class="container">
	                <div class="navbar-header">
	                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	                    <span class="sr-only">Toggle navigation</span>
	                    <span class="icon-bar"></span>
	                    <span class="icon-bar"></span>
	                    <span class="icon-bar"></span>
	                    </button>
	                    <a class="navbar-brand" href="#">Logo
							<!-- <img src="./src/assets/logo.png"> -->
	                    </a>
	                </div>
	                <div id="navbar" class="navbar-collapse collapse">
	                    <ul class="nav navbar-nav">
							<!-- <li class="active">
								<router-link to="/home">Home</router-link>
							</li> -->
							<li class="" v-for="route in routes">
	                        	<router-link :to="route.path ? route.path : '/'"> {{ route.titulo }} </router-link>
	                        </li>
							


	                       <!--  <li class="active">
	                        	<router-link to="/">Home</router-link>
	                        </li>
							<li>
								<router-link to="/cadastro">Cadastro</router-link>
							</li>
							<li><a href="#">Add New</a></li> -->



	                        <!-- <li class=" dropdown">
	                            <a href="#" class="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cadastro <span class="caret"></span></a>
	                            <ul class="dropdown-menu">
	                                <li class=" dropdown">
	                                    <a href="#" class="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">View Departments</a>
	                                </li>
	                                <li><a href="#">Add New</a></li>
	                            </ul>
	                        </li>
	                        <li><a href="#">Add New</a></li>
	                        <li class=" dropdown"><a href="#" class="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Managers <span class="caret"></span></a>
	                            <ul class="dropdown-menu">
	                                <li><a href="#">View Managers</a></li>
	                                <li><a href="#">Add New</a></li>
	                            </ul>
	                        </li>
	                        <li class=" dropdown"><a href="#" class="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Staff <span class="caret"></span></a>
	                            <ul class="dropdown-menu">
	                                <li><a href="#">View Staff</a></li>
	                                <li><a href="#">Add New</a></li>
	                                <li><a href="#">Bulk Upload</a></li>
	                            </ul>
	                        </li>
	                        <li class=" down"><a href="#" class="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">HR <span class="caret"></span></a>
	                            <ul class="dropdown-menu">
	                                <li><a href="#">Change Time Entry</a></li>
	                                <li><a href="#">Report</a></li>
	                            </ul>
	                        </li> -->
	                    </ul>
	                    <ul class="nav navbar-nav pull-right">
	                        <li class=" dropdown"><a href="#" class="dropdown-toggle active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Signed in as  <span class="caret"></span></a>
	                            <ul class="dropdown-menu">
	                                <li><a href="#">Change Password</a></li>
	                                <li><a href="#">My Profile</a></li>
	                            </ul>
	                        </li>
	                        <li class=""><a href="#">Logout</a></li>
	                    </ul> 
	                </div>
	            </div>
	        </nav>
	    </div>
	</div>
</template>



<script type="text/javascript">
	import { routes } from '../../../routes';

	export default {
		
		// props: [],

		// validando props em caso de exportação
		// props: {
		// 	routes: {
		// 		type: Array,
		// 		requered: true
		// 	}
		// },

		data() {
            return {
            	//routes: routes,

            	/**
            	 * Nomenado rotas
            	 * se for false, não entrará na propriedade routes
            	 */
            	routes: routes.filter( route => route.menu),
            	

            }
        }
	}

	console.log(routes);

</script>


<style type="text/css" scoped>
	/*https://bootsnipp.com/snippets/featured/rainbow-nav*/

	.navbar, .dropdown-menu{
		background:rgba(255,255,255,0.25);
		  background: #8999A8;
		border: none;

	}
	.nav>li>a, .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover, .dropdown-menu>li>a, .dropdown-menu>li{
	  border-bottom: 3px solid transparent;
	}
	.nav>li>a:focus, .nav>li>a:hover,.nav .open>a, .nav .open>a:focus, .nav .open>a:hover, .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover{
	  border-bottom: 3px solid transparent;
	  background: none;
	}
	.navbar a, .dropdown-menu>li>a, .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover, .navbar-toggle{
	 color: #fff;
	}
	.dropdown-menu{
	      -webkit-box-shadow: none;
	    box-shadow:none;
	}

	.nav li:hover:nth-child(8n+1), .nav li.active:nth-child(8n+1){
	  border-bottom: #C4E17F 3px solid;
	}
	.nav li:hover:nth-child(8n+2), .nav li.active:nth-child(8n+2){
	  border-bottom: #F7FDCA 3px solid;
	}
	.nav li:hover:nth-child(8n+3), .nav li.active:nth-child(8n+3){
	  border-bottom: #FECF71 3px solid;
	}
	.nav li:hover:nth-child(8n+4), .nav li.active:nth-child(8n+4){
	  border-bottom: #F0776C 3px solid;
	}
	.nav li:hover:nth-child(8n+5), .nav li.active:nth-child(8n+5){
	  border-bottom: #DB9DBE 3px solid;
	}
	.nav li:hover:nth-child(8n+6), .nav li.active:nth-child(8n+6){
	  border-bottom: #C49CDE 3px solid;
	}
	.nav li:hover:nth-child(8n+7), .nav li.active:nth-child(8n+7){
	  border-bottom: #669AE1 3px solid;
	}
	.nav li:hover:nth-child(8n+8), .nav li.active:nth-child(8n+8){
	  border-bottom: #62C2E4 3px solid;
	}

	.navbar-toggle .icon-bar{
	    color: #fff;
	    background: #fff;
	}

</style>