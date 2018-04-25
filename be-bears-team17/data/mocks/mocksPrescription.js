import casual from 'casual';
import { Prescription } from '../models'


const NumberofPrescriptions = 5;
const Specialisation = ["Pedriatic Doctor","Cardiologist","Ophalmologist","Gaenacologist","Dentist Specialist"];
const FirstName      = ["Joseph","Grace","Mwakiyao","Magdalena","Gasimike","Glory","Geno","Sylvia","Joses","Samweli"];
const LastName       = ["Mwamyalla","Lugembe","Ngakasi","Massawe","Mushi","Tatenanee","Mjumbe","Masele","Mputa","Salaa"];
const Dates =["19-Mar-2018","05-Jan-2018","23-Jan-2018","19-Feb-2018","09-Feb-2018"];

export default async() => {
  try{
    await Prescription.remove();
    await Array.from({ length: NumberofPrescriptions }).forEach(
      async()=> await Prescription.create({
       date:Dates[Math.floor((Math.random()*4) +1)],
       doctor:FirstName[Math.floor((Math.random()*9) +1)]+' '+LastName[Math.floor((Math.random()*9) +1)],
       patient:FirstName[Math.floor((Math.random()*9) +1)]+' '+LastName[Math.floor((Math.random()*9) +1)],
       specialisation:Specialisation[Math.floor((Math.random()*4) +1)]
      })
    )
  }catch(error){
    throw error;
  }
}
