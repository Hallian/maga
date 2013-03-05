var vows = require("vows"),
    assert = require("assert"),
    eyes = require("eyes");

var list = require("../lib/commands/list");

vows.describe("maga list").addBatch({
    "list" : {
        topic : list,
        "when called without parameters" : {
            topic : function (listCommand) {
                listCommand(this.callback);
            },
            "should return an array" : function (data) {
                assert.isArray(data);
            }
        }
    }
}).export(module);