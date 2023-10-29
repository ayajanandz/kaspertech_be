'use strict';
//make it a common method - getDataFromDb
const {connectDB} = require('./connect.js');

const getData = async (req) => {
    console.log(req.query);
       
    let mongoDB = await connectDB();
    let collection = mongoDB.collection("devices");
    let data = await collection.find({}).toArray();
    console.log(data);
    return data;
}


module.exports = {
    getData
};