import React from 'react'
import {TextInput, MyButton } from './commonComp'
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { saveUserData } from '../utils/tokens';

class SignUpPage extends React.Component {

  constructor(){
    super()
    this.state = {
      firstName:'',
      midddleName:'',
      lastName:'',
      email:'',
      password:'',
      confirmpassword:'',
    };
  }

render () {

  const { password,confirmpassword } = this.state;
  const passwordEqual = password === confirmpassword;
  console.log(passwordEqual);
    return (
    <div className="wrapper">

       <div className='signTitle'>
            Create Your Account
       </div>
        <div className="SignCall">

          Your Sign in account is the gateway to create and organise your fitness data, keep your account details secret
        </div>


        <div>
            <TextInput inputStyle='namesInputStyle'  type="text" name="firstName" placeholder="First Name" onChange={this.firstNameChange} />
        </div>
        <div>
            <TextInput inputStyle='namesInputStyle' type="text" name="middleName" onChange={this.middleNameChange} placeholder="Middle Name" />
        </div>
        <div>
            <TextInput inputStyle='namesInputStyle' type="text" name="lastName" onChange={this.lastNameChange} placeholder="Last Name" />
        </div>
        <div className="emailInputContainer">
            <TextInput inputStyle='emailInputStyle' type="text" name="email" onChange={this.emailChange} placeholder="Email Address" />
        </div>
            <TextInput inputStyle='namesInputStyle' type="password" name="password" onChange={this.passwordChange} placeholder="Password" />
            <div className="passwordInput">
            <TextInput inputStyle='namesInputStyle' type="password" name="confirmpassword" onChange={this.passwordConfirmChange} placeholder="Confirm Password" />
        </div>
        <div className='buttonContainerStyle'>
           <MyButton buttonStyle='buttonStyle buttonStyleh' type="submit" disabled onClick={this.emailPasswordSingup} label="SIGN UP"/>
        </div>

    </div>
    )
  }
      emailPasswordSingup = () => {
            const { password,firstName,middleName,lastName,email } = this.state
            this.props.registerUser({password,firstName,middleName,lastName,email})
              .then((response) => {
                const token = response.data.login.jwt;
                saveUserData(token);
                return  this.props.history.replace('/healthrecords')
            }).catch((err) => {
             console.log(err.message);
           })
      }
      firstNameChange = (event) => {
        this.setState({firstName:event.target.value})
      }
      middleNameChange = (event) => {
        this.setState({middleName:event.target.value})
      }
      lastNameChange = (event) => {
        this.setState({lastName:event.target.value})
      }
      passwordChange = (event) => {
        this.setState({password:event.target.value})
      }
      passwordConfirmChange = (event) => {
        this.setState({confirmpassword:event.target.value})
      }
      emailChange = (event) => {
        this.setState({email:event.target.value})
      }
}


const regsistrationMutation = gql`
  mutation registerUser($password:String!,$firstName:String!,$middleName:String!,$lastName:String!,$email:String!) {
    registerUser(password:$password,firstName:$firstName,middleName:$middleName,lastName:$lastName,email:$email){
      jwt
    }
  }
`


//export default SignUpPage;

export default graphql(regsistrationMutation,{
  props:({onwProps,mutate})=>({
    registerUser:({password,firstName,middleName,lastName,email})=>
    mutate({variables:{password,firstName,middleName,lastName,email},})
  })
})(withRouter(SignUpPage))
