import React,{Component} from 'react'
import {connect} from 'react-redux'
class Student extends Component{
    state={
        status:'active'
    }
    handleSubmit=(e)=>{
        e.preventDefault()

        this.props.addPost(this.state)
        this.props.history.push('/')
    }
    handleChange=(e)=>{
        if(e.target.id==='address'){
            let dob =new Date(this.state.dob)
            let currDate=new Date();
            console.log(currDate.getFullYear()-dob.getFullYear())
            this.setState({
                age:currDate.getFullYear()-dob.getFullYear()
            })
        }
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render(){
        return(
            <div className='container'>
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >Name:</label>
                    <input type="text" className='form-control' onChange={this.handleChange} id="name" value={this.state.name}/><br/>
                    Date of Birth: <input type="date" id='dob' className='form-control' onChange={this.handleChange} value={this.state.dob}/><br/>
                    Highest Education: 
                    <select id="degree" className='form-control'  onChange={this.handleChange} value={this.state.degree}>
                        <option value="PG">PG</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Intermediate">Intermediate</option>
                    </select><br/>
                    Address:<br/>
                    <textarea className='form-control'  cols="30" rows="5" id='address' onChange={this.handleChange} value={this.state.address} placeholder='Please enter you address'></textarea>
                    <input type="submit" className='btn btn-primary' value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}
 
const mapDispathToProps=(dispatch)=>{
   return{ addPost:(data)=>dispatch({type:'ADD',data:data})
    }
}
export default connect(null,mapDispathToProps)(Student);