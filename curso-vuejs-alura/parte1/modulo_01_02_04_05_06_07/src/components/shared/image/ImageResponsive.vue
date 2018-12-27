<template>
	<img class="image-responsive"   :src="url" :alt="titulo">
</template>





<script type="text/javascript">
	export default {
		 props: ['url', 'titulo']
	}	
	
</script>

<style type="text/css" scoped>
	.image-responsive { width: 100%;min-height: 180px; }

</style>