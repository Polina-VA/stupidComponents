const QuestionsServices = require('../services/Question.services')

 async function getAllThemesAndQuestions (req, res) {
    try {
        const questions = await QuestionsServices.getAllThemesAndQuestions()
        res.status(200).json(questions)
    } catch ({message}) {
        res.status(500).json({ error: message });
    }
}

 async function getOneQuestions (req, res) {
    try {
        const question = await QuestionsServices.getOneQuestion()
        res.status(200).json(question)
    } catch ({message}) {
        res.status(500).json({ error: message });
    }
}

module.exports = {getAllThemesAndQuestions}