import React, { Component } from 'react'


class MyButton extends Component{

render(){
  const { label, type, onClick, buttonStyle } = this.props
    return (

       <input className={buttonStyle} type={type}  onClick={onClick} value={label}/>

    )
  }
}

export default MyButton
