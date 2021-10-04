<template>
   <div class="fornecedor-admin">
		<b-form>				
            <input type="hidden" v-model="fornecedor.for_codigo" />
                        
            <b-row>
               <b-col md="4" sm="12">						
                  <b-form-group label="Nome:" label-for="for-nome">
                     <b-form-input size="sm" type="text" id="for-nome" 
                           v-model="fornecedor.for_nome"
                              maxlength="255" required />
                  </b-form-group>
               </b-col>
               <b-col md="2" sm="12">
                  <b-form-group label="CNPJ" label-for="for-cnpj">
                     <b-form-input type="text" size="sm" id="for-cnpj" 
                           v-model="fornecedor.for_cnpj" maxlength="20" required />
                  </b-form-group>						
               </b-col>
               <b-col md="2" sm="12">
                  <b-form-group label="Telefone:" label-for="for-telefone">
                     <b-form-input type="text" size="sm" id="for_telefone" 
                           v-model="for_telefone"  maxlength="14" />
                  </b-form-group>
               </b-col> 
               <b-col md="4" sm="12">
                  <b-form-group label="E-Mail" label-for="for-email">   
                        <b-form-input type="email" size="sm" id="for-email" 
                           v-model="fornecedor.for_email" maxlength="100"/>
                  </b-form-group>
               </b-col>   				
            </b-row>

            <b-row>                                         
                <b-col md="2" sm="12">
                    <b-form-group label="CEP" label-for="for_end_cep" >
                        <b-form-input type="text" size="sm" id="for_end_cep" 
                            v-model="fornecedor.for_end_cep" maxlength="15" required/>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Estado" label-for="for-end-uf" >
                        <b-form-select v-model="fornecedor.for_end_uf" :options="estados" 
                            size="sm" id="for-end-uf" @blur="loadCidades"  required>
                        </b-form-select>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Cidade" label-for="for-end-cidade" >
                        <b-form-select v-model="fornecedor.for_end_cidade" :options="cidades"
                            readonly required size="sm" id="for-end-cidade"                           >					      
                        </b-form-select>
                    </b-form-group>					      
                </b-col>
                 <b-col md="4" sm="12">
                    <b-form-group label="Bairro" label-for="for_end_bairro" >
                    <b-form-input type="text" size="sm" id="for_end_bairro" 
                        v-model="fornecedor.for_end_bairro" maxlength="45" required/>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12" >
                    <b-form-group label="Número" label-for="for_end_nr" >
                        <b-form-input type="text" size="sm" id="for_end_nr" 
                        v-model="fornecedor.for_end_nr" maxlength="10" required/>
                        </b-form-group>
                </b-col>
            </b-row>

            <b-row>
               <b-col md="4" sm="12">
                  <b-form-group label="Rua" label-for="for_end_rua" >
                     <b-form-input type="text" size="sm" id="for_end_rua" 
                     v-model="fornecedor.for_end_rua"  maxlength="200" required/>
                  </b-form-group>				      	
               </b-col>   
            </b-row>                
            <b-button variant="primary" v-if=" mode === 'save' " @click="save"> Salvar </b-button>
            <b-button class="ml-2"  @click="reset"> Cancelar </b-button>
        </b-form>
        <hr>
         <slot name="slt" :label="label" :field="fields"></slot>
        <b-table striped hover :items="fornecedores" :fields="fields">
           <template v-slot:[slt]="data">
                <b-button variant="warning" @click="editFornecedor(data.item.for_codigo)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="fornecedor = data.item" 
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
                    Confirme a exclusão do Forncedor:<br>
                    Código: {{this.fornecedor.id}} - {{ this.fornecedor.for_nome}}<br> 
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
   name: 'Fornecedor',
   data() {
      return {
        mode: 'save',
        page: 1,
        limit: 3,
        count: 0,
        estados: [],
        cidades: [],
        for_telefone: "",
        fornecedor: {
            for_nome: "Luciana Soluções33",
            for_cnpj: "090242395000193",
            for_email: "luizartur2@hotmail.com",
            for_end_bairro: "Campinas Brotas",
            for_end_cep: "40.275-010",
            for_end_cidade: 2900801,
            for_end_nr: "19",
            for_end_rua: "Al Piatã",
            for_end_uf: 29,
            for_fantasia: "fantasia",
            for_observacao: "Obs Cliente"
        },
        fornecedores: [],
        fields: [
            {key:'for_codigo', label:'Codigo', sortable:true},
            {key:'for_nome', label:'Nome', sortable:true},
            {key:'for_cnpj', label:'CNPJ', sortable:true},
            {key:'for_email', label:'E-mail', sortable:true},
            {key:'actions', label:'Ações'}
        ], 
      }
   },
    methods: {
        loadFornecedores(){
            const url = `${baseApiUrl}/fornecedor/tbl?page=${this.page}`
            axios.get(url)
                .then(res =>{
                    this.fornecedores = res.data.data
                    this.page = res.data.current_page
                    this.limit = res.data.per_page
                    this.count = res.data.total
                })      
        },

        loadEstados(){
            const url = `${baseApiUrl}/estado`
            axios.get(url)
                .then(res =>this.estados = res.data)     
        },

        loadCidades(){           
            const url = `${baseApiUrl}/cidade/${this.fornecedor.for_end_uf}`
            axios.get(url)
                .then(res =>this.cidades = res.data)      
        },

        reset(){
            this.mode = 'save' ,
            this.fornecedor = {},
            this.loadFornecedores()
        },

        editFornecedor(id, mode='save' ){

            this.mode = mode
            const url = `${baseApiUrl}/fornecedor/${id}`
            axios.get(url)
                .then(res =>{
                    this.fornecedor = res.data
                     // eslint-disable-next-line
                    console.log(this.fornecedor);
                }) 
        },

        save(){

            const method = this.fornecedor.for_codigo ? 'put':'post'
            const id = this.fornecedor.for_codigo ? `/${this.fornecedor.for_codigo}` :''
            const url = `${baseApiUrl}/fornecedor${id}`
            axios[method](url, {"for": this.fornecedor, "tel":this.for_telefone })
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(this.$toast.error(`Hey! I'm here error`, {position:"top-right",duration:false,queue:true,max:0}))
        },
       
        remove(){
            const id = this.fornecedor.for_codigo
            axios.delete(`${baseApiUrl}/fornecedor/${id}`)
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
           this.loadFornecedores()
        }
    },

    mounted(){
        this.loadFornecedores()
        this.loadEstados()
    }

}
</script>

<style>

</style>

