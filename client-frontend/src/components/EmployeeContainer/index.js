import React, {useState} from "react"

import EmployeeTable from "../EmployeeTable";
import SearchForm from "../SearchForm";



function EmployeeContainer() {
// creating state for Name, phoneNumber, jobRole, workLocation, salary
const [name, setName] =useState([]);
const [phoneNumber, setphoneNumber] = useState([]);
const [jobRole, setjobRole] = useState([]);
const [workLocation, setworkLocation] = useState([]);
const [salary, setSalary] = useState([])

// fetch to backend 
  
  
    return (
        <>
        <SearchForm/>
        <div className= "container mt">
        <EmployeeTable/>
        </div>
        </>
    )
  }
  
  export default EmployeeContainer;