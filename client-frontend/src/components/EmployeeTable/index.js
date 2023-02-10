import React from "react";
import  picHolder from "../../images/picHolder.avif"
// props.employees
function EmployeeTable(props) {

return(
  
    <table className="table table-light table-striped table-hover text-center table-sortable">
      {/* Header */}
      <thead>
        <tr>
          <th scope="col">Name</th>

          <th scope="col" data-name="name" data-sortable="true">
            <span onClick={()=> props.sortBy("name")}>
              Name
            </span>
          </th>
      {/* Stuff after clicked */}
      <th scope="col"><span onClick={() => props.sortBy("phone_number")}>Phone</span></th>
      <th scope="col"><span onClick={() => props.sortBy("job_role")}>Job Role</span></th>
      <th scope="col"><span onClick={() => props.sortBy("location")}>Work Location</span></th>
        </tr>
      </thead>


      {/* Body of Table */}
      {/* create a new array for first and Last names  */}
       <tbody>
        
        {props.employees.map(employee=><tr key= {employee._id}>
          <td>
            <img src = {picHolder} alt={employee.name}/>
          </td>

          <td className="align-middle">
            {employee.name}
          </td>

          <td className="align-middle">
          <a href={`tel:+1${employee.phone_number}`}>{employee.phone_number}&gt;</a> 
          </td>

          <td className="align-middle">
          {employee.job_role}
          </td>

          <td classname="align-middle">
          {employee.location}
          </td>

          <td className='align-middle'>
           {employee.salary}
          </td>

        </tr>)}

       </tbody> 

    </table>
    );
};
  


  export default EmployeeTable;