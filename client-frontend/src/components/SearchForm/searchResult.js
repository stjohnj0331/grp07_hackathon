function SearchResult(props) {
    return (
        <>

            <table className="table table-dark table-striped table-hover text-center table-sortable">
                {/* Header */}
                <thead>
                    <tr>

                        <th scope="col" data-name="name" data-sortable="true">
                            <span onClick={() => props.sortBy("name")}>
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

                    {props.employeeList.map(employee => <tr key={employee._id}>

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
{/* add authentication to view salary
                        <td className='align-middle'>
                            {employee.salary}
                        </td> */}

                    </tr>)}

                </tbody>

            </table>
        </>
    )
}

export default SearchResult;