import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props){
    super(props);
    this.state = {nama : "",alamat:"",telepon:""}
  }
  componentDidUpdate(){
    console.log(this.state)
  }  
  render() {
    return (
      <div>
        { <input
        placeholder='NAMA'
        value={this.state.name}
        onChange={(k)=>this.setState({nama:k.target.value})}
        />}
        { <input
        placeholder='AlAMAT'
        value={this.state.alamat}
        onChange={(e)=>this.setState({alamat:e.target.value})}
        />}
        {<input
        placeholder='TELEPON'
        value={this.state.telepon}
        onChange={(e)=>this.setState({telepon:e.target.value})}
        /> }
      </div>
    )
  }
}
