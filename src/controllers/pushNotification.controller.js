const oneSignalService = require('../services/onesignal.service')
const pushNotificationCtrl = {}
const idLog = 'pushNotificationController'

pushNotificationCtrl.sendPushByUserId = async (req, res) => {
    try {
        const { toId, message } = req.body
        console.log(req.body)
        const title = 'Mensaje recibido'
        await oneSignalService.sendPushByUser(toId, title, message)
        res.send({message: 'ok'})
    } catch (e) {
        console.log('ERROR:' ,e)
        res.status(500).send({message: e})
    }
}

module.exports = pushNotificationCtrl