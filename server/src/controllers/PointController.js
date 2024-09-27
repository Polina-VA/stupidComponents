const PointService = require("../services/Points.services");

async function createPoints (req, res) {
    try {
        const {id : userId} = res.locals.user
        const userPoints = await PointService.createUserPoints(userId)
        res.status(200).json(userPoints)
    } catch ({message}) {
        res.status(500).json({ error: message });
    }
}

async function getPoints (req, res) {
    try {
        const {id : userId} = res.locals.user
        const userPoints = await PointService.getUserPoints(userId)
        res.status(200).json(userPoints)
    } catch ({message}) {
        res.status(500).json({ error: message });
    }
}

async function updatePoints (req, res) {
    try {
        const {id : userId} = res.locals.user
        const {points} = req.body 
        const userPoints = await PointService.updateUserPoints(userId, points)
        res.status(200).json(userPoints)
    } catch ({message}) {
        res.status(500).json({ error: message });
    }
}

module.exports = {createPoints, getPoints, updatePoints}