<template>
   <div class="estoque-admin">
		<b-form>
            <b-row>  
                <b-col md="2" sm="12">
                    <b-form-group label="Produto" label-for="id" >
                        <b-form-select v-model="estoque.pro_id" :options="produtos" 
                            size="sm" id="id" @blur="loadProduto">
                        </b-form-select>
                    </b-form-group>
                </b-col>
                <!-- <b-col md="2" sm="12">                    
                    <b-form-group label="Código:" >
                        <b-form-input size="sm" type="text" readonly name="id" v-model="estoque.id" />
                    </b-form-group>
                    <input type="hidden" name="fot_id" v-model="estoque.fot_id" />        
                </b-col>   -->   
            </b-row>
            <b-row>
                <b-col md="2" sm="12">						
                    <b-form-group label="Referencia:" label-for="referencia">
                        <b-form-input size="sm" type="text" id="referencia" 
                                v-model="estoque.pro_referencia"  maxlength="15" required />
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Categoria" label-for="categoria">
                        <b-form-input type="text" size="sm" id="categoria" 
                                v-model="estoque.pro_categoria" maxlength="45" required />
                    </b-form-group>						
                </b-col>
                    <b-col md="2" sm="12">
                    <b-form-group label="Nota fiscal:" label-for="nota-fiscal">
                        <b-form-input type="text" size="sm" id="nota-fiscal" 
                                v-model="estoque.pro_nota_fiscal"  maxlength="20" />
                    </b-form-group>
                </b-col> 
                <b-col md="4" sm="12">
                    <b-form-group label="Marca" label-for="marca">   
                            <b-form-input type="text" size="sm" id="marca" 
                                v-model="estoque.pro_marca" maxlength="100"/>
                    </b-form-group>
                </b-col> 
                <b-col md="2" sm="12">
                    <b-form-group label="Quantidade" label-for="quantidade">   
                            <b-form-input type="text" size="sm" id="quantidade" 
                                v-model="estoque.pro_quantidade" maxlength="100"/>
                    </b-form-group>
                </b-col> 
            </b-row>

            <b-row>  				
                <b-col md="2" sm="12">
                    <b-form-group label="Vendido" label-for="vendido" >
                        <b-form-input type="text" size="sm" id="vendido" 
                            v-model="estoque.pro_vendido" maxlength="15" required/>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Custo" label-for="custo-un" >
                    <b-form-input type="text" size="sm" id="custo-un" 
                        v-model="estoque.pro_preco_custo_un" maxlength="18" required/>
                    </b-form-group>
                </b-col>         
                <b-col md="2" sm="12">
                    <b-form-group label="Preço venda" label-for="preco-venda_un">
                    <b-form-input type="text" size="sm" id="preco-venda_un" 
                        v-model="estoque.pro_preco_venda_un"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Preço cartão" label-for="preco-cartao-un">
                    <b-form-input type="text" size="sm" id="preco-cartao-un" 
                        v-model="estoque.pro_preco_cartao_un"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                    <b-col md="2" sm="12">
                    <b-form-group label="Preço prazo" label-for="preco-prazo-un">
                    <b-form-input type="text" size="sm" id="preco-prazo-un" 
                        v-model="estoque.pro_preco_prazo_un"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Desconto" label-for="pro_desconto">
                    <b-form-input type="text" size="sm" id="pro_desconto" 
                        v-model="estoque.pro_desconto"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
            </b-row>

            <b-row>            
                <b-col md="2" sm="12">
                    <b-form-group label="Validade" label-for="data_validade">
                    <b-form-input type="date" size="sm" id="data_validade" 
                        v-model="estoque.pro_data_validade"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Unidade" label-for="unidade">
                    <b-form-input type="text" size="sm" id="unidade" 
                        v-model="estoque.pro_unidade"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Entrada" label-for="data_entrada">
                    <b-form-input type="date" size="sm" id="data_entrada" 
                        v-model="estoque.pro_data_entrada"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>           
                <b-col md="6" sm="12">
                    <b-form-group label="Observação" label-for="pro_observacao">
                    <b-form-input type="text" size="sm" id="pro_observacao" 
                        v-model="estoque.pro_observacao"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
            </b-row>  

            <b-button variant="primary" v-if=" mode === 'save' " @click="save"> Salvar </b-button>
            <b-button class="ml-2"  @click="reset"> Cancelar </b-button>

        </b-form>

        <hr>
         <slot name="slt" :label="label" :field="fields"></slot>
        <b-table striped hover :items="estoques" :fields="fields">
           <template v-slot:[slt]="data">
                <b-button variant="warning" @click="editEstoque(data.item.id)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="estoque = data.item" 
                    v-b-modal.modal-clic class="ml-2"><i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
        
        <b-pagination size="sm"  v-model="page" pills 
            :total-rows="count" :per-page="limit" 
            first-text="⏮"   prev-text="⏪"
            next-text="⏩" last-text="⏭"            
            class="mt-4" align="center"/>

        <b-modal id="modal-clic" ref="modal-f" size="sm" title="Exclusão?" hide-footer>
                <template #modal-title>
                    Confirme a exclusão do Produto no esqoque:<br>
                    Código: {{this.estoque.id}} - {{ this.estoque.pro_nome}}<br> 
                </template>   
               
            <b-button class="mt-3" variant="primary" @click="remove">Confirmar</b-button>
            <b-button class="mt-3 ml-2" @click="hideModal" >Cancelar</b-button>
        </b-modal>
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
        estados: [],
        cidades: [],
        estoque: {
            pro_id: 1,
            pro_data_entrada: "2021-07-04",
            pro_data_validade: "2021-07-31",
            pro_desconto: "0",
            pro_descricao: "Descrição estoque",
            pro_marca: "União",
            pro_nota_fiscal: "123",
            pro_observacao: "Obs Produto",
            pro_preco_cartao_un: "17",
            pro_preco_custo_un: "15.00",
            pro_preco_prazo_un: "17",
            pro_preco_venda_un: "16",
            pro_quantidade: "100",
            pro_referencia: "123456789876666",
            pro_unidade: "Kg",
            pro_vendido: "0"
        },
        estoques: [],
        produtos: [],
        fields: [
            {key:'id', label:'Codigo', sortable:true},
            {key:'pro_nome', label:'Nome', sortable:true},
            {key:'pro_categoria', label:'CNPJ', sortable:true},
            {key:'pro_descricao', label:'Desctição', sortable:true},
            {key:'pro_preco_unitario', label:'E-mail', sortable:true},
            {key:'actions', label:'Ações'}
        ], 
      }
   },
    methods: {
        loadEstoques(){
            const url = `${baseApiUrl}/estoque/tbl?page=${this.page}`
            axios.get(url)
                .then(res =>{
                    this.estoques = res.data.data
                    this.page = res.data.current_page
                    this.limit = res.data.per_page
                    this.count = res.data.total
                })      
        },

        loadProdutos(){
            const url = `${baseApiUrl}/produto/list`
            axios.get(url)
                .then(res =>{
                    this.produtos = res.data
                    // eslint-disable-next-line
                    console.log(this.data);    

                })     
        },

        reset(){
            this.mode = 'save' ,
            this.estoque = {},
            this.loadEstoques()
        },

        editEstoque(id, mode='save' ){

            this.mode = mode
            const url = `${baseApiUrl}/estoque/${id}`
            axios.get(url)
                .then(res =>{
                    this.estoque = res.data
                     
                })  

        },

        save(){    
              // eslint-disable-next-line
                    console.log(this.estoque);  
            const method = this.estoque.id ? 'put':'post'
            const id = this.estoque.id ? `/${this.estoque.id}` :''
            const url = `${baseApiUrl}/estoque${id}`
            axios[method](url, this.estoque)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(this.$toast.error(`Hey! I'm here error`, {position:"top-right",duration:false,queue:true,max:0}))
        },
       
        remove(){
            const id = this.estoque.id
            axios.delete(`${baseApiUrl}/estoque/${id}`)
                .then(()=>{
                    this.hideModal()
                    this.reset()
                    this.$toasted.global.defaultSuccess()
                })
                .catch(this.$toast.error(`Hey! I'm here error`, {position:"top-right",duration:false,queue:true,max:0}))
        },
        hideModal() {
            this.$refs['modal-f'].hide()
        },

    },

    watch:{
        page(){
           this.loadEstoques()
        }
    },

    mounted(){
        this.loadEstoques()
        this.loadProdutos()
    }

}
</script>

<style>

</style>


