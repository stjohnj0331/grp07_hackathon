//need a DB for hashed pwds 

//anyone can use the directory but only managers/HR can view sensative data or 
//employees can view their own data

//login/verify identity of user/manager/HR
    //create login page with UN/PW inputs
    //create login button 

//limit data visibility based on role and relationship
    //check list of direct reports for managers and normal users
    //if HR allow all sensative data

    import React, { useState } from 'react';
    
    async function loginUser(credentials) {
    
     return fetch('http://localhost:9090/login', {
    
       method: 'POST',
    
       headers: {
    
         'Content-Type': 'application/json'
    
       },
    
       body: JSON.stringify(credentials)
    
     })
    
       .then(data => data.json())
    
    }
    
    export default function Login() {
    
      const [username, setUserName] = useState();
    
      const [password, setPassword] = useState();
      const [token, setToken] = useState();
    
      const handleSubmit = async e => {
    
        e.preventDefault();
    
        const token = await loginUser({
    
          username,
    
          password
    
        });
    
        setToken(token);
    
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