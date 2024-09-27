const { getPoints, createPoints, updatePoints } = require('../controllers/PointController')
const verifyAccessToken = require('../middleware/verifyAccessToken')

const pointsRouter = require('express').Router()


pointsRouter.get('/', verifyAccessToken, getPoints())

pointsRouter.post('/', verifyAccessToken, createPoints())
 
pointsRouter.put('/', verifyAccessToken, updatePoints())


module.exports = pointsRouter