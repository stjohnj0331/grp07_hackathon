import React from "react"

function EmployeeTable(props) {
  return (
    <div>
      {props.employees}
    </div>
  )
// return(
  
//     <table className="table table-dark table-striped table-hover text-center table-sortable">
//       {/* Header */}
//       <thead>
//         <tr>
//           <th scope="col">Image</th>

//           <th scope="col" data-name="name" data-sortable="true">
//             <span onClick={()=> props.sortBy("name")}>
//               Name
//             </span>
//           </th>
//       {/* Stuff after clicked */}
//       <th scope="col"><span onClick={() => props.sortBy()}></span></th>
//       <th scope="col"><span onClick={() => props.sortBy()}></span></th>
//       <th scope="col"><span onClick={() => props.sortBy()}></span></th>
//         </tr>
//       </thead>


//       {/* Body of Table */}
//       {/* create a new array for first and Last names  */}
//        <tbody>
//         {props.state(() =>{
//         const {first, last} = props.Name;
//         const Name = `${first} ${last}` 
//        return (
//         <tr>
//           <td>
//             <img src = {props.employeeDefaultPic} alt={props.name}/>
//           </td>

//           <td className="align-middle">
//             {props.name}
//           </td>

//           <td className="align-middle">
//           <a href={`tel:+1${props.phoneNumber}`}>{props.phoneNumber}&gt;</a> 
//           </td>

//           <td className="align-middle">
//           {props.jobRole}
//           </td>

//           <td classname="align-middle">
//           {props.workLocation}
//           </td>

//           <td className='align-middle'>
//            {props.salary}
//           </td>

//         </tr>
//        );
//       } )}
//        </tbody> 

//     </table>
//     );
};


  export default EmployeeTable;