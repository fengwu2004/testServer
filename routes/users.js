var express = require('express');
var router = express.Router();
var fakelocating = require('./locate');

/* get users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

var locating = '/locating';

var locate = new fakelocating();

locate.init();

router.post(locating, function (req, res, next)  {

    console.log(req.body.regionId);

    var json = locate.wrapNextPos();

    res.send(json);
});

router.get(locating, function (req, res, next)  {

    var json = locate.wrapNextPos();

    res.send(json);
});


module.exports = router;
