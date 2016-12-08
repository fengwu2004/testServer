/**
 * Created by yan on 07/12/2016.
 */

function FakeLocateHandle() {

    this.fakePostions = new Array();

    this.posIndex = 0;

    this.totalCount = 100;
}

FakeLocateHandle.prototype.init = function () {

    for (var i = 0; i < this.totalCount; ++i){

        var pos = new Object();

        pos.x = 100 + i * 10;

        pos.y = 100 + i * 10;

        pos.floorId = '14633645973301472';

        this.fakePostions.push(pos);
    }
}

FakeLocateHandle.prototype.getNextPos = function () {

    ++this.posIndex;

    if (this.posIndex >= this.totalCount) {

        this.posIndex = this.posIndex % this.totalCount;
    }

    var pos = this.fakePostions[this.posIndex];

    return pos;
}

FakeLocateHandle.prototype.wrapNextPos = function () {

    var pos = this.getNextPos();

    //
    var data = new Object();

    data.position = new Object();

    data.position.x = pos.x;

    data.position.y = pos.y;

    //
    data.floors = new Array();

    var floor = new Object();

    floor.id = pos.floorId;

    floor.name = 'F2';

    data.seriesNumber = 0;

    data.floors.push(floor);

    var json = new Object();

    json.code = 'success';

    json.data = data;

    return json;
}

module.exports = FakeLocateHandle;
