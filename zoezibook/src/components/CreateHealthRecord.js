import React from 'react'
import { MyButton,Navigation,TextInput } from './commonComp'
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CreateHealthRecord extends React.Component {
  constructor(){
    super()
    this.state = {
        weight:'',
        height:'',
        runningdistance:'',
        runningtime:''
    };
  }

render () {

    return (
      <div className='wrapper'>
        <Navigation />
        <hr/>
        <div className='signTitle'>
          Health Record
        </div>
        <div className='congtrolsAndMapWrapper'>

              <div className="textInputContainer">
                  <TextInput inputStyle='textInputStyle' type="text" name="weight" onChange={this.weightChange} placeholder="My Weight in Kgs" />
              </div>
              <div className="textInputContainer">
                  <TextInput inputStyle='textInputStyle' type="text" name="runningtime" onChange={this.runningtimeChange} placeholder="Running Time in Hours" />
              </div>
              <div className="textInputContainer">
                  <TextInput inputStyle='textInputStyle' type="text" name="runningdistance" onChange={this.runningdistanceChange} placeholder="Running Distance in Kms" />
              </div>
         </div>
         <div className='submitRequestButtonContainer'>
                     <MyButton buttonStyle='buttonStyle buttonStyleh' type="submit" onClick={this.createRecord} label="CREATE"/>
         </div>
      </div>
    )
  }

  createRecord = () => {
   let date = new Date();
   // let patient='Joseph Myalla'
       date =date.getFullYear()+'-'+(date.getMonth() + 1)+'-'+date.getDate()

   const { weight,runningdistance,runningtime } = this.state
   this.props.addHealthRecord({date,weight,runningdistance,runningtime})
     .then(() => {
     return  this.props.history.replace('/healthrecords')

   })
}

       weightChange = (event) => {
        this.setState({weight:event.target.value})
      }
       runningdistanceChange = (event) => {
         this.setState({runningdistance:event.target.value})
       }
       runningtimeChange = (event) => {
         this.setState({runningtime:event.target.value})
        }
}

const HealthRecordQuery= gql`query{allhealthrecords{
  date,weight,runningdistance,runningtime,patientId
}}`

const addMutation = gql`
  mutation addHealthRecord($date: String!, $weight: String!,$runningdistance:String!,$runningtime:String!) {
    addHealthRecord(date:$date,weight:$weight,runningdistance:$runningdistance,runningtime:$runningtime){
      id
      date
      weight
      runningdistance
      runningtime
    }
  }
`

export default graphql(addMutation,{
  props:({onwProps,mutate})=>({
    addHealthRecord:({date,weight,runningdistance,runningtime})=>
    mutate({variables:{date,weight,runningdistance,runningtime},refetchQueries: [ { query: HealthRecordQuery }],})
  })
})(withRouter(CreateHealthRecord))
