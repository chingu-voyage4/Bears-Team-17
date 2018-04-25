import React, { Component } from 'react'


class TextInput extends Component{

render(){
   const { type, name, placeholder, inputStyle, onChange } = this.props;
    return (
      <div>
      <input className={inputStyle} type={type} name={name} placeholder={placeholder} onChange={onChange}/>
      </div>
    )
  }
}

export default TextInput
