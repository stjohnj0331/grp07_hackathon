const express = require('express');
const dao = require("./mongo-dao");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;
console.timeLog("server starting on port: " + port);
app.listen(port);

//routes for get all employees
// get one employee based on search term

app.get('/employees', (req, res) => {
    // check if id is correct in req.params.id
    dao.findAllEmployees((err, employees, value) => {
        if(employees !== undefined){
            console.log("index.js all employees: " + employees)
            res.send(employees);
        } else {
            res.statusCode = 500;
            res.end;
        }
    });
});

// get one employee based on search term
app.get('/employee/:_id', (req, res) => {
    // check if id is correct in req.params.id
    dao.findOneEmployee(req.params._id, (err, employee) => {
        if(employee !== undefined){
        //    console.log("index.js one employee: " + req.params._id)
            res.send(employee);
        } else {
            res.statusCode = 404;
            res.end;
        }
    });
});

//search for employees based on last name from front end
app.get('/employee/search/:name', (req, res) => {
    dao.searchEmployees(req.params.name, (err, employees) => {
        if(employees !== undefined){
            res.send(employees)
        } else {
            res.statusCode = 404;
            res.end;
        }
    });
});