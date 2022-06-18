const morgan = require('morgan');
const cors = require('cors');
const express = require('express');

module.exports=app=>{
    //.........build in middleware.........

app.use(express.json());
app.use(cors());
if(process.env.NODE_ENV==="development"){
    app.use(morgan('dev'))
}
}