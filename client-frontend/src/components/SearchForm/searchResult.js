

function SearchResult(props) {
    console.log(props)

    return (
        <>
            <div id="employees">
                {props.employeeList.map((employee, index) => <div key={index}>{employee.name}</div>)}
            </div>
        </>
    )
}

export default SearchResult;