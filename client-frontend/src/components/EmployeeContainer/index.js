import React, {useState, useEffect} from "react"

import EmployeeTable from "../EmployeeTable";



function EmployeeContainer() {
// creating state for Name, phoneNumber, jobRole, workLocation, salary
const [employees, setEmployees] =useState([]);
// const [phoneNumber, setphoneNumber] = useState([]);
// const [jobRole, setjobRole] = useState([]);
// const [workLocation, setworkLocation] = useState([]);
// const [salary, setSalary] = useState([])

// fetch to backend 
useEffect(() => {
    fetch(`http://localhost:4000/employees`)
     .then((response) => setEmployees(response,),(err)=>console.log(err));
   }, []);
  
    return (
        <>
        <div className= "container mt">
        <EmployeeTable employees={employees}/>
        </div>
        </>
    )
  }
  
  export default EmployeeContainer;