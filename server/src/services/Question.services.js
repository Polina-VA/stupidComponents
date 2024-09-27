const {Theme, Question } = require("../../db/models")


class QuestionsServices {
    static getAllThemesAndQuestions = async () => {
        const themesAndQuestions = await Theme.findAll({include: {model: Question}})
        return themesAndQuestions ? themesAndQuestions : null 
    }

    static getOneQuestion = async (id) => {
        const question = await Question.findOne({where: {id}, include: {model: Theme}})
        return question ? question : null
    }
}

module.exports = QuestionsServices