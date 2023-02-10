import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

async function loginUser(credentials) {
  return fetch('http://localhost:4000/users/authenticate', {
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
  const navigate = useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false))

  const handleSubmit = async e => {
    e.preventDefault();
    //here we send the token
    const token = await loginUser({
      username,
      password
    });
    console.log("token: "+token);
    setLoggedInUser(token);
    // if(token === true){
    //   //console.log("Authenticated");
    //   setAuthenticated(true)
    //   localStorage.setItem("authenticated", true);
    //   navigate("/dashboard");
    // }else{
    //   console.log("falied authentication");
    // }
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}