const apiRouter = require("express").Router();

const errorRouter = require("./error.routes");
const authRouter = require('./auth.routes')
const tokensRouter = require('./tokens.routes');
const questionRouter = require("./question.routes");

apiRouter.use('/questions', questionRouter)
apiRouter.use('/auth', authRouter)
apiRouter.use('/tokens', tokensRouter)


apiRouter.use('*', errorRouter)

module.exports = apiRouter;