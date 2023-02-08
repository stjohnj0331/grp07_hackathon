import React from "react"


function SearchForm(props) {
  
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
  
  
  export default SearchForm;