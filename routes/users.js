var express = require('express');
var router = express.Router();
var Locate = require('./LocateServer');
var StorePosMgr = require('./StorePosMgr')
/* get users listing. */

router.get('/', function(req, res, next) {

    res.send('respond with a resource');
});

var locating = '/locating';

var locate = new Locate();

var posMgr = new StorePosMgr()

router.post(locating, function (req, res, next)  {

    var phoneUUID = req.body.phoneUUID;

    var regionId = req.body.regionId;

    var seriesNumber = req.body.seriesNumber;

    var json = locate.getNextPos(regionId, phoneUUID);

    json.data.seriesNumber = seriesNumber;

    res.send(json);
});

var positionUploading = '/uploadpos'

router.post(positionUploading, function (req, res, next) {

    var regionId = req.body.regionId

    var pos = req.body.position

    var regionName = req.body.regionName

    posMgr.storePosToDB(regionId, regionName, pos)

    res.send({"code":"success"})

    locate.removeLocator(regionId)
})


module.exports = router;
