/**
 * Created by yan on 07/12/2016.
 */

var Locator = require('./Locator');

function LocateServer() {

    this.locators = new Map();
}

LocateServer.prototype.getLocator = function (regionId) {

    if  (!this.locators.has(regionId)){

        this.locators.set(regionId, createLocator(regionId));
    }

    var locator = this.locators.get(regionId);

    return locator;
}

function createLocator(regionId) {

    var locator = new Locator(regionId);

    return locator;
}

LocateServer.prototype.getNextPos = function (regionId, phoneUUID) {

    var locator = this.getLocator(regionId);

    var pos = locator.getPos(phoneUUID);

    var data = new Object();

    data.position = new Object();

    data.position.x = pos.x;

    data.position.y = pos.y;

    //
    data.floors = new Array();

    var floor = new Object();

    floor.id = pos.floorId;

    floor.name = 'F2';

    data.floors.push(floor);

    var json = new Object();

    json.code = 'success';

    json.data = data;

    return json;
}

module.exports = LocateServer;
