var maga = require("../../app"),
    eyes = require("eyes"),
    fs = require("fs");

module.exports = function () {
    var appname = maga.argv._[1];

    maga.haibu.stop(appname, function (err, result) {
        if(err) {
            console.log("Error killing application " + appname);
            return eyes.inspect(err);
        }

        eyes.inspect(result);
    });
};