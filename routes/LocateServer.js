/**
 * Created by yan on 07/12/2016.
 */

var Locator = require('./Locator');

var Map = require('./Map');

function LocateServer() {

    this.locators = new Map();
}

function getLocator (regionId) {

    if  (!this.locators.containsKey(regionId)){

        this.locators.put(regionId, createLocator(regionId));
    }

    var locator = this.locators.get(regionId);

    return locator;
}

function createLocator(regionId) {

    var locator = new Locator(regionId);

    return locator;
}

LocateServer.prototype.getNextPos = function (regionId, phoneUUID) {

    var locator = getLocator(regionId);

    var pos = locator.getPos(phoneUUID);

    return pos;
}

module.exports = LocateServer;
