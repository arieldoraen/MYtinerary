const express = require('express')

const router = express.Router()

router.route('/cities').get((req, res) => {
    res.send("get cities")
})
.post((req, res) => {
    res.send('post cities ')
})
router.route('/facturas/:id')
.delete((req, res) => {
    res.send('delete cities ')
})
.put((req, res) => {
    res.send('update cities ')
})
module.exports = router 