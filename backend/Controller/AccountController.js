import AccountModel from "../Models/AccountModel.js";

import bcrypt from "bcrypt";
const PostSignin = async (req, res) => {
  const {username, password} = req.body;
  try{
    const account = await AccountModel.findOne({username:username}).exec(); /*Find the matching user name*/ 
    if(account){
      console.log(password);
      console.log(account.password);
      const match = await bcrypt.compare(password, account.password);
      if(match){
        console.log("right password: " + account.username);
        res.json({
          success: true,
          username: account.username,
          userID: account._id,
        });
      }
    }
    else{
      console.log("Wrong password or username");
      res.json({ success: false, message: "Wrong email or password" });
    } 
  } 
  catch (error){
    console.log("Error finding user: ", error);
    return res
    .status(500)
    .json({ success: false, message: "Internal Server Error" }); 
  }
};




const AccountController = {
  PostSignin: PostSignin,
  
};
export default AccountController;
