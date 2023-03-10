import React from "react"

function EntryPage() {
    return(
    <div style={styles.wrap} class="text-center">
        <h3>Welcome to the Enterprise Employees Directory</h3>
        <p>Select the options to either view all employees or search for employees by name</p>
        <p>Please ensure you are logged in to view sensitive information</p>
    </div>
    )
  }
  
  export default EntryPage;

  const styles = {
    wrap: {
        margin: '30px',
        padding: '2px'
    },
    nav: {
        color: "#FFF",
        fontWeight: 'bold'
      },
      header: {
        color: "black",
        height: "5%"
      },
      main: {
        height: "90%",
        textPosition: "center"
      },
      footer: {
        position: "absolute",
        bottom: 0,
        height: '5%',
        color: 'black'
      },
      button: {
        width: '200px',
        padding: '5px',
        margin: '2px'
      },
      buttonGroup: {
        margin: '5px',
        padding: '10px'
      }
  }