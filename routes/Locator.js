/**
 * Created by yan on 09/12/2016.
 */

var Map = require('./Map');

var PositionStoreMgr = require('./PositionStoreMgr');

function Locator(regionId) {

    this.positions = null;

    this.indexesOfPhone = new Map();

    var positionStoreMgr = new positionStoreMgr();
    
    positionStoreMgr.getPosByRegion(regionId, function (result) {

        this.positions = result[0].positions;
    });
}

Locator.prototype.getPos = function (phoneUUID) {

    if (this.positions.length == 0) {

        return null;
    }

    var posIndex = 0;

    if (this.indexesOfPhone.containsKey(phoneUUID)) {

        posIndex = this.indexesOfPhone.get(phoneUUID);
    }

    ++posIndex;

    posIndex = posIndex % this.positions.length;

    this.indexesOfPhone.put(phoneUUID, posIndex);

    return this.positions[posIndex];
}

module.exports = Locator;