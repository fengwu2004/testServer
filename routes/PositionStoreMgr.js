/**
 * Created by yan on 08/12/2016.
 */
var mongodb = require('mongodb').MongoClient;

function PositionStoreMgr () {

    console.log('数据库处理');
}

PositionStoreMgr.prototype.getPosByRegion = function (regionId, callBack) {

    mongodb.connect('mongodb://localhost:27017/test', function (err, db) {

        if (err) {

            throw  err;
        }

        db.collection('regionPos').find({"regionId":regionId}).toArray(function (err, result) {

            callBack(result);
        });
    });
}

module.exports = PositionStoreMgr;