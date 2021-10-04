<template>
   <div class="funcionario-admin">
		<b-form>				
            <input type="hidden" v-model="funcionario.fun_codigo" />
            <input type="hidden" v-model="funcionario.fun_senha"/>
            
            <b-row>
                <b-col md="5" sm="12">						
                    <b-form-group label="Nome:" label-for="fun-nome">
                        <b-form-input size="sm" type="text" id="func-nome" 
                            v-model="funcionario.fun_nome"
                                maxlength="255" required />
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Sexo:" labl-for="fun-sexo" >
                        <b-form-select  id="fun-sexo" size="sm"
                            v-model="funcionario.fun_sexo" required>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                            <option value="O">Outro</option>					      
                        </b-form-select>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="CPF" label-for="fun-cpf">
                        <b-form-input type="text" size="sm" id="fun-cpf" 
                            v-model="funcionario.fun_cpf" maxlength="15" required />
                    </b-form-group>						
                </b-col>
                <b-col md="3" sm="12">						   
                    <b-form-group label="Data nasc.:" label-for="fun-data-nasc">
                        <b-form-input type="date" id="fun-data-nasc"  size="sm" 
                            v-model="funcionario.fun_data_nasc" maxlength="20" required />
                    </b-form-group>
                </b-col>    				
            </b-row>
            <b-row>
                <b-col md="2" sm="12">
                    <b-form-group label="Telefone:" label-for="fun-telefone">
                        <b-form-input type="text" size="sm" id="telefone" 
                            v-model="funcionario.fun_telefone"  maxlength="45" />
                    </b-form-group>
                </b-col>  
                <b-col md="2" sm="12">
                    <b-form-group label="RG" label-for="rg">
                        <b-form-input type="text" size="sm" id="rg" 
                            v-model="funcionario.fun_rg" maxlength="45" required/>
                    </b-form-group> 
                </b-col>
                <b-col md="3" sm="12">
                    <b-form-group label="Pai:" label-for="pai">
                    <b-form-input type="text" size="sm" id="pai" 
                        v-model="funcionario.fun_pai"  maxlength="255" />	
                    </b-form-group> 		      		
                </b-col>
                <b-col md="3" sm="12">
                    <b-form-group label="Mãe:" label-for="mae">
                    <b-form-input type="text" size="sm" id="mae" 
                        v-model="funcionario.fun_mae"  maxlength="255"  required />
                    </b-form-group> 
                </b-col>

                <b-col md="2" sm="12">
                    <b-form-group label="CTPS" label-for="ctps" >
                        <b-form-input type="text" size="sm" id="ctps" 
                            v-model="funcionario.fun_ctps" maxlength="45" required />
                    </b-form-group> 
                </b-col>                                      
            </b-row>
            <b-row>
                    <b-col md="4" sm="12">
                    <b-form-group label="E-Mail" label-for="email">   
                        <b-form-input type="email" size="sm" id="email" 
                            v-model="funcionario.fun_email" maxlength="255"/>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Título" label-for="titulo" >
                        <b-form-input type="text" size="sm" id="titulo" 
                        v-model="funcionario.fun_titulo" maxlength="45" required />
                    </b-form-group>	      	
                </b-col>
                
                <b-col md="2" sm="12">
                    <b-form-group label="CEP" label-for="end_cep" >
                        <b-form-input type="text" size="sm" id="end_cep" 
                            v-model="funcionario.fun_end_cep" maxlength="15" required/>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Estado" label-for="fun-end-uf" >
                        <b-form-select v-model="funcionario.fun_end_uf" :options="estados" 
                            size="sm" id="fun-end-uf" @blur="loadCidades"  required>
                        </b-form-select>
                    </b-form-group>
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Cidade" label-for="fun-end-cidade" >
                        <b-form-select v-model="funcionario.fun_end_cidade" :options="cidades"
                            readonly required size="sm" id="fun-end-cidade"                           >					      
                        </b-form-select>
                    </b-form-group>					      
                </b-col>
            </b-row>				
            <b-row>
                <b-col md="2" sm="12">
                    <b-form-group label="Função" label-for="funcao" >
                        <b-form-select size="sm" id="funcao" :options="funcao"
                            v-model="funcionario.fun_funcao" required>
                        </b-form-select>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Bairro" label-for="end_bairro" >
                    <b-form-input type="text" size="sm" id="end_bairro" 
                        v-model="funcionario.fun_end_bairro" maxlength="200" required/>
                    </b-form-group>
                </b-col>
                <b-col md="1" sm="12" >
                    <b-form-group label="Número" label-for="end_nr" >
                        <b-form-input type="text" size="sm" id="end_nr" 
                        v-model="funcionario.fun_end_nr" maxlength="45" required/>
                        </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Rua" label-for="end_rua" >
                        <b-form-input type="text" size="sm" id="end_rua" 
                        v-model="funcionario.fun_end_rua"  maxlength="200" required/>
                    </b-form-group>				      	
                </b-col>
                
            </b-row>				
            <b-row>
                <b-col md="10" sm="12">
                    <b-form-group label="Observação" label-for="fun-observacao">
                    <b-form-input type="text" size="m" id="fun-observacao" 
                        v-model="funcionario.fun_observacao"  maxlength="255" />	
                    </b-form-group>      	
                </b-col>
                <b-col md="2" sm="12">
                    <b-form-group label="Situação:" label-for="fun-ativo" >
                        <b-form-checkbox  id="fun-ativo" size="sm"
                            v-model="funcionario.fun_ativo" 
                            :value="funcionario.fun_ativo = 'sim'" unchecked-value="nao">
                            Ativo
                        </b-form-checkbox>
                    </b-form-group>
                </b-col>
            </b-row>                
            <b-button variant="primary" v-if=" mode === 'save' " @click="save"> Salvar </b-button>
            <b-button class="ml-2"  @click="reset"> Cancelar </b-button>
        </b-form>
        <hr />
        <b-table striped hover :items="funcionarios" :fields="fields">
           <template>
                <b-button variant="warning" @click="editFuncionario(data)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="funcionario = data.item" 
                    v-b-modal.modal-func class="ml-2"><i class="fa fa-trash"></i>
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
               
            <b-button class="mt-3" variant="primary" @click="remove">Confirmar</b-button>
            <b-button class="mt-3 ml-5" @click="hideModal" >Cancelar</b-button>
        </b-modal>
   </div>
