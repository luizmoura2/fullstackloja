<template>
   <div class="cliente-admin">
		<b-form>				
            <input type="hidden" v-model="cliente.cli_codigo" />
                                   
            <b-row>
                <b-col md="5" sm="12">						
                    <b-form-group label="Nome:" label-for="cli-nome">
                        <b-form-input size="sm" type="text" id="cli-nome" 
                            v-model="cliente.cli_nome"
                                maxlength="255" required />
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Sexo:" labl-for="cli-sexo" >
                        <b-form-select  id="cli-sexo" size="sm"
                            v-model="cliente.cli_sexo" required>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                            <option value="O">Outro</option>					      
                        </b-form-select>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="CPF" label-for="cli-cpf">
                        <b-form-input type="text" size="sm" id="cli-cpf" 
                            v-model="cliente.cli_cpf" maxlength="15" required />
                    </b-form-group>						
                </b-col>
                <b-col md="3" sm="12">						   
                    <b-form-group label="Data nasc.:" label-for="cli-data-nasc">
                        <b-form-input type="date" id="cli-data-nasc"  size="sm" 
                            v-model="cliente.cli_data_nasc" maxlength="20" required />
                    </b-form-group>
                </b-col>    				
            </b-row>
            <b-row>
                <b-col md="2" sm="12">
                    <b-form-group label="Telefone:" label-for="cli-telefone">
                        <b-form-input type="text" size="sm" id="telefone" 
                            v-model="cliente.cli_telefone"  maxlength="45" />
                    </b-form-group>
                </b-col>  
                <b-col md="4" sm="12">
                    <b-form-group label="E-Mail" label-for="cli-email">   
                        <b-form-input type="email" size="sm" id="cli-email" 
                            v-model="cliente.cli_email" maxlength="255"/>
                    </b-form-group>
                </b-col>                            
                <b-col md="2" sm="12">
                    <b-form-group label="CEP" label-for="end_cep" >
                        <b-form-input type="text" size="sm" id="end_cep" 
                            v-model="cliente.cli_end_cep" maxlength="15" required/>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Estado" label-for="cli-end-uf" >
                        <b-form-select v-model="cliente.cli_end_uf" :options="estados" 
                            size="sm" id="cli-end-uf" @blur="loadCidades"  required>
                        </b-form-select>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Cidade" label-for="cli-end-cidade" >
                        <b-form-select v-model="cliente.cli_end_cidade" :options="cidades"
                            readonly required size="sm" id="cli-end-cidade"                           >					      
                        </b-form-select>
                    </b-form-group>					      
                </b-col>
            </b-row>

            <b-row>
               <b-col md="2" sm="12">
                    <b-form-group label="RG" label-for="rg" >
                    <b-form-input type="text" size="sm" id="rg" 
                        v-model="cliente.cli_rg" maxlength="200" required/>
                    </b-form-group>
                </b-col>
               <b-col md="4" sm="12">
                    <b-form-group label="Bairro" label-for="end_bairro" >
                    <b-form-input type="text" size="sm" id="end_bairro" 
                        v-model="cliente.cli_end_bairro" maxlength="200" required/>
                    </b-form-group>
                </b-col>
                <b-col md="1" sm="12" >
                    <b-form-group label="Número" label-for="end_nr" >
                        <b-form-input type="text" size="sm" id="end_nr" 
                        v-model="cliente.cli_end_nr" maxlength="45" required/>
                        </b-form-group>
                </b-col>
                <b-col md="5" sm="12">
                    <b-form-group label="Rua" label-for="end_rua" >
                        <b-form-input type="text" size="sm" id="end_rua" 
                        v-model="cliente.cli_end_rua"  maxlength="200" required/>
                    </b-form-group>				      	
                </b-col>                
            </b-row>

            <b-row>
                <b-col md="10" sm="12">
                    <b-form-group label="Observação" label-for="cli-observacao">
                    <b-form-input type="text" size="m" id="cli-observacao" 
                        v-model="cliente.cli_observacao"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Situação:" label-for="cli-ativo" >
                        <b-form-checkbox  id="cli-ativo" size="sm"
                            v-model="cliente.cli_ativo" 
                            :value="cliente.cli_ativo = 'sim'" unchecked-value="nao">
                            Ativo
                        </b-form-checkbox>
                    </b-form-group>
                </b-col>
            </b-row>                
            <b-button variant="primary" v-if=" mode === 'save' " @click="save"> Salvar </b-button>
            <b-button class="ml-2"  @click="reset"> Cancelar </b-button>
        </b-form>
        <hr>
        <b-table striped hover :items="clientes" :fields="fields">
           <template >
                <b-button variant="warning" @click="editCliente(data.item.cli_codigo)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="cliente = data.item" 
                    v-b-modal.modal-clic class="ml-2"><i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
        <p class="mt-3">Page: {{page}}/{{count}}</p>
        <b-pagination size="sm"  v-model="page" pills 
            :total-rows="count" :per-page="limit" 
            first-text="⏮"   prev-text="⏪"
            next-text="⏩" last-text="⏭"            
            class="mt-4" align="center"/>

        <b-modal id="modal-clic" ref="modal-f" size="sm" title="Exclusão?" hide-footer>
                <template #modal-title>
                    Confirme a exclusão do Cliente:<br>
                    Código: {{this.cliente.cli_codigo}} - {{ this.cliente.cli_nome}}<br> 
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
   name: 'Cliente',
   data() {
      return {
        mode: 'save',
        page: 1,
        limit: 3,
        count: 0,
        estados: [],
        cidades: [],
        cliente: { },
        clientes: [],
        fields: [
            {key:'cli_codigo', label:'Codigo', sortable:true},
            {key:'cli_nome', label:'Nome', sortable:true},
            {key:'cli_ativo', label:'Situação', sortable:true},
            {key:'cli_telefone', label:'Telefone', sortable:true},
            {key:'cli_email', label:'E-mail', sortable:true},
            {key:'actions', label:'Ações'}
        ], 
      }
   },
    methods: {
        loadClientes(){
            const url = `${baseApiUrl}/cliente/tbl?page=${this.page}`
            axios.get(url)
                .then(res =>{
                    this.clientes = res.data.data
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
            const url = `${baseApiUrl}/cidade/${this.cliente.cli_end_uf}`
            axios.get(url)
                .then(res =>this.cidades = res.data)      
        },

        reset(){
            this.mode = 'save' ,
            this.cliente = {},
            this.loadClientes()
        },

        editCliente(id, mode='save' ){

            this.mode = mode
            const url = `${baseApiUrl}/cliente/${id}`
            axios.get(url)
                .then(res =>this.cliente = res.data)  

        },

        save(){
           // eslint-disable-next-line
            console.log(this.cliente);
            this.cliente.cli_cnpj = "0"
            const method = this.cliente.cli_codigo ? 'put':'post'
            const id = this.cliente.cli_codigo ? `/${this.cliente.cli_codigo}` :''
            const url = `${baseApiUrl}/cliente${id}`
            axios[method](url, this.cliente)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(this.$toast.error(`Hey! I'm here error`, {position:"top-right",duration:false,queue:true,max:0}))
        },
       
        remove(){
            const id = this.cliente.cli_codigo
            axios.delete(`${baseApiUrl}/cliente/${id}`)
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
           this.loadClientes()
        }
    },

    mounted(){
        this.loadClientes()
        this.loadEstados()
    }

}
</script>

<style>

</style>

