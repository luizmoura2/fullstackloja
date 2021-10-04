//import Vue from 'vue'

export const userKey = '__knowledge_user'
export const baseApiUrl = 'http://localhost:8000/api'

 export function showError(e) {
     if( e && e.response && e.response.data ) {
         this.$toasted.global.defaultError({ msg : e.response.data })
    } else if( typeof e === 'string' ) {
         this.$toasted.global.defaultError({ msg : e})
    } else {
         this.$toasted.global.defaultError()
    }
}

export default { baseApiUrl,  userKey }