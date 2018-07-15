var connection = require("../config/connection");

var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err
            callback(result);
        });
    },
    insertOne: function(tableInput, whatToSelect, newValue, callback) {
        var queryString = "INSERT INTO " + tableInput;
        queryString += " (";
        queryString += whatToSelect;
        queryString += ") "
        queryString += "VALUES ('";
        queryString += newValue;
        queryString += "') "
        connection.query(queryString, newValue, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(tableInput, whatToSet, newValue, whatToSelect, callback) {
        var queryString = "UPDATE " + tableInput
        queryString += " SET "
        queryString += whatToSet
        queryString += " = '"
        queryString += newValue
        queryString += "' WHERE "
        queryString += whatToSelect; 
        console.log(queryString);
        connection.query(queryString, [tableInput, whatToSet, newValue, whatToSelect], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;