const UserMutations = `
  registerUser(password:String,firstName:String,middleName:String,lastName:String,email:String):User
  login(email:String,password:String):User
`
export default UserMutations;
