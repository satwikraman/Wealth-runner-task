const roorReducer=(state, action)=>{
    switch(action.type){
        case 'ADD':{
            state.students.push(action.data)
            return{
                ...state,
            }
        }
        case 'DELETE':{
            let students=state.students.map((stu,index)=>{
                if(index===action.id){
                    stu.status='inactive'
                }
                return stu
            })
            return{
                ...state,
                students
            }
        }
        case 'LOGIN':{
            console.log(state.login.auth)
            return{
                ...state,
                login:{
                    ...[state.login],
                    auth:true
                }
            }
            
        }
        default:{return state;}
    }
    
}
export default roorReducer