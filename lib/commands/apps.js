var haibu = require("haibu-api"),
    eyes  = require("eyes");

var apps = exports;

var client = haibu.createClient({
  host: 'localhost',
  port: 9002
}).drone;

apps.list = function (callback) {
    client.running(function (err, results) {
        eyes.inspect(results);
    });
};

apps.deploy = function (callback) {
    // A basic package.json for a node.js application on haibu
    var app = {
      "user": "marak",
      "name": "test",
      "domain": "devjitsu.com",
      "repository": {
        "type": "git",
        "url": "https://github.com/Marak/hellonode.git",
      },
      "scripts": {
        "start": "server.js"
      }
    };

    // Attempt to start up a new application
    client.start(app, function (err, result) {
      if (err) {
        console.log('Error spawning app: ' + app.name);
        return eyes.inspect(err);
      }

      console.log('Successfully spawned app:');
      eyes.inspect(result);
    });    
}