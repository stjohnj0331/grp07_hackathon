import React from "react"
import { useState } from 'react'
import { getEmployee } from '../../rest/index.js'
import SearchResult from './searchResult.js'


function SearchForm() {
    const [employees, setEmployees] = useState([]);
    // search term is the term that needs to be sent to the backend
    const [searchTerm, setSearchTerm] = useState([]);
    //once the form is submitted, it calls this function to fetch the search results
    function getEmployees(searchTerm) {
        //in mongo 
        let promise = getEmployee(`http://localhost:4000/employee/search/${searchTerm}`);
        promise.then(
            (text) => {
                let employeeArray = text;
                setEmployees(employeeArray);
                console.log(employeeArray)
            }

        )

    }

    return (
        <section className="wrapper">
            <p>Search for an employee to view in the directory.</p>
            <form onSubmit={(e) => { e.preventDefault(); getEmployees(searchTerm) }}>
                <label htmlFor="searchString" style={styles.lbl}>Employee:</label>
                <input onChange={e => setSearchTerm(e.target.value)} value={searchTerm} style={styles.searchBox} />
                <input type="submit" value="Search" className="accept" />
            </form>
            {/* <p>You're searching for {searchTerm}</p> */}
            <SearchResult employeeList={employees}/>
        </section>
    )

}

const styles = {
    lbl: {
        fontSize: "1.1em",
    },
    searchBox: {
        display: 'block',
        width: '95%',
        lineHeight: '1.5em',
        border: 'none',
        borderBottom: '1px solid var(--dark2)',
    },
};
/* function SearchForm(props) {
  
    return(
 <nav className="navbar navbar-blue bg-blue justify-content-center">
        <form className = "form-inline m-2"  onSubmit={props.handleFormSubmit} >
        <input
        className = "form-control"
        value = {props.value}
        name ="search"
        onChange = {props.handleInputChange}
        type = "search"
        placeholde = 'Search'
         />
        </form>
</nav>
    )
}
  
  */
export default SearchForm;