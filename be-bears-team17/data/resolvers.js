import HealthRecord from './models/HealthRecord';
import  User from './models/User';
import { requireAuth, getUserId } from './utils/auth';
const resolvers = {
  Query:{
    allhealthrecords:async(root,args,context)=>{
     const userId = await getUserId(context);
     return HealthRecord.find({patientId:userId});
  },
  getUser:(root,args)=>{
    return User.findOne();
  },
  getAllUsers:()=>{
    return User.find({});
  },
  getCurrentUser: async(_, args, { user })=>{
    try {
    const currentUser = await requireAuth(user);

    return currentUser;
  } catch (error) {
    throw error;
  }
  }
},
Mutation:{
  addHealthRecord(_,{id,date,weight,runningdistance,runningtime},context){
    const patientId = getUserId(context);
    return HealthRecord.create({
      date,
      weight,
      patientId,
      runningdistance,
      runningtime
    })
  },
  registerUser: async(root, args,context) => {
    const newUser = {
      username:args.email,
      password:args.password,
      firstName:args.firstName,
      lastName:args.lastName,
      middleName:args.middleName,
      email:args.email
    }
    const user = await User.create(newUser);
    return user;
  },
  login:async (_, { email, password },context) => {
    try {

      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('User does not exist!');
      }

      if (!user.authenticateUser(password)) {
        throw new Error('Password do not match!');
      }
      user.jwt = user.createToken();
      return user;

    } catch (error) {
      throw error;
    }

  },
},

};

export default resolvers;
