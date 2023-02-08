const mongodb = require("mongodb"); //mongo client library
const url = "mongodb://localhost:27017/employees";
let dbPool; //database connection

mongodb.MongoClient.connect(url, function(err, db){
    if(!err){
        dbPool = db.db('employees');
    } else {
        console.log("DB CONNECTION FAILED. Is database running?");
    }
});

// retrieve all people
// using the skip and limit i need to tie in pagination by passing in the value
module.exports.findAllEmployees = function(callback, value) {
    var col = dbPool.collection("employees");
    col.find()//.skip(0).limit(20)
        .toArray((err, employees) => {
            if(!err){
                callback(null, employees);
            } else {
                callback("failed to find employees", undefined);
            }
        });
};

//reconfigure to find one employee
module.exports.findOneEmployee = function(id, callback) {
    var col = dbPool.collection("employees");
     col.find({_id: +id})
        .toArray((err, employee) => {
            if(!err){
                callback(null, employee)
            } else {
                callback("Failed to find employee", undefined)
            }
        }); 
        
};


// db.employees.find({"last_name":{$regex: /name/ } })
// finding all employees from the search term
module.exports.searchEmployees = function(searchName, callback) {
    var col = dbPool.collection("employees");
    col.find({last_name: {$regex: searchName }})
        .toArray((err, employees) => {
            if(!err){
                callback(null, employees);
            } else {
                callback("failed to find employees", undefined);
            }
        });
};