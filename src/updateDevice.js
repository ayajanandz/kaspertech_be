'use strict';
const mongoose = require("mongoose");

const { connectDB } = require("./connect");



const updatedevice = async (req, res) => {
  const { deviceName, userName } = req.body;
  console.log(deviceName, userName);
  let mongoDB = await connectDB();
  let collection = mongoDB.collection("devices");

  let filterCondition = { device_id: deviceName };
  let updateDocument = {
    $set: { alloted_to_user: userName }
  };

  let dbResponse = await collection.updateOne(filterCondition, updateDocument);
  if (dbResponse.modifiedCount === 1) {
    // Document was updated successfully
    console.log(`Updated ${dbResponse.modifiedCount} document.`);
    res.status(200).json({ message: "Document updated successfully" });
  } else {
    // Document with the provided 'deviceName' was not found
    console.log("Document not found.");
    res.status(404).json({ message: "Document not found" });
  }



}

module.exports = {
    updatedevice,
};