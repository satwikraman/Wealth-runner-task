import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
const State={
   students: [
    
    ],
    login:{
        uid:'raman.satwik@gmail.com',
        password:'satwikraman',
        auth:false
    }
}
export default createStore(rootReducer,State)