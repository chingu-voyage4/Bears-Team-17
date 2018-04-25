import casual from 'casual';
import { User } from '../models'

const NumberofUsers = 1;
export default async() => {
  try{
    await User.remove();
    await Array.from({ length: NumberofUsers }).forEach(
      async()=> await User.create({
        username:'joselee',
        password:'sojelee',
        firstName:'Joseph',
        lastName:'Myalla',
        email:'chanangae@gmail.com'
      })
    )
  }catch(error){
    throw error;
  }
}
