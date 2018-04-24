const UserQuery = `
  getUser(username:String,password:String,firstName:String,middleName:String,lastName:String):User
  getAllUsers(username:String,password:String,firstName:String,middleName:String,lastName:String):[User]
  getCurrentUser:User
`
export default UserQuery;
