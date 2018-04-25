import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MyButton from './MyButton'
import { withRouter } from 'react-router-dom';
import { AUTH_TOKEN } from '../../config/constants'

class Navigation extends Component {

render(){
const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <ul className="nav">

      <li>
        <Link to='/' >
          Zoezi Book
        </Link>
      </li>

      {authToken && (
      <li>
           <Link to='healthrecords' >
             Fitness Records
           </Link>
      </li>
      )}

      {!authToken ||(
      <li>

        <MyButton buttonStyle='linkButtonLogout' type='submit' onClick=
          {() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)
              }} label='LOGOUT'/>

      </li>
    )}
  </ul>
    )
 }
}


export default withRouter(Navigation);
