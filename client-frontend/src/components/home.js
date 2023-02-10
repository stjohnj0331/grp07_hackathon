import React from "react"

function Home() {
    return(
    <div style={styles.wrap}>
        <h3>Welcome to the Enterprise Employees Directory</h3>
        <p>Select the options to either view all employees or search for employees by name</p>
        <p>Please ensure you are logged in to view sensitive information</p>
    </div>
    )
  }
  
  export default Home;

  const styles = {
    wrap: {
        margin: '30px',
        padding: '2px'
    }
  }