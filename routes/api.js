const path = require('path');
const express = require('express');
const withDB = require('../lib/with-db');
const questionsJSON = path.join(__dirname, '..', 'data', 'questions.json');

const router = express.Router();

router.use(express.urlencoded());
router.use(express.json());

const getQuestions = async function(db, req,res,next){
		const data = await db.get('questions').value();
    res.json(data)
}

const updateQuestion = async function(db, req, res, next){
  console.log(req.body)
  const data = await db.get("questions").push(req.body)

  res.json(data)
}



router.get('/question', withDB(questionsJSON, getQuestions));
router.post('/question', withDB(questionsJSON, updateQuestion));

module.exports = router
