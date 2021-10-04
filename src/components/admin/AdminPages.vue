<template>
   <div class="admin-pages">
      <PageTitle icon="cogs" main="Administração do Sistema"
         sub="Cadastros & Cia" />
      <div class="admin-pages-tabs">
         <b-card no-body>
            <b-tabs card>
               <b-tab title="Funcionarios" active>
                  <Funcionario />
               </b-tab>
            </b-tabs> 
         </b-card>
      </div>
   </div>
</template>

<script>
   import PageTitle from '../template/PageTitle'
   import Funcionario from '@/components/admin/Funcionario'
   
   export default{
      name: 'AdminPages',
      components: { 
         PageTitle,
         Funcionario
      },
      // mounted(){
      //    this.$toast.show(`Hey! I'm here default`,{position:"top-right", max:0});
      //    this.$toast.success(`Hey! I'm here success`, {position:"top-left",duration:false,queue:true,max:0});
      //    this.$toast.error(`Hey! I'm here error`, {position:"bottom-left",duration:false,queue:true,max:0});
      //    this.$toast.warning(`Hey! I'm here warning`,{position:"bottom-right",duration:false,queue:true,max:0});
      //    this.$toast.info(`Hey! I'm here info`, {position:"top",duration:false,queue:true,max:0});   
      //    this.$toast.info(`Hey! I'm here info`, {position:"bottom",duration:false,queue:true,max:0});   
      // }
   }
  
</script>

<style>
   .admin-pages {
      margin:5px;
   } 
</style>
