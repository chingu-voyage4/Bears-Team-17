const HealthRecordQuery = `
  healthrecord(id:String,date:String,weight:String,patientId:String,runningdistance:String,runningtime:String):HealthRecord
  allhealthrecords: [HealthRecord]
`
export default HealthRecordQuery;
