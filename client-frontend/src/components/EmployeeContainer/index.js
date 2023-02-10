import React, {useState, useEffect} from "react"
import {getAllEmployee} from "../../rest/index.js"
import EmployeeTable from "../EmployeeTable";



function EmployeeContainer(username) {

const [employees, setEmployees] =useState([]);
// const [filterEmployees, setFilteredEmployees] =useState([])
const [searchTerm, setSearchTerm] = useState([]);


// fetch to backend 

    //in mongo 
        useEffect (()=>{
        let promise = getAllEmployee(`http://localhost:4000/employees`);
        promise.then((employees)=>{
          setEmployees(employees)
        }) }, [])
        
    //   filterEmployees = (data) => {
    //     if(data) {
    //         setEmployees({
    //             setfilteredEmployees: employees.filter((employee)=>{
    //                 return (
    //                   employee.name ||
    //                   employee.phone_number ||
    //                   employee.job_role ||
    //                   employee.location ||
    //                   employee.salary

    //                 )
    //             })
    //         })
    //     } else{
    //         setEmployees({setfilteredEmployees: employees})
    //     }
    //   };
   

  
    return (
        <>
        <div className= "container mt">
        <EmployeeTable employees={employees} username={username.username}/>
        </div>
        </>
    )
  }
  
  export default EmployeeContainer;