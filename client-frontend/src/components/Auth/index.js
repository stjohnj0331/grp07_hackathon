import React, { useState } from 'react';

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
    <div className="login-wrapper" style={styles.loginWrapper}>
      <h1>Please Log In to View the Employee Directory</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" style={styles.input} onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" style={styles.input} onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit" style={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  )
}


const styles = {
  loginWrapper: {
    margin: "2px",
    padding: '2px',
    textAlign: 'center'
  },
  input: {
    margin: '2px',
    padding: '5px',
    borderRadius: '5px'
  },
  button: {
    margin: '2px',
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: '#E5E4E2',
    border: '2px black solid',
    fontWeight: 'bold'
  }
}