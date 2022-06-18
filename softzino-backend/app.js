
const express = require('express');

const app=express();
// build in middleware
require('./middlewares')(app);

// all routers

require('./middlewares/routers')(app)


module.exports=app;