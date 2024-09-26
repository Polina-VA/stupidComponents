const { getAllThemesAndQuestions } = require('../controllers/QuestionController')
const questionRouter = require('express').Router()


questionRouter.get('/', getAllThemesAndQuestions)

module.exports = questionRouter