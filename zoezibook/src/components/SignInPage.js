import React from 'react'
import {TextInput, MyButton } from './commonComp'
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { saveUserData } from '../utils/tokens';

class SignInPage extends React.Component {

  constructor(){
    super()
    this.state = {
      login:false,
      email:'',
      password:'',
    };
  }
  render () {
    return (
      <div className="wrapper">

            <div className='signTitle'>
              Sign in to your account
            </div>
            <div className="SignCall">
            Your Sign in account is the gateway to create and organise your fitness data, keep your account details secret
            </div>
            <div className="emailInputContainer">
                <TextInput inputStyle='emailInputStyle' type="text" name="email" onChange={this.emailChange} placeholder="Email Address" />
            </div>
                <TextInput inputStyle='passwordLogin' type="password" name="password" onChange={this.passwordChange} placeholder="Password" />
                <div className="passwordInputContainer">
            </div>
            <div className='buttonContainerStyle'>
               <MyButton buttonStyle='buttonStyle buttonStyleh' type="submit" onClick={this.emailPasswordLogin} label="SIGN IN"/>
            </div>
        </div>
    )
  }

  emailPasswordLogin = () => {
          const { password,email } = this.state
          this.props.login({password,email})
            .then((response) => {
             const token = response.data.login.jwt;
             saveUserData(token);
             return  this.props.history.replace('/healthrecords')
          }).catch((err) => {
           console.log(err.message);
         })

  }
  passwordChange = (event) => {
    this.setState({password:event.target.value})
  }
  emailChange = (event) => {
    this.setState({email:event.target.value})
  }
}

const loginMutation = gql`
  mutation login($password:String!,$email:String!) {
    login(password:$password,email:$email){
      jwt
    }
  }
`
export default graphql(loginMutation,{
  props:({onwProps,mutate})=>({
    login:({password,email})=>
    mutate({variables:{password,email},})
  })
})(withRouter(SignInPage))
