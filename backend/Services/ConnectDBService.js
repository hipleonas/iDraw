import mongoose from "mongoose";
const username = 'hiepquoc23022004';  // Your MongoDB Atlas username
const password = 'iRC1lYsZzFoWkdwf';      // Your MongoDB Atlas password
const clusterUrl = 'idrawcluster.d9umz.mongodb.net';  // Your MongoDB cluster URL
const database = 'sample_userdata';         // Your database name

const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/${database}?retryWrites=true&w=majority`;

async function connectDatabase() {
  try{
    await mongoose.connect(uri);
    console.log("Connect Success to MongoDB");
  } catch(error){
    console.log('connect database fail',error);
  }
}
export default connectDatabase;


