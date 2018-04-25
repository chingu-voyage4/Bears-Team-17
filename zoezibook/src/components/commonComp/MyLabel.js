import React, { Component } from 'react'


class MyLabel extends Component{
  render(){
      const { labelText, labellink, labelStyle } = this.props;

      let labelDisplay = labelText;

      if(labellink){

        labelDisplay = <a href={labellink}>Terms of Service</a>;

      }
    return (
      <div className={labelStyle}>
          {labelDisplay}
      </div>
    )
  }
}

export default MyLabel
