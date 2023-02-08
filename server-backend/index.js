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
app.get('/employee/:id', (req, res) => {
    // check if id is correct in req.params.id
    dao.findOneEmployee((err, employee) => {
        if(employee !== undefined){
            console.log("index.js one employeee: " + employee)
            res.send(employee);
        } else {
            res.statusCode = 500;
            res.end;
        }
    });
});