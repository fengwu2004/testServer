/**
 * Created by yan on 09/12/2016.
 */

var StorePosMgr = require('./StorePosMgr')

function Locator(regionId) {

    var indexesOfPhone = new Map();

    var positions = new Array();

    var posCount = 100;

    function initPos(result) {

        if (result.length == 0) {

            return;
        }

        positions = result[0].position;

        posCount = 20;
    }

    this.getPos = function (phoneUUID) {

        if (positions.length == 0) {

            return null;
        }

        var posIndex = 0;

        if (indexesOfPhone.has(phoneUUID)) {

            posIndex = indexesOfPhone.get(phoneUUID);
        }

        ++posIndex;

        posIndex = posIndex % positions.length;

        indexesOfPhone.set(phoneUUID, posIndex);

        return positions[posIndex];
    }

    var positionStoreMgr = new StorePosMgr();
    
    positionStoreMgr.getPosByRegion(regionId, initPos);

    console.log('hello');
}

module.exports = Locator;