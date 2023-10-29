'use strict';
const mongoose = require("mongoose");

const { connectDB } = require("./connect");



const register = async (req, res) => {
  const { name, email, phoneNumber, numberOfRooms } = req.body;
  console.log(name , email, phoneNumber, numberOfRooms);
  const password = phoneNumber;
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("users");
  let dbResponse = await collection.findOne({ Email: email });

  if(dbResponse){
    res.send({message: "User already exists "})
  }
  else {
    try{
    
    collection.insertOne({
      Name:name,
      Email:email,
      Phone:phoneNumber,
      Rooms: numberOfRooms,
      Password:password
    })
    console.log("inserted new user details")
  } catch(err){
    console.log(err);
  }
    
  }

}

module.exports = {
    register,
};