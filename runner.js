var path = '.';
var alg = require(path + '/algorithm.js');
var cases = require(path + '/cases.js');

// console.log(alg);

var getAverage = function(nums) {
    return nums.reduce(function(lastValue, item) {
        return lastValue + item;
    }) / nums.length;
};

var testTime = function() {
    var t1, t0;
    t0 = process.hrtime();
    setTimeout(function() {
        t1 = process.hrtime(t0);
        var result = (t1[0] * 1000) + (t1[1] / 1000000);
    }, 100);
};
// testTime();

var getTime = function(alg, args) {
    var t0, t1;
    var i;
    var total = 100;
    var top = 0.1;
    var results = [];

    for (i = 0; i < total; i++) {
        t0 = process.hrtime();
        alg.apply(this, args);
        t1 = process.hrtime(t0);
        results.push((t1[0] * 1000) + (t1[1] / 1000000));
    }

    results.sort();
    results.splice(Math.round(results.length * top));

    return getAverage(results);
};

cases.forEach(function(item, index) {
    var result;
    var time;

    result = alg.apply(this, item);
    time = getTime(alg, item);

    console.log(item);
    console.log(result);
    console.log(time);
    console.log('------');
});
