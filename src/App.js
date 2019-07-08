import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Student from './components/Student'
import Home from './components/Home'
class App extends React.Component {
  
  handleLogin=(uid,password)=>{
    console.log(this.props.data)
    const login=this.props.data.login
    if((uid===login.uid)&&(password===login.password)){
      this.props.login();
    }else{
      alert('userName/password are incorrect')
    }
  }
  handleDelete=(id)=>{
    this.props.deletePost(id)
  }
  render(){
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route path='/stu'component={Student} />
      <Route exact path='/' render={
        (props)=><Home {...props} 
        handleDelete={this.handleDelete}
        handleLogin={this.handleLogin}
        auth={this.props.data.login.auth}
        students={this.props.data.students}
        />
        }/>
    </Switch>
    </BrowserRouter>
    </div>
  );
  }
}
const mapStateToProps=(state,ownProps)=>{
  return{
    data:state
  }
}
const mapDispatchToProps=(dispatch)=>{
return{
  addPost:(stu)=>dispatch({type:'ADD',stu:stu}),
  deletePost:(id)=>dispatch({type:'DELETE',id:id}),
  login:()=>dispatch({type:'LOGIN'})
  
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
