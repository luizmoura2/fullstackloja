<template>
   <div class="produto-admin">
		<b-form>
            <hr>teste
            <b-table striped hover :items="produtos" :fields="fields"/>

            <p class="mt-3">Page: {{page}}/{{count}}</p>
            <b-pagination size="sm"  v-model="page" pills 
                :total-rows="count" :per-page="limit" 
                first-text="⏮"   prev-text="⏪"
                next-text="⏩" last-text="⏭"            
                class="mt-4" align="center"/>
        </b-form>
   </div>
</template>

<script>

import { baseApiUrl } from '@/global'
import axios from 'axios' 

export default {
   name: 'Produto',
   data() {
      return {
        mode: 'save',
        page: 1,
        limit: 3,
        count: 0,
        produtos: [],
        fields: [
            {key:'codigo', label:'Codigo', sortable:true},
            {key:'nome', label:'Nome', sortable:true},
            {key:'pro_codigo', label:'Prod. codigo', sortable:true},
            {key:'pro_descricao', label:'Descrição', sortable:true},
            {key:'marca', label:'Marca', sortable:true},
            {key:'quantidade', label:'Quant.', sortable:true},
            {key:'Unidade', label:'Un', sortable:true},
            {key:'preco_venda', label:'E-mail', sortable:true},
            {key:'validade', label:'Validade'},
            {key:'foto', label:'foto'}
        ], 

      }
   },
    methods: {
        loadProdutos(){
                const url = `${baseApiUrl}/promocao`
                axios.get(url)
                    .then(res =>{
                        this.produtos = res.data //.data
                        //console.log(this.produtos)
                        //this.page = res.data.current_page
                        //this.limit = res.data.per_page
                        //this.count = res.data.total
                    })      
        }
    },
    mounted(){
        this.loadProdutos()
    }

}
</script>

<style>

</style>


