import React, {useState} from "react"

import EmployeeTable from "../EmployeeTable";
import SearchForm from "../SearchForm";



function EmployeeContainer() {
// creating state for Name
// Phone number
// Job role
// Work location
// Salary

const [name, setName] =useState([]);
const [phoneNumber, setphoneNumber] = useState([]);
const [jobRole, setjobRole] = useState([]);
const [workLocation, setworkLocation] = useState([]);
const [salary, setSalary] = useState([])


    const greeting = 'Hello Function Component!';
  
    return <h1>{greeting}</h1>;
  }
  
  export default EmployeeContainer;