import mongoose, { Schema } from 'mongoose';
import constants from '../config/constants';

const HealthRecordSchema = new Schema({
  date:String,
  weight:String,
  patientId:String,
  runningdistance:String,
  runningtime:String,
});

export default mongoose.model('HealthRecord', HealthRecordSchema);
