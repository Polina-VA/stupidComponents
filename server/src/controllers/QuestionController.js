const QuestionsServices = require('../services/Question.services')

 async function getAllThemesAndQuestions (req, res) {
    try {
        const questions = await QuestionsServices.getAllThemesAndQuestions()
        res.status(200).json(questions)
    } catch ({message}) {
        res.status(500).json({ error: message });
    }
}

module.exports = {getAllThemesAndQuestions}