import React, { Component } from 'react'


class Mya extends Component{

render(){
  const { lnkhref, linkText, iconClass, linkStyle } = this.props
    return (
      <div>
       <a className={linkStyle} href={lnkhref} ><i className={iconClass} /> {linkText}</a>
      </div>
    )
  }
}

export default Mya
