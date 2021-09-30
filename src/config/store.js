
import { createStore } from 'vuex'

/* Vue.use(Vuex)

   export default new Vuex.Store({
      state: {
         isMenuVisible: true
      }
   }) 
*/
// Create a new store instance.
const store = createStore({
   state () {
     return {
         isMenuVisible: true,
         user:{
            name: 'Usuario Moc',
            email: 'luizmoura2@hotmail.com'
         }
     }
   },
   mutations: {
     toggleMenu(state, isVisible) {
       if(isVisible === undefined){
          state.isMenuVisible = !state.isMenuVisible
       }else{
         state.isMenuVisible = isVisible
       }

     }
   }
 })

 export { store };