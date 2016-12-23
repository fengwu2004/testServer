var express = require('express');
var router = express.Router();
var Locate = require('./LocateServer');
/* get users listing. */

router.get('/', function(req, res, next) {

    res.send('respond with a resource');
});

var locating = '/locating';

var locate = new Locate();

router.post(locating, function (req, res, next)  {

    var phoneUUID = req.body.phoneUUID;

    var regionId = req.body.regionId;

    var seriesNumber = req.body.seriesNumber;

    var json = locate.getNextPos(regionId, phoneUUID);

    json.data.seriesNumber = seriesNumber;

    res.send(json);
});

var positionUploading = '/uploadpos'

route.post(positionUploading, function (req, res, next) {

    var regionId = req.body.regionId

    var pos = req.body.position

    var regionName = req.body.regionName

    update
})


module.exports = router;
