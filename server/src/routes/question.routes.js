const { getAllThemesAndQuestions } = require('../controllers/QuestionController')
const { getOneQuestion } = require('../services/Question.services')
const questionRouter = require('express').Router()


questionRouter.get('/', getAllThemesAndQuestions)
questionRouter.get('/:questionId', getOneQuestion)

module.exports = questionRouter