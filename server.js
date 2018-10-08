const path = require('path');

const withDB = require('./lib/with-db');

const express = require('express');
const port = 3000;

const studentsJSON = path.join(__dirname,  'data', 'questions.json');

const app = express();

app.get('/', 	withDB(studentsJSON, async function(db, req,res,next){

		const data = await db.get('questions').value();
    res.json(data)
	}));




app.listen(port, ()=> console.log(`App is running on port: ${port}`));
