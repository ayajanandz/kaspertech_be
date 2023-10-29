'use strict';
const mongoose = require("mongoose");

const { connectDB } = require("./connect");



const deviceregister = async (req, res) => {
  const { name, fan, light, mis } = req.body;
  console.log(name , fan, light, mis);
  
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("devices");
  let state = {
    fan:fan,
    light:light,
    mis:mis
  }
 
    try{
    
    collection.insertOne({
      device_id:name,
      alloted_to_user:"",
      state:state
     
    })
    console.log("inserted new user details")
  } catch(err){
    console.log(err);
  }
    
  }



module.exports = {
    deviceregister,
};