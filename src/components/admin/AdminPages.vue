<template>
   <div class="admin-pages">
      <PageTitle icon="cogs" main="Administração do Sistema"
         sub="Cadastros & Cia" />
   </div>
</template>

<script>
   import PageTitle from '../template/PageTitle'

   export default{
   name: 'AdminPages',
   components: { PageTitle }
   }
</script>

<style>
   .admin-pages {
      margin:5px;
   } 
</style>
