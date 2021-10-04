<template>
   <div class="funcionario-admin">
		<b-form>	
           <input type="hidden" v-model="funcionario.fun_id" />
           <input type="hidden" v-model="funcionario.fun_senha"/>			
           
           <b-row>
               
                <b-col md="5" sm="12">
                    Nome						
                    <b-form-input size="sm" type="text" id="func-nome" 
                            v-model="funcionario.fun_nome" maxlength="255" required />
                </b-col>
                <b-col md="2" sm="12">
                    Sexo:
                    <b-form-select  id="fun-sexo" size="sm"
                            v-model="funcionario.fun_sexo" required>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                            <option value="O">Outro</option>					      
                        </b-form-select>
                </b-col>
                <b-col md="2" sm="12">
                    CPF
                    <b-form-input type="text" size="sm" id="fun-cpf" 
                            v-model="funcionario.fun_cpf" maxlength="15" required />                    						
                </b-col>
                <b-col md="3" sm="12">						   
                    Data nasc.:
                        <b-form-input type="date" id="fun-data-nasc"  size="sm" 
                            v-model="funcionario.fun_data_nasc" maxlength="20" required />                   
                </b-col>    
            </b-row> 
            <b-row>
                <b-col md="2" sm="12">
                    Telefone:
                    <b-form-input type="text" size="sm" id="telefone" 
                            v-model="funcionario.fun_telefone"  maxlength="45" />
                </b-col>  
                <b-col md="2" sm="12">
                    RG
                    <b-form-input type="text" size="sm" id="rg" 
                            v-model="funcionario.fun_rg" maxlength="45" required/> 
                </b-col>
                <b-col md="3" sm="12">
                    Pai
                    <b-form-input type="text" size="sm" id="pai" 
                        v-model="funcionario.fun_pai"  maxlength="255" />	 		      		
                </b-col>
                <b-col md="3" sm="12">
                    Mãe
                    <b-form-input type="text" size="sm" id="mae" 
                        v-model="funcionario.fun_mae"  maxlength="255"  required /> 
                </b-col>

                <b-col md="2" sm="12">
                    CTPS
                    <b-form-input type="text" size="sm" id="ctps" 
                            v-model="funcionario.fun_ctps" maxlength="45" required /> 
                </b-col>                                      
            </b-row>
            <b-row>
                <b-col md="4" sm="12">
                    E-Mail 
                        <b-form-input type="email" size="sm" id="email" 
                            v-model="funcionario.fun_email" maxlength="255"/>
                </b-col>
                <b-col md="2" sm="12">
                    Título
                        <b-form-input type="text" size="sm" id="titulo" 
                        v-model="funcionario.fun_titulo" maxlength="45" required />	      	
                </b-col>
                
                <b-col md="2" sm="12">
                    CEP
                        <b-form-input type="text" size="sm" id="end_cep" 
                            v-model="funcionario.fun_end_cep" maxlength="15" required/>
                </b-col>
                <b-col md="2" sm="12">
                    Estado
                        <b-form-select v-model="funcionario.fun_end_uf" :options="estados" 
                            size="sm" id="fun-end-uf" @blur="loadCidades"  required>
                        </b-form-select>
                </b-col>
                <b-col md="2" sm="12">
                Cidade
                        <b-form-select v-model="funcionario.fun_end_cidade" :options="cidades"
                            readonly required size="sm" id="fun-end-cidade"                           >					      
                        </b-form-select>					      
                </b-col>
            </b-row>
            <b-row>
                <b-col md="2" sm="12">
                    Função
                    <b-form-select size="sm" id="funcao" :options="funcao"
                            v-model="funcionario.fun_funcao" required>
                    </b-form-select>
                </b-col>
                <b-col md="4" sm="12">
                    Bairro
                    <b-form-input type="text" size="sm" id="end_bairro" 
                        v-model="funcionario.fun_end_bairro" maxlength="200" required/>
                </b-col>
                <b-col md="2" sm="12" >
                    Número
                    <b-form-input type="text" size="sm" id="end_nr" 
                        v-model="funcionario.fun_end_nr" maxlength="45" required/>
                </b-col>
                <b-col md="4" sm="12">
                    Rua
                    <b-form-input type="text" size="sm" id="end_rua" 
                        v-model="funcionario.fun_end_rua"  maxlength="200" required/>				      	
                </b-col>                
            </b-row>
            <b-row>
                <b-col md="10" sm="12">
                    Observação
                    <b-form-input type="text" size="m" id="fun-observacao" 
                        v-model="funcionario.fun_observacao"  maxlength="255" />	      	
                </b-col>
                <b-col md="2" sm="12">
                    Situação
                        <b-form-checkbox  id="fun-ativo" size="sm"
                            v-model="funcionario.fun_ativo" 
                            :value="funcionario.fun_ativo = 'sim'" unchecked-value="nao">
                            Ativo
                        </b-form-checkbox>
                </b-col>
            </b-row>                
            <b-button class="mt-3 me-2" variant="primary" v-if=" mode === 'save' " @click="save"> Salvar </b-button>
            <b-button class="mt-3 ms-2"  @click="reset"> Cancelar </b-button>
        </b-form>				
        <hr />
   
        <b-table striped hover info :items="funcionarios" :fields="fields" > 
             
            <template v-slot:cell(actions)="data">     
                     {{ data }} 
                                  
                    <b-button variant="warning" @click="editFuncionario(data.item.fun_id)" size='sm' class="me-2">
                        <font-awesome-icon icon="pencil-alt"/>
                    </b-button>
                    <b-button variant="warning" @click="toggleDetails(data)"  class="me-2">
                        <font-awesome-icon icon="pencil-alt"/>
                    </b-button>
                    
                    <b-button variant="danger" @click="funcionario = data.item" v-b-modal.modal-func size='sm' class="ml-2">
                        <font-awesome-icon icon="trash-alt"/>
                    </b-button>
            </template>   
        </b-table>
  
        <b-pagination size="sm"  v-model="page" pills 
            :total-rows="count" :per-page="limit" 
            first-text="⏮"   prev-text="⏪"
            next-text="⏩" last-text="⏭"            
            class="mt-4" align="center"/>

        <b-modal id="modal-func" ref="modal-f" size="sm" title="Exclusão?" hide-footer>
            <template #modal-title>
                Confirme a exclusão do funcionário:<br>
                Código: {{this.funcionario.fun_id}} - {{ this.funcionario.nome}}<br> 
            </template>   
            
            <b-button class="mt-3 me-2" variant="primary" @click="remove">Confirmar</b-button>
            <b-button class="mt-3" @click="hideModal" >Cancelar</b-button>
        </b-modal>
   </div>
