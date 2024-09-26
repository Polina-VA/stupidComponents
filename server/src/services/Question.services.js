const {Theme, Question } = require("../../db/models")


class QuestionsServices {
    static getAllThemesAndQuestions = async () => {
        const themesAndQuestions = await Theme.findAll({include: {model: Question}})
        return themesAndQuestions ? themesAndQuestions : null 
    }
}

module.exports = QuestionsServices