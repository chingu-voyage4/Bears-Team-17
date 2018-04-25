import React from 'react'


const HealthRecord = ({date,weight,runningdistance,runningtime}) => {

    return (

        <div className="healthrecordWrapper">
           <div className="healthRecordCard">
           <div className="HealthRecordTable"> <label> Date: </label> <span> {date} </span></div>
           <div className="HealthRecordTable"> <label> Weight(Kg): </label> <span>{weight} </span></div>
           <div className="HealthRecordTable"> <label> Running Distance(Km):</label> <span> {runningdistance} </span> </div>
           <div className="HealthRecordTable"> <label> Running Time(Hours): </label> <span> {runningtime} </span> </div>
         </div>
       </div>

       )

  }


export default HealthRecord;
