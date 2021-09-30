<template>
   <div class="home">
      <PageTitle icon="home" main="Dashboard" 
               sub="Sudoeste materiais para construção" />
   </div>
</template>
<script>
   import PageTitle from '../template/PageTitle'

   export default {
      name: 'Home',
      components: { PageTitle }
   }
</script>
  
<style>
   .home {
     margin: 5px; 
   }
</style>