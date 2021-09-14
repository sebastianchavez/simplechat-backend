const { Router } = require('express')
const router = Router()
const { pushNotificationCtrl } = require('../controllers')

router.post('/user', pushNotificationCtrl.sendPushByUserId)


console.log('== Endpoints PushNotifications ==')
console.log('POST: /api/push/user')

module.exports = router