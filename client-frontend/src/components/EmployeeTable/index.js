import React from "react";
import picHolder from "../../images/picHolder.avif"
// import Gravatar from "react-gravatar"
// props.employees
function EmployeeTable(props) {
  const userIndex =  props.employees.findIndex(employee => employee.name === props.username)
  //list of employees that are managed by the user
  const userEmployees = props.employees[userIndex]?.employes;
  const jobRole = props.employees[userIndex]?.job_role;
  return (



    <table className="table table-light table-striped table-hover text-center table-bordered">
      {/* Header */}
      <thead >
        <tr>
          <th scope="col">Image</th>

          <th scope="col" data-name="name" data-sortable="true">
            <span onClick={() => props.sortBy("name")}>
              Name
            </span>
          </th>

      {/* Stuff after clicked */}
      <th scope="col"><span onClick={() => props.sortBy("phone_number")}>Phone</span></th>
      <th scope="col"><span onClick={() => props.sortBy("job_role")}>Job Role</span></th>
      <th scope="col"><span onClick={() => props.sortBy("location")}>Work Location</span></th>

          <th scope="col" data-name="salary" data-visible="false">
            <span onClick={() => props.sortBy("salary")}>
              Salary
            </span>
          </th>

        </tr>
      </thead>


      {/* Body of Table */}
      {/* create a new array for first and Last names  */}
      <tbody>

        {props.employees.map(employee => <tr key={employee._id}>
          <td className="height=50%">
            <img style={{ width: "50%", height: "50%" }} src={picHolder} alt={employee.name} className="img-thumbnail" />

          </td>

          <td className="align-middle">
            {employee.name}
          </td>

          <td className="align-middle">
            <a href={`tel:+1${employee.phone_number}`}>{employee.phone_number}</a>
          </td>

          <td className="align-middle">
            {employee.job_role}
          </td>

          <td classname="align-middle">
            {employee.location}
          </td>

          {props.username === employee.name || userEmployees.includes(employee.name) || jobRole === "HR" ? (
            <td className='align-middle'>
              {employee.salary}
            </td>
          ) : (
            <td className='align-middle'>
              Access not allowed
            </td>
          )}

        </tr>)}

      </tbody>

    </table>


  )
};

export default EmployeeTable;