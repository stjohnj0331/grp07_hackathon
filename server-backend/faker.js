// file for creating fake data
const faker = require('@faker-js/faker');
let fs = require('fs');

function generateEmployees(){
    let employees = [];
    console.log(faker);
    for(let i = 0; i <25; i++){
        let name = faker.faker.name.fullName();
        let phoneNumber = faker.faker.phone.phoneNumber();
        let jobRole = faker.faker.name.jobType();
        let location = faker.faker.address.cityName();
        let salary = faker.faker.finance.amount(80000, 300000, 2);
        employees.push({
            id: i,
            name: name,
            phone_number: phoneNumber,
            job_role: jobRole,
            location: location,
            salary: salary,
        });

    }
    return { employees: employees };
}

module.exports = generateEmployees
let dataObj = generateEmployees()
fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));