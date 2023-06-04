import React, { Component } from 'react'


export default class Statedemo3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         flag:true,
      }
    }
    toggleFlag = () =>{
        this.setState({flag:!this.state.flag});
    }
  render() {
    return (
        <>
        {this.state.flag ? <h2>this is paragraph</h2>:null}
      <button onClick ={this.toggleFlag}>
        {this.state.flag ? 'HIDE':'SHOW'}
      </button>
      </>
      )
  }
}
