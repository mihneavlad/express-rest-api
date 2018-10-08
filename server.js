const path = require('path');

const withDB = require('./lib/with-db');
const routerAPI = require("./routes/api")
const express = require('express');
const port = 3000;


const app = express();

app.use("/api",routerAPI)




app.listen(port, ()=> console.log(`App is running on port: ${port}`));
