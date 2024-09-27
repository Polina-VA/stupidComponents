const {Points} = require('../../db/models')

class PointService {
    static getUserPoints = async (userId) => {
        const userPoints = await Points.findOne({where: {userId}})
        return userPoints? userPoints : null
    }

    static crateUserPoints = async (userId) => {
        const userPoints = await Points.create({userId, points: 0})
        return userPoints? userPoints: null
    }

    static updateUserPoints = async (userId, points ) => {
        let userPoints = await Points.findOne({where: {userId}})
        if (userPoints) {
           return await userPoints.update({points})
        } else {
            return null
        }
    }
  
}

module.exports = PointService