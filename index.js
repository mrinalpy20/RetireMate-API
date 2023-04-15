const express = require('express');
const mongoose = require('mongoose');
const {router} = require('./router/database_routes');
const app =express();
const PORT = process.env.PORT||3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

//connecting to mongoose database
const dbURI = "mongodb+srv://hrishi:test123@retiremate-cluster.k7r5bfy.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("db connected"))
.catch((err)=>console.log(err));
app.listen(PORT,()=>{
    console.log("server started");
})
app.get('/',(req,res)=>{
    res.send('API is running!');
});
