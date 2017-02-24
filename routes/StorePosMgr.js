/**
 * Created by yan on 23/12/2016.
 */

'use strict'

var mongodb = require('mongodb').MongoClient;

class StorePosMgr {

    constructor(){


    }

    storePosToDB(regionId, regionName, pos) {

        mongodb.connect('mongodb://192.168.0.109:27017/test', function (err, db) {

            if (err) {

                throw err
            }

            db.collection('regionPos').deleteOne({"regionId":regionId})

            db.collection('regionPos').insertOne({"regionId":regionId, "regionName":regionName, "position":pos})
        });
    }

    getPosByRegion(regionId, callBack) {

        mongodb.connect('mongodb://192.168.0.109:27017/test', function (err, db) {

            if (err) {

                throw  err;
            }

            db.collection('regionPos').find({"regionId":regionId}).toArray(function (err, result) {

                callBack(result);
            });
        });
    }
}

module.exports = StorePosMgr;