</template>

<script>

import { baseApiUrl, showError } from '@/global'

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
            {key:'actions', label:'Ações'}
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

        reset(){
            this.mode = 'save' ,
            this.funcionario = {},
            this.loadFuncionarios()
        },

        editFuncionario(id, mode='save' ){
                        
            this.mode = mode
            const url = `${baseApiUrl}/funcionario/${id}`
            // eslint-disable-next-line
            //console.log(url)
            this.axios.get(url)
                .then(res =>{
                    this.funcionario = res.data
                    this.loadCidades()
                })  

        },

        save(){
            // eslint-disable-next-line
           // console.log(this.funcionario)
            this.funcionario.fun_senha = "apple"
            const method = this.funcionario.fun_codigo ? 'put':'post'
            const id = this.funcionario.fun_codigo ? `${this.funcionario.fun_codigo}` :''
            const url = `${baseApiUrl}/funcionario/${id}`
            this.axios[method](url, this.funcionario)
                .then(() => {                    
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
       
        remove(){
            const id = this.funcionario.fun_id
            this.axios.delete(`${baseApiUrl}/funcionario/${id}`)
                .then(()=>{
                    this.hideModal()
                    this.reset()
                    this.$toasted.global.defaultSuccess()
                })
                .catch(showError)
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
        this.loadEstados()
    }

}

</script>

<style>

</style>