</template>

<script>

import { baseApiUrl } from '@/global'
//import axios from 'axios' 

export default {
    name: 'Funcionario',
    data() {
      return {
        mode: 'save',
        page: 1,
        limit: 3,
        count: 0,
        estados: [],
        cidades: [],
        funcionario: {},
        funcionarios: [],
        fields: [
            {key:'fun_id', label:'Codigo', sortable:true},
            {key:'nome', label:'Nome', sortable:true},
            {key:'funcao', label:'Função', sortable:true},
            {key:'telefone', label:'Telefone', sortable:true},
            {key:'email', label:'E-mail', sortable:true},
            {key:'actions', label:'Ações', formatter: 'fun_id'}
        ],
        funcao: [
            {value: "M" , text:'Master'},
            {value: "A" , text:'Admin'},
            {value: "G", text:'Gerente'},
            {value: "S" , text:'Supervisor'},
            {value: "V" , text:'Vendedor'}
        ]        
      }
    },
    methods: {
        toggleDetails(dado){
            console.log(dado)
        },
        loadFuncionarios(){
            const url = `${baseApiUrl}/funcionario/tbl?page=${this.page}`
            this.axios.get(url)
                .then(res =>{                    
                    this.funcionarios = res.data.data
                    this.page = res.data.current_page
                    this.limit = res.data.per_page
                    this.count = res.data.total
                     
                })
                    
        },

        loadEstados(){
            const url = `${baseApiUrl}/estado`
            this.axios.get(url)
                .then(res =>this.estados = res.data)     
        },

        loadCidades(){           
            const url = `${baseApiUrl}/cidade/${this.funcionario.fun_end_uf}`
            this.axios.get(url)
                .then(res =>this.cidades = res.data)      
        },

        editFuncionario(id, mode='save' ){
                       
            this.mode = mode
            const url = `${baseApiUrl}/funcionario/${id}`
            this.axios.get(url)
                .then(res =>{
                    this.funcionario = res.data
                    this.loadCidades()
                })  

        },
       
        remove(){
            const id = this.funcionario.fun_id
            this.axios.delete(`${baseApiUrl}/funcionario/${id}`)
                .then(()=>{
                    this.hideModal()
                    this.reset()
                    this.$toasted.global.defaultSuccess()
                })
                .catch()
        },
         hideModal() {
            this.$refs['modal-f'].hide()
        },  
    },

    watch:{
        page(){
           this.loadFuncionarios()
        }
    },

    mounted(){
        this.loadFuncionarios()
        
    }

}

</script>

<style>

</style>

