/**
 * Created by yongmingjiang on 15/12/2016.
 */

var setting = require("../setting"),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;

module.exports = new Db(
                    settings.db,
                    new Server(settings.host, settings.port),
                    {safe: true});
