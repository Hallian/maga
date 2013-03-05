var eyes  = require("eyes"),
    maga  = require("../../app");

module.exports = function (callback) {
    maga.haibu.running(function (err, results) {
        eyes.inspect(results);
        callback(results);
    });
};