const express = require('express');
// const externalModule = require('./logger')
const helper=require('../util/helper')
const formatter=require('../validator/formator')
const logger = require('../Welcome/text')
const router = express.Router();
const _=require("lodash")

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // externalModule.log()
    // res.send('My first ever api!')
    logger.xyz();
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    formatter.trim()
    formatter.changeToLowerCase()
    formatter.changeToLowerCase()



});

// router.get('/test-me1', function (req, res) {
//     res.send('My second ever api!')
// });
router.get("/helo" , function (req,res) {
    let arry=["jan","feb","mar","april","may","jun","jul","aug","sept","oct","nov","decem"]
    let subArry= _.chunk(arry, 3)
    res.send(subArry)
}) 

module.exports = router;
// adding this comment for no reasons