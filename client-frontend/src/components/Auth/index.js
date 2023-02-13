import React, { useState } from 'react';
import background from "../../images/background.png";
import {Button} from 'react-bootstrap';

async function loginUser(credentials) {
  return fetch('http://localhost:5000/users/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

//hash this before sending to the server
export default function Login({setLoggedInUser}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    //here we send the token
    const token = await loginUser({
      username,
      password
    });
    console.log("token: ",token);
    
    setLoggedInUser(token);
  }
  return(
    <div  style={styles.bgDiv}>
    <div className="login-wrapper" style={styles.loginWrapper}>
      <h1>Enterprise Employee Directory</h1>
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <label style={styles.labelDiv}>
          <p>Username</p>
          <input type="text" style={styles.input} onChange={e => setUserName(e.target.value)} />
        </label>
        <label style={styles.labelDiv}> 
          <p>Password</p>
          <input type="password" style={styles.input} onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <Button type="submit"  variant="danger" style={styles.button}>Submit</Button>
        </div>
      </form>
    </div>
    </div>
  )
}


const styles = {
  bgDiv: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover"
  },
  loginWrapper: {
    margin: "2px",
    padding: '200px',
    textAlign: 'center'
  },
  labelDiv: {
    fontWeight: 'bold'
  },
  input: {
    margin: '2px',
    padding: '5px',
    borderRadius: '5px',
    border: '2px red solid'
  },
  button: {
    margin: '2px',
    padding: '5px',
    borderRadius: '5px',
    border: '2px red solid',
    fontWeight: 'bold'
  }
}