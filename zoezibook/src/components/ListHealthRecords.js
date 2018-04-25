import React from 'react'
import HealthRecord from '../components/HealthRecord'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { Navigation } from './commonComp'

class ListHealthRecords extends React.Component {

render () {

    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    return (
      <div className='wrapper'>
        <Navigation />

  <div style={{width:'100%',height:'100%',backgroundSize:'cover',backgroundImage:`url(${require('./headerImg3.jpg')})`,display:'flex',
        flexDirection:'column',justifyContent:'center',alignItems:'center',color:'white',fontSize:'28px'

      }}>

      <div className="submitRequestInputContainer">
      <div style={{ margin:`10px` }}>
          <Link to='/createhealthrecord' className='requestPrescriptionLink'>
            Create a Fitness Record
          </Link>
      </div>
      </div>
      <div className="healthrecordContainer">

          {this.props.data.allhealthrecords.map((healthrecord,index) =>
            <HealthRecord key={index}
               date={healthrecord.date}
               weight={healthrecord.weight}
               runningdistance={healthrecord.runningdistance}
               runningtime={healthrecord.runningtime}
             />
          )}



        </div>
      </div>
  </div>
    )
  }
}

const HealthRecordQuery= gql`query{allhealthrecords{
  date, weight,runningdistance ,runningtime
}}`

export default graphql(HealthRecordQuery)(ListHealthRecords)
