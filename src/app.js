'use strict';
const cors = require("cors");
const express = require("express");
const { login } = require("./admin_login");
const { register }= require("./user_register")
const { getData } = require("./registered_devices");
const mongoose = require("mongoose");
const { deviceregister } = require("./newdevice");
const { updatedevice } = require("./updateDevice");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB using MongooseJS");
});
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/admin_login", async(req, res) => {
  await login(req, res);
});

app.post("/user_register", async(req,res) => {
  console.log(res.data);
        await register(req, res);
})

app.get("/devices", async (req, res) => {
  let responseDevices = await getData(req);
  res.send(responseDevices);
});

app.post("/deviceregister", async(req, res) => {
  console.log(res);
        await deviceregister(req,res)
})

app.post("/updatedevice", async(req, res) => {
  console.log(res);
        await updatedevice(req,res)
})

app.listen(port, () => {
  console.log(`Server serving on port -> ${port}!`);
});
