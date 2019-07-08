import React from 'react'
import {Link} from 'react-router-dom'
 const Home =({props,handleDelete,handleLogin,auth,students})=>{
     console.log(students)
        return(
            (auth)?(
                students.map((stu,id)=>
                    <div className='container card'key={id}>
                        <div className="card-body">
                            <p className="card-title"><b>NAME: {stu.name}</b></p>
                            <p className="card-text">DOB: {stu.dob}</p>
                            <p className="card-text">Age: {stu.age}</p>
                            <p className="card-text">Degree: {stu.degree}</p>
                            <p className="card-text">address: {stu.address}</p>
                            <p className="card-text">status: {stu.status}</p>
                            <button onClick={(e)=>{
                                e.preventDefault()
                                handleDelete(id)
                            }}>Delete</button>
                        </div>
                    </div>
                    )
            ):(
        <div className='container'>
        <form onSubmit={(e)=>{
            e.preventDefault();
            handleLogin(e.target.uid.value,e.target.password.value)
            }}>
            <div className="from-group">
            UserName:
            <input type="text" className='form-control' id="uid"/><br/>
            Password:
            <input type="password" className='form-control' id="password"/><br/>
            <input type="submit" className='btn btn-primary' value='Login'/>
            <button className='btn btn-default'>
                <Link to='/stu'>Student Form</Link>
            </button>
            </div>
        </form>
        </div>
        )
        )
}
export default Home