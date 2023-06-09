import React, { Component } from 'react'

export default class Products extends Component {
  state={
    products:[]
  }
  componentDidMount(){
    fetch("https://backend-bbcw.onrender.com/products")
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      this.setState({
        products:res
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Products</h1>
        {
          
        }
      </div>
    )
  }
}

