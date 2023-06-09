import React, { Component } from 'react'

export default class Login extends Component {
        state={
            name:"",
            subject:""
        }
        
         handleChange=(e)=>{
           this.setState({
            [e.target.name]:e.target.value
           })
         }
         send=()=>{
            axios.post("https://backendapi-5rbb.onrender.com/users",{username:this.state.email,password:this.state.password})
            .then((res)=>{
                console.log(res)
            })
         }
         render() {
         return (
        <div>Login</div>
    )
  }
}
