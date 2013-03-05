var maga = require("../../app"),
    eyes = require("eyes"),
    fs = require("fs");

module.exports = function (callback) {
    fs.readFile("package.json", "utf8", function (err, data) {
        var app = JSON.parse(data);
        app.user = maga.config.get("USER");

        if(err) {
            console.log("Error reading package.json");
            return eyes.inspect(err);
        }

        maga.haibu.start(app, function (err, result) {
          if (err) {
            console.log('Error spawning app: ' + app.name);
            return eyes.inspect(err);
          }

          console.log('Successfully spawned app:');
          eyes.inspect(result);
        });

    });
